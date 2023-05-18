import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useConfig } from '../../contexts/ConfigContext'

export const CustomDomain = (props) => {
  const {
    UIComponent,
    site,
    setSite,
    onClose
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [{ configs }] = useConfig()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })

  const handleSaveConfig = async (changes) => {
    const { content: { error, result } } = await ordering.setAccessToken(token).configs(configs?.google_maps_api_key?.id).save(changes)
    if (error) {
      throw Error(result)
    }
  }

  const handleSaveDomain = async (changes) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(changes)
    }

    const response = await fetch(`${ordering.root}/sites/${site?.id}`, requestOptions)
    const { error, result } = await response.json()
    if (error) {
      throw Error(result)
    }
  }

  /**
 * Method to update the site theme from API
 */
  const handleChangeCustomDomain = async (mapKey) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))

      if (mapKey) {
        const mapApiKeyChanges = {
          key: configs?.google_maps_api_key?.key,
          value: mapKey
        }
        await handleSaveConfig(mapApiKeyChanges)
      }

      await handleSaveDomain(formState?.changes)

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState?.changes)
      }

      const response = await fetch(`${ordering.root}/sites/${site?.id}/ssl/re-issue`, requestOptions)
      const { error, result } = await response.json()

      if (!error) {
        showToast(ToastType.Success, t('DOMAIN_IS_CHANGED', 'The domain is changed'))
        setSite({
          ...site,
          domain: formState?.changes?.domain,
          ssl_process_status: 'pending'
        })
        onClose && onClose()
      } else {
        showToast(ToastType.Error, result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  const handleChangeFormState = (changes) => {
    setFormState({
      ...formState,
      changes: {
        ...formState?.changes,
        ...changes
      }
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleChangeFormState={handleChangeFormState}
          handleChangeCustomDomain={handleChangeCustomDomain}
        />
      )}
    </>
  )
}

CustomDomain.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before sites list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after sites list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after sites list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CustomDomain.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
