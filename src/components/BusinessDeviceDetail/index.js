import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

/**
 * Component to manage BusinessDeviceDetail behavior without UI component
 */
export const BusinessDeviceDetail = (props) => {
  const {
    UIComponent,
    propsToFetch,
    selectedDevice,
    devices,
    handleUpdateDeviceList,
    onClose
  } = props

  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [{ token, user }] = useSession()
  const [ordering] = useApi()

  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], error: null })

  /**
   * Method to delete a device from API
   */
  const deleteDevice = async () => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/devices/${selectedDevice?.id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
        const updatedDevices = devices.filter(device => device?.id !== selectedDevice?.id)
        handleUpdateDeviceList && handleUpdateDeviceList(updatedDevices)
        showToast(ToastType.Success, t('DEVICE_DELETED', 'Device deleted'))
        onClose && onClose()
      } else {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to create a device from API
   */
  const addDevice = async () => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const changes = { ...formState?.changes, user_id: user?.id }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/devices`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          result: content.result,
          loading: false
        })
        const updatedDevices = [...devices, content?.result]
        handleUpdateDeviceList && handleUpdateDeviceList(updatedDevices)
        showToast(ToastType.Success, t('DEVICE_CREATED', 'Device created'))
        onClose && onClose()
      } else {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to update a device from API
   */
  const updateDevice = async () => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const changes = {
        business_id: selectedDevice?.business_id,
        user_id: user.id,
        ...formState?.changes
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/devices/${selectedDevice?.id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
        const updatedDevices = devices.map(device => {
          if (device?.id === selectedDevice?.id) {
            return {
              ...device,
              ...content.result
            }
          }
          return device
        })
        handleUpdateDeviceList && handleUpdateDeviceList(updatedDevices)
        showToast(ToastType.Success, t('DEVICE_UPDATED', 'Device updated'))
      } else {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to get business list from API
   */
  const getBusinessList = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses().asDashboard().select(propsToFetch).get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
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

  useEffect(() => {
    getBusinessList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          updateDevice={updateDevice}
          addDevice={addDevice}
          deleteDevice={deleteDevice}
          formState={formState}
          handleChangeFormState={handleChangeFormState}
          businessList={businessList}
        />
      )}
    </>
  )
}

BusinessDeviceDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

BusinessDeviceDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
