import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'

/**
 * Component to manage address field behavior without UI component
 */
export const AddressFieldsSetting = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [, { loadValidationFields }] = useValidationFields()

  const [addressFieldsState, setAddressFieldsState] = useState({ fields: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the address fields from API
   */
  const getAddressFields = async () => {
    try {
      setAddressFieldsState({ ...addressFieldsState, loading: true })
      const conditons = [
        {
          attribute: 'validate',
          value: 'address'
        }
      ]
      const { content: { result, error } } = await ordering.validationFields().where(conditons).get()
      if (!error) {
        const filteredResult = result.filter(
          field => field.code !== 'city_dropdown_option' && field.code !== 'name' &&
          field.code !== 'lastname' && field.code !== 'mobile_phone' &&
          field.code !== 'email' && field.code !== 'middle_name' && field.code !== 'second_lastname'
        )
        setAddressFieldsState({ fields: filteredResult, loading: false })
      }
    } catch (err) {
      setAddressFieldsState({ ...addressFieldsState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the address fields setting from API
   * @param {Number} fieldId selected field id
   * @param {Object} changes changes
   */
  const handleChangeFieldSetting = async (fieldId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const { content: { result, error } } = await ordering.validationFields(fieldId).save(changes)

      if (!error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('FIELD_SAVED', 'Field saved'))
        const fields = addressFieldsState.fields.filter(field => {
          if (field.id === fieldId) {
            Object.assign(field, result)
          }
          return true
        })
        setAddressFieldsState({ ...addressFieldsState, fields: fields })
        loadValidationFields && loadValidationFields()
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getAddressFields()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          addressFieldsState={addressFieldsState}
          handleChangeFieldSetting={handleChangeFieldSetting}
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
