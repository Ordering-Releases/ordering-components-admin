import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const UserCashWallet = (props) => {
  const {
    UIComponent,
    userId
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [cashWalletState, setCashWalletState] = useState({ loading: false, wallet: {}, error: null })
  const [cashEventsState, setCashEventsState] = useState({ loading: false, events: [], error: null })
  const [usersState, setUsersState] = useState({ loading: false, users: [], error: null })

  const [addWalletState, setAddWalletState] = useState({})
  const [reduceWalletState, setReduceWalletState] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get user cash wallet info from API
   */
  const getUserCashWallet = async () => {
    try {
      setCashWalletState({
        ...cashWalletState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashWalletState({
          loading: false,
          wallet: content.result.find(wallet => wallet.type === 'cash') || {},
          error: null
        })
      } else {
        setCashWalletState({
          ...cashWalletState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setCashWalletState({
        ...cashWalletState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to get user cash wallet info from API
   */
  const getUserWalletHistory = async (walletId) => {
    try {
      setCashEventsState({
        ...cashEventsState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets/${walletId}/events?orderBy=-id`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashEventsState({
          loading: false,
          events: content.result,
          error: null
        })
      } else {
        setCashEventsState({
          ...cashEventsState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setCashEventsState({
        ...cashEventsState,
        loading: false,
        error: [err.message]
      })
    }
  }

  const getUsers = async () => {
    try {
      setUsersState({
        loading: true,
        ...usersState
      })
      const { content: { result, error } } = await ordering.setAccessToken(token).users().select(['name', 'lastname']).get()
      if (!error) {
        setUsersState({
          loading: false,
          users: result,
          error: null
        })
      } else {
        setUsersState({
          ...usersState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setUsersState({
        ...usersState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to add wallet money from API
   */
  const handleAddWalletMoney = async () => {
    try {
      setActionState({ loading: true, error: null })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addWalletState)
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets/${cashWalletState.wallet?.id}/events`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashWalletState({
          ...cashWalletState,
          wallet: {
            ...cashWalletState.wallet,
            balance: cashWalletState.wallet?.balance + content.result.amount
          }
        })
        setAddWalletState({})
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('WALLET_MONEY_ADDED', 'Wallet money added'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add wallet money from API
   */
  const handleReduceWalletMoney = async () => {
    try {
      setActionState({ loading: true, error: null })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const params = { ...reduceWalletState }
      params.amount = '-' + reduceWalletState.amount
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/users/${userId}/wallets/${cashWalletState.wallet?.id}/events`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCashWalletState({
          ...cashWalletState,
          wallet: {
            ...cashWalletState.wallet,
            balance: cashWalletState.wallet?.balance + content.result.amount
          }
        })
        setActionState({ loading: false, error: null })
        setReduceWalletState({})
        showToast(ToastType.Success, t('WALLET_MONEY_REDUCED', 'Wallet money reduced'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} isAddMoney variable to check if the add mode is or not
   */
  const handleChangeInput = (e, isAddMoney) => {
    if (isAddMoney) {
      setAddWalletState({
        ...addWalletState,
        [e.target.name]: e.target.value
      })
    } else {
      setReduceWalletState({
        ...reduceWalletState,
        [e.target.name]: e.target.value
      })
    }
  }

  /**
   * Method to parse the transaction event
   */
  const parseEvent = (event) => {
    let eventLog = ''
    let author = ''
    const findUser = usersState.users.find(user => user.id === event.author_id)
    if (findUser) {
      author = `${findUser?.name} ${findUser?.lastname}`
    } else {
      author = `${event.author_id}`
    }
    if (event.event_type === 'manual') {
      switch (event.event) {
        case 'movement':
          if (Math.sign(event.amount) === -1) {
            eventLog = t('TRANSACTION_REDUCE_MONEY', '<strong>_user_</strong> reduce money').replace('_user_', `${author}`)
          } else {
            eventLog = t('TRANSACTION_ADD_MONEY', '<strong>_user_</strong> add money').replace('_user_', `${author}`)
          }
          break
        case 'locked':
          eventLog = t('TRANSACTION_LOCKED', '<strong>_user_</strong> locked').replace('_user_', `${author}`)
          break
        case 'unlocked':
          eventLog = t('TRANSACTION_UNLOCKED', '<strong>_user_</strong> unlocked').replace('_user_', `${author}`)
          break
        default:
          eventLog = event.event
          break
      }
    }
    if (event.event_type === 'refund') {
      eventLog = t('REFUND_MONEY', 'Refund money')
    }

    if (event.event_type === 'payment') {
      eventLog = t('PAID_MONEY', 'Paid money')
    }

    return eventLog
  }

  useEffect(() => {
    if (!cashWalletState.wallet?.id) return
    getUserWalletHistory(cashWalletState.wallet.id)
  }, [cashWalletState.wallet?.id, cashWalletState.wallet?.balance])

  useEffect(() => {
    getUserCashWallet()
  }, [userId])

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            cashWalletState={cashWalletState}
            cashEventsState={cashEventsState}
            addWalletState={addWalletState}
            reduceWalletState={reduceWalletState}
            actionState={actionState}
            handleChangeInput={handleChangeInput}
            handleAddWalletMoney={handleAddWalletMoney}
            handleReduceWalletMoney={handleReduceWalletMoney}
            parseEvent={parseEvent}
          />
        )
      }
    </>
  )
}

UserCashWallet.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * This must be contains userId to fetch
  */
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
    * Components types after order details
    * Array of type components, the parent props will pass to these components
    */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
    * Elements before order details
    * Array of HTML/Components elements, these components will not get the parent props
    */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
    * Elements after order details
    * Array of HTML/Components elements, these components will not get the parent props
    */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

UserCashWallet.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
