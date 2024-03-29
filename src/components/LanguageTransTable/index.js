import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { ToastType, useToast } from '../../contexts/ToastContext'

/**
 * Component to manage LanguageTransTable behavior without UI component
 */
export const LanguageTransTable = (props) => {
  const {
    UIComponent,
    getTranslations
  } = props

  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })

  /**
   * Method to save Updated new translation key and text
   * @param {string} type translation field name
   * @param {EventTarget} evt Related HTML event
   */
  const handleChangeInput = (type, evt) => {
    setFormState({ ...formState, changes: { ...formState?.changes, [type]: evt.target.value } })
  }

  const handleUpdateClick = () => {
    createTranslation()
  }

  /**
   * Method to update translation from API
   */
  const createTranslation = async () => {
    try {
      setFormState({
        ...formState,
        loading: true
      })
      showToast(ToastType.Info, t('LOADING', 'Loading'))

      const { content: { error, result } } = await ordering.translations().save(formState?.changes)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          changes: {},
          result: {
            error: false,
            result: result
          }
        })
        getTranslations && getTranslations()
        showToast(ToastType.Success, t('WEB_APP_LANG_ADDED', 'Language item added'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          creationFormState={formState}
          handleChangeInput={handleChangeInput}
          handleUpdateClick={handleUpdateClick}
        />
      )}
    </>
  )
}

LanguageTransTable.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to get translation list
   */
  getTranslations: PropTypes.func,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

LanguageTransTable.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
