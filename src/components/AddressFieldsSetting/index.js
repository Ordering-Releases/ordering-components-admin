import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage address field behavior without UI component
 */
export const AddressFieldsSetting = (props) => {
  const {
    UIComponent,
    code
  } = props

  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [{ token }] = useSession()

  const [validationFieldState, setValidationFieldState] = useState({ fields: [], loading: false, error: null })
  const [originaState, setOriginalState] = useState({ fields: [], loading: false, error: null })
  const [sitesState, setSitesState] = useState({ loading: true, sites: [], error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [selectedSiteId, setSelectedSiteId] = useState(null)

  /**
   * Method to get the address fields from API
   */
  const getAddressFieldsBySite = async () => {
    try {
      setValidationFieldState({ ...validationFieldState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/validation_field_sites`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        let filteredResult = []
        if (code === 'address') {
          filteredResult = result.filter(
            field => field?.validation_field?.validate === 'address' && field?.validation_field?.code !== 'city_dropdown_option' && field?.validation_field?.code !== 'name' &&
            field?.validation_field?.code !== 'lastname' && field?.validation_field?.code !== 'mobile_phone' &&
            field?.validation_field?.code !== 'email' && field?.validation_field?.code !== 'middle_name' && field?.validation_field?.code !== 'second_lastname'
          )
        } else {
          filteredResult = result.filter(field => field?.validation_field?.validate === 'card')
        }
        setValidationFieldState({ fields: filteredResult, loading: false })
      }
    } catch (err) {
      setValidationFieldState({ ...validationFieldState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the checkout fields setting from API
   * @param {Number} fieldId selected field id
   * @param {Number} siteId site id
   * @param {Object} changes changes
   */
  const handleChangeFieldSetting = async (fieldId, siteId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const content = await updateCheckoutField(fieldId, siteId, changes)
      if (!content.error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('FIELD_SAVED', 'Field saved'))
        const fields = validationFieldState.fields.map(field => {
          if (field.site_id === siteId && field.validation_field_id === fieldId) {
            return {
              ...field,
              ...changes
            }
          }
          return field
        })
        setValidationFieldState({ ...validationFieldState, fields })
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the address fields from API
   */
  const getAddressFields = async () => {
    try {
      setOriginalState({ ...originaState, loading: true })
      const conditons = [
        {
          attribute: 'validate',
          value: code ?? 'address'
        }
      ]
      const { content: { result, error } } = await ordering.validationFields().where(conditons).get()
      if (!error) {
        let filteredResult = result
        if (code === 'address') {
          filteredResult = result.filter(
            field => field.code !== 'city_dropdown_option' && field.code !== 'name' &&
            field.code !== 'lastname' && field.code !== 'mobile_phone' &&
            field.code !== 'email' && field.code !== 'middle_name' && field.code !== 'second_lastname'
          )
        }
        setOriginalState({ fields: filteredResult, loading: false })
      }
    } catch (err) {
      setOriginalState({ ...originaState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the sites from API
   */
  const handleGetSitesList = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setSitesState({
          loading: false,
          sites: result,
          error: null
        })
      } else {
        setSitesState({
          ...sitesState,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setSitesState({
        ...sitesState,
        loading: false,
        error: [error.message]
      })
    }
  }

  const updateCheckoutField = async (fieldId, siteId, changes, isResult) => {
    const requestOptions = {
      method: isResult ? 'POST' : 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(changes)
    }
    const response = await fetch(`${ordering.root}/validationfields/${fieldId}/sites/${siteId}`, requestOptions)
    const content = await response.json()
    if (content?.error) throw new Error(content.result)
    if (isResult) return content.result
    return content
  }

  const updateCheckoutFields = async () => {
    try {
      setActionState({ ...actionState, loading: true, isPost: true })
      const content = await Promise.all(originaState?.fields.map(field => updateCheckoutField(field?.id, selectedSiteId, { enabled: true, ...(field?.code === 'email' && { required: true }) }, true)))
      setValidationFieldState({ ...validationFieldState, fields: [...validationFieldState.fields, ...content] })
      setActionState({ ...actionState, loading: false, isPost: false })
    } catch (err) {
      setActionState({ loading: false, error: [err.message], isPost: false })
    }
  }

  useEffect(() => {
    if (selectedSiteId) {
      const fieldsBySite = validationFieldState?.fields.filter(field => field.site_id === selectedSiteId)
      if (fieldsBySite?.length === 0) {
        updateCheckoutFields()
      }
    }
  }, [selectedSiteId])

  useEffect(() => {
    getAddressFields()
    handleGetSitesList()
    getAddressFieldsBySite()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          validationFieldState={validationFieldState}
          handleChangeFieldSetting={handleChangeFieldSetting}
          sitesState={sitesState}
          selectedSiteId={selectedSiteId}
          setSelectedSiteId={setSelectedSiteId}
          actionState={actionState}

        />
      )}
    </>
  )
}

AddressFieldsSetting.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before address fields
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after address fields
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before address fields
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after address fields
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AddressFieldsSetting.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
