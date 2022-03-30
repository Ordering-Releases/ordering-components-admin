import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const CustomerPointsWallet = (props) => {
  const {
    UIComponent,
    userId
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [WalletState, setWalletState] = useState({ loading: false, wallets: [], error: null })

  /**
   * Method to get user cash wallet info from API
   */
  const getUserWallet = async () => {
    try {
      setWalletState({
        ...WalletState,
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
        setWalletState({
          loading: false,
          wallets: content.result,
          error: null
        })
      } else {
        setWalletState({
          ...WalletState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setWalletState({
        ...WalletState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    getUserWallet()
  }, [userId])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            WalletState={WalletState}
          />
        )
      }
    </>
  )
}

CustomerPointsWallet.propTypes = {
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

CustomerPointsWallet.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
