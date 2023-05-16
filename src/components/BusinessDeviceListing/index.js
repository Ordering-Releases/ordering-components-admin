import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage BusinessDeviceListing behavior without UI component
 */
export const BusinessDeviceListing = (props) => {
  const {
    UIComponent
  } = props

  const [searchValue, setSearchValue] = useState(null)
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [deviceListState, setDeviceListState] = useState({ loading: false, devices: [], error: null })

  /**
   * Method to update device list
   */
  const handleUpdateDeviceList = (devices) => {
    setDeviceListState({ ...deviceListState, devices })
  }

  /**
   * Method to get device list
   */
  const getDevices = async () => {
    if (loading) return
    try {
      setDeviceListState({ ...deviceListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/devices`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setDeviceListState({
          ...deviceListState,
          loading: false,
          devices: result
        })
      } else {
        setDeviceListState({
          ...deviceListState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setDeviceListState({
        ...deviceListState,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getDevices()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          onSearch={setSearchValue}
          handleUpdateDeviceList={handleUpdateDeviceList}
          deviceListState={deviceListState}
        />
      )}
    </>
  )
}

BusinessDeviceListing.propTypes = {
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

BusinessDeviceListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
