import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const SingleLoyaltyLevel = (props) => {
  const {
    UIComponent,
    handleDeleteLevelList,
    handleUpdateLevelList
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, error: null, changes: {} })

  /**
   * Update a level
   * @param {EventTarget} evt Related HTML event
   * @param {Number} levelId id of level
   */
  const handleUpdateLevel = (evt, levelId) => {
    const changes = levelId === formState?.changes?.id
      ? { ...formState?.changes, [evt.target.name]: evt.target.value }
      : { [evt.target.name]: evt.target.value, id: levelId }
    setFormState({ ...formState, changes: changes })
  }

  /**
   * Update a level
   */
  const handleChangeLevel = (changes, levelId) => {
    const currentChanges = levelId === formState?.changes?.id
      ? { ...formState?.changes, ...changes }
      : { ...changes, id: levelId }
    setFormState({ ...formState, changes: currentChanges })
  }

  const handleUpdateBtnClick = () => {
    updateLevel(formState?.changes, formState?.changes?.id)
  }

  /**
   * Default fuction to delete a level
   */
  const handleUpdateDeleteClick = async (id) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const fetchEndpoint = `${ordering.root}/loyalty_levels/${id}`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('LEVEL_DELETED', 'Level deleted'))
        setFormState({ ...formState, loading: false, error: null, changes: {} })
        handleDeleteLevelList(result)
      } else {
        setFormState({ ...formState, loading: false, error: result })
      }
    } catch (error) {
      setFormState({ ...formState, loading: false, error: error.message })
    }
  }

  /**
   * Function to update a webhook
   */
  const updateLevel = async (changes, id) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/loyalty_levels/${id}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFormState({ changes: {}, loading: false, error: null })
        handleUpdateLevelList(result)
        showToast(ToastType.Success, t('LEVEL_UPDATED', 'Level updated'))
      } else {
        setFormState({ ...formState, loading: false, error: result })
      }
    } catch (error) {
      setFormState({ ...formState, loading: false, error: error.message })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleUpdateDeleteClick={handleUpdateDeleteClick}
          handleUpdateLevel={handleUpdateLevel}
          handleUpdateBtnClick={handleUpdateBtnClick}
          handleChangeLevel={handleChangeLevel}
        />
      )}
    </>
  )
}

SingleLoyaltyLevel.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleLoyaltyLevel.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
