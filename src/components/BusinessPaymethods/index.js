import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

const paymethodsNotAllowed = ['paypal_express', 'authorize']

export const BusinessPaymethods = (props) => {
  const {
    business,
    UIComponent,
    defaultSandboxRequiredGateways,
    handleSuccessUpdate
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [configState] = useConfig()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [businessPaymethodsState, setBusinessPaymethodsState] = useState({ paymethods: [], loading: true, error: null })
  const [sitesState, setSitesState] = useState({ sites: [], loading: true, error: null })
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  const sandboxRequiredGateways = defaultSandboxRequiredGateways || ['paypal', 'stripe_direct', 'paypal_express', 'stripe_connect', 'stripe_redirect', 'carlos_payment', 'ivr']
  const [actionState, setActionState] = useState({ loading: false, result: { error: false } })
  const [changesState, setChangesState] = useState({})
  const [stripeConnectData, setStripeConnectData] = useState({})
  const [isSuccessDeleted, setIsSuccessDeleted] = useState(false)
  const stripeClientId = configState?.configs?.stripe_connect_sandbox?.value === '1'
    ? configState?.configs?.stripe_connect_client_id_sandbox?.value
    : configState?.configs?.stripe_connect_client_id?.value

  /**
   * Clean formState
   */
  const cleanChangesState = (values) => setChangesState({ ...values })

  const parsePaymethods = (paymethods) => {
    const _paymethods = paymethods && paymethods.filter(paymethod => !paymethodsNotAllowed.includes(paymethod?.gateway))
    return _paymethods
  }

  /**
   * Method to get paymethods from API
   */
  const getBusinessPaymethods = async () => {
    try {
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods?params=sites`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'x-app-x': ordering?.appId
          }
        }
      )
      const { result } = await response.json()
      try {
        const response2 = await fetch(`${ordering.root}/sites`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              'x-app-x': ordering?.appId
            }
          }
        )
        const { result: sitesResult } = await response2.json()
        setSitesState({ ...sitesState, loading: false, sites: sitesResult })
      } catch (err) {
        setSitesState({ ...sitesState, loading: false, sites: err.message })
      }
      setBusinessPaymethodsState({ ...paymethodsList, loading: false, paymethods: result })
    } catch (err) {
      setBusinessPaymethodsState({ ...paymethodsList, loading: false, error: err.message })
    }
  }

  /**
   * Method to get paymethods from API
   */
  const getAllPaymethods = async () => {
    try {
      const response = await fetch(`${ordering.root}/paymethods?where=[{%22attribute%22:%22enabled%22,%22value%22:true}]`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'x-app-x': ordering?.appId }
        }
      )
      const { result } = await response.json()
      setPaymethodsList({ ...paymethodsList, loading: false, paymethods: parsePaymethods(result) })
    } catch (err) {
      setPaymethodsList({ ...paymethodsList, loading: false, error: err.message })
    }
  }

  /**
   * Method to create the business paymethod option from API
   * @param {*} paymethodId paymethod id to create
   */
  const handleCreateBusinessPaymentOption = async (paymethodId) => {
    const paymethod = paymethodsList.paymethods.find(_paymethod => _paymethod.id === paymethodId)
    const params = {
      enabled: true,
      paymethod_id: paymethodId,
      sandbox: sandboxRequiredGateways.includes(paymethod.gateway)
    }
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-app-x': ordering?.appId
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setBusinessPaymethodsState(prevState => ({
          ...prevState,
          paymethods: [
            ...prevState.paymethods,
            { ...content.result, paymethod: paymethod }
          ]
        }))
        setActionState({ loading: false, result: { error: false } })
        showToast(ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'))
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to update the business paymethod option
   * @param {Number} paymethodId business paymethod id to delete
   * @param {Object} options parameters to update
   */
  const handleUpdateBusinessPaymethodOpton = async (paymethodId, options) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-app-x': ordering?.appId
        },
        body: JSON.stringify(options)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods/${paymethodId}`, requestOptions)
      const content = await response.json()
      setChangesState(content.error ? changesState : {})
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        setBusinessPaymethodsState(prevState => ({
          ...prevState,
          paymethods: prevState.paymethods.filter(paymethod => {
            if (paymethod.id === paymethodId) {
              Object.assign(paymethod, content.result)
            }
            return true
          })
        }))
        showToast(ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'))
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to update the business paymethod option
   */
  const handleUpdateBusiness = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-app-x': ordering?.appId
        },
        body: JSON.stringify(changesState)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}`, requestOptions)
      const content = await response.json()
      setChangesState(content.error ? changesState : {})
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleSuccessUpdate && handleSuccessUpdate(content.result)
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to delete the business paymethod option from API
   * @param {Number} paymethodId id to delete the business paymethod
   */
  const handleDeleteBusinessPaymethodOption = async (paymethodId) => {
    const businessPaymethodId = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId).id
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-app-x': ordering?.appId
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods/${businessPaymethodId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const updatedPaymethods = businessPaymethodsState.paymethods.filter(paymethod => paymethod.paymethod_id !== paymethodId)
        setBusinessPaymethodsState({ ...businessPaymethodsState, paymethods: updatedPaymethods })
        showToast(ToastType.Success, t('PAYMETHOD_DELETED', 'Payment method deleted'))
        setIsSuccessDeleted(true)
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to handle payment enabled state
   * @param {Number} paymethodId id of payment method
   */
  const handleClickPayment = (paymethodId) => {
    const found = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId)
    if (found) {
      handleUpdateBusinessPaymethodOpton(found.id, {
        enabled: !found.enabled
      })
    } else {
      handleCreateBusinessPaymentOption(paymethodId)
    }
  }

  /**
   * Method to allow all paymethods
   */
  const handleSelectAllPaymethods = () => {
    for (const paymethod of paymethodsList.paymethods) {
      const found = businessPaymethodsState.paymethods.find(_paymethod => _paymethod.paymethod_id === paymethod.id)
      if (found) {
        if (!found?.enabled) {
          handleUpdateBusinessPaymethodOpton(found.id, {
            enabled: true
          })
        }
      } else {
        handleCreateBusinessPaymentOption(paymethod.id)
      }
    }
  }
  /**
   * Method to disable all paymethods
   */
  const handleSelectNonePaymethods = () => {
    for (const paymethod of businessPaymethodsState.paymethods) {
      if (paymethod?.enabled) {
        handleUpdateBusinessPaymethodOpton(paymethod.id, {
          enabled: false
        })
      }
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} sandbox value if sandbox data is or not
   */
  const handleChangeInput = (e, sandbox) => {
    if (sandbox) {
      setChangesState({
        ...changesState,
        data_sandbox: {
          ...changesState?.data_sandbox,
          [e.target.name]: e.target.value
        }
      })
    } else {
      setChangesState({
        ...changesState,
        data: {
          ...changesState?.data,
          [e.target.name]: e.target.value
        }
      })
    }
  }
  /**
   * Method to control the sanbox enable state
   */
  const handleChangeSandbox = () => {
    setChangesState({
      ...changesState,
      sandbox: !changesState?.sandbox
    })
  }

  /**
   * Method to connect with stripe
   */
  const handleStripeConnect = () => {
    const connect = window.open(`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${stripeClientId}&scope=read_write&state=${token}`, '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,clearcache=yes')
    const interval = setInterval(function () {
      if (!connect.closed) {
        connect.postMessage('data', ordering.url)
      } else {
        clearInterval(interval)
      }
    }, 200)
    let timeout = null
    window.addEventListener('message', function (e) {
      if (e.origin.indexOf('.ordering.co') === -1) {
        return
      }
      clearInterval(interval)
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(function () {
        connect.postMessage('close', ordering.url)
        if (!e.data.error && e.data.result) {
          const data = e.data.result
          const stripeData = {
            sandbox: data.livemode,
            data: {
              token: data.access_token,
              publishable: data.stripe_publishable_key,
              user: data.stripe_user_id,
              refresh_token: data.refresh_token
            }
          }
          setStripeConnectData(stripeData)
        } else if (e.data.error) {
          setActionState({ ...actionState, loading: false, error: e.data.error })
        }
      }, 1000)
    })
  }

  /**
   * Method to save the stripe connect data
   * @param {Number} paymethodId id of payment method
   */
  const handleStripeSave = (paymethodId) => {
    let requestionOptions = {
      ...stripeConnectData,
      sandbox: true,
      data_sandbox: JSON.stringify(stripeConnectData?.data)
    }
    if (requestionOptions?.allowed_order_types) {
      requestionOptions = {
        ...requestionOptions,
        allowed_order_types: requestionOptions.allowed_order_types.length > 0
          ? JSON.stringify(requestionOptions.allowed_order_types)
          : null
      }
    }
    if (requestionOptions?.sites) {
      requestionOptions = {
        ...requestionOptions,
        sites: JSON.stringify(requestionOptions.sites)
      }
    }
    if (Object.keys(stripeConnectData).length) {
      handleUpdateBusinessPaymethodOpton(paymethodId, requestionOptions)
    }
    handleUpdateBusiness()
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeStripeInput = (e) => {
    setChangesState({
      ...changesState,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeBusinessPaymentState = (values) => {
    setChangesState({ ...changesState, ...values })
  }

  const handleChangeStripeConnectData = (values) => {
    setStripeConnectData({ ...stripeConnectData, ...values })
  }

  /**
   * Method to save the form state
   * @param {Number} paymethodId id to save the change state
   */
  const handleSaveClick = (paymethodId) => {
    let changes = { ...changesState }
    if (changes?.data) {
      changes = { ...changes, data: JSON.stringify(changes.data) }
    }
    if (changes?.data_sandbox) {
      changes = { ...changes, data_sandbox: JSON.stringify(changes.data_sandbox) }
    }
    if (changes?.allowed_order_types) {
      changes = {
        ...changes,
        allowed_order_types: changes.allowed_order_types.length > 0
          ? JSON.stringify(changes.allowed_order_types)
          : null
      }
    }
    if (changes?.sites) {
      changes = {
        ...changes,
        sites: JSON.stringify(changes.sites)
      }
    }
    handleUpdateBusinessPaymethodOpton(paymethodId, changes)
    handleUpdateBusiness()
  }

  useEffect(() => {
    getAllPaymethods()
    getBusinessPaymethods()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessPaymethodsState={businessPaymethodsState}
          paymethodsList={paymethodsList}
          handleClickPayment={handleClickPayment}
          actionState={actionState}
          sitesState={sitesState}
          handleDeleteBusinessPaymethodOption={handleDeleteBusinessPaymethodOption}
          changesState={changesState}
          handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
          stripeConnectData={stripeConnectData}
          handleChangeStripeConnectData={handleChangeStripeConnectData}
          cleanChangesState={cleanChangesState}
          handleChangeSandbox={handleChangeSandbox}
          handleChangeInput={handleChangeInput}
          handleSaveClick={handleSaveClick}
          handleStripeConnect={handleStripeConnect}
          handleChangeStripeInput={handleChangeStripeInput}
          handleStripeSave={handleStripeSave}
          isSuccessDeleted={isSuccessDeleted}
          setIsSuccessDeleted={setIsSuccessDeleted}
          handleSelectAllPaymethods={handleSelectAllPaymethods}
          handleSelectNonePaymethods={handleSelectNonePaymethods}
        />
      )}
    </>
  )
}

BusinessPaymethods.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessPaymethods.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
