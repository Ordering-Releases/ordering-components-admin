import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const PaymentOptionSquare = (props) => {
  const {
    businessPaymethod,
    UIComponent,
    business,
    businessPaymethods,
    handleSuccessPaymethodUpdate
  } = props

  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [squareUrlState, setSquareUrlState] = useState({ url: null, loading: false, error: null })
  const [squareData, setSquareData] = useState({
    sandbox: businessPaymethod?.sandbox,
    data: businessPaymethod?.data,
    data_sandbox: businessPaymethod?.data_sandbox
  })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get connect url
   */
  const handleGetConnectUrl = async () => {
    try {
      setSquareUrlState({ ...squareUrlState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          business_id: business?.id,
          project_name: ordering?.project
        })
      }
      const url = 'https://plugins-live.ordering.co/square/oauth/oauth'
      const response = await fetch(url, requestOptions)
      const { status, result } = await response.json()
      if (status === 'ok') {
        setSquareUrlState({
          ...squareUrlState,
          loading: false,
          url: result?.data.url
        })
      } else {
        setSquareUrlState({
          ...squareUrlState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setSquareUrlState({ ...squareUrlState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to connect with Square
   */
  const handleConnectSquare = () => {
    const connect = window.open(squareUrlState.url, '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,clearcache=yes')
    const interval = setInterval(function () {
      if (!connect.closed) {
        connect.postMessage('data', ordering.url)
      } else {
        clearInterval(interval)
      }
    }, 200)
    let timeout = null
    window.addEventListener('message', (e) => {
      if (e.origin.indexOf('.ordering.co') === -1) {
        return
      }
      clearInterval(interval)
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(function () {
        connect.postMessage('close', ordering.url)
        if (e.data) {
          setSquareData(e.data.paymethod_credentials)
          connect.close()
        }
      }, 1000)
    })
  }

  /**
   * Method to update the business paymethod option
   * @param {Number} paymethodId business paymethod id to delete
   * @param {Object} options parameters to update
   */
  const handleSavePaymethod = async (paymethodId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          sandbox: squareData?.sandbox,
          data: JSON.stringify(squareData?.data),
          data_sandbox: JSON.stringify(squareData?.data_sandbox)
        })
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods/${paymethodId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const updatedPaymethods = businessPaymethods.map(paymethod => {
          if (paymethod.id === paymethodId) {
            Object.assign(paymethod, content.result)
          }
          return paymethod
        })
        handleSuccessPaymethodUpdate && handleSuccessPaymethodUpdate(updatedPaymethods)
        showToast(ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'))
      }
      setActionState({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionState({ error: [err.message], loading: false })
    }
  }

  /**
   * Update square data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeDataInput = (e) => {
    setSquareData({
      ...squareData,
      data: {
        ...squareData?.data,
        [e.target.name]: e.target.value
      }
    })
  }

  /**
   * Update square sandbox data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeSanboxDataInput = (e) => {
    setSquareData({
      ...squareData,
      data_sandbox: {
        ...squareData?.data_sandbox,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    handleGetConnectUrl()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          squareUrlState={squareUrlState}
          squareData={squareData}
          actionState={actionState}
          handleConnectSquare={handleConnectSquare}
          handleSavePaymethod={handleSavePaymethod}
          handleChangeDataInput={handleChangeDataInput}
          handleChangeSanboxDataInput={handleChangeSanboxDataInput}
        />
      )}
    </>
  )
}

PaymentOptionSquare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
    * Components types before business promotions
    * Array of type components, the parent props will pass to these components
    */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business promotions
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business promotions
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business promotions
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionSquare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
