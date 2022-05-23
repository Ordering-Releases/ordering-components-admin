import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const PointsWalletBusinessDetail = (props) => {
  const {
    UIComponent,
    walletData,
    handleUpdateWalletBusiness,
    handleUpdateBusinessList,
    handleUpdatePointsWallet,
    isBusiness,
    selectedBusinessList
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })

  /**
   * Update loyalty business data
   * @param {EventTarget} evt Related HTML event
   */
  const handleChangeInput = (evt) => {
    const value = evt.target.value
    setFormState({ ...formState, changes: { ...formState.changes, [evt.target.name]: value } })
  }

  const handleClickSubmit = () => {
    if (Object.keys(formState?.changes).length === 0) return

    if (walletData) updateLoyalty(walletData?.id, formState?.changes)
    else {
      const filteredBusiness = selectedBusinessList.filter(business => business.wallet_enabled).map(business => {
        return {
          id: business.id,
          redeems: business?.redeems || false,
          accumulates: business?.accumulates || false
        }
      })
      const loyaltyPlan = {
        name: 'Loyalty Point Plan',
        type: 'credit_point',
        redemption_rate: null,
        accumulation_rate: null,
        businesses: JSON.stringify(filteredBusiness),
        ...formState?.changes
      }
      addLoyaltyPlan(loyaltyPlan)
    }
  }

  /**
   * @param { Number } businessId id of loyalty business
   * @param {Object} changes data of business
   */
  const updateLoyalty = async (businessId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const fetchEndpoint = isBusiness
        ? `${ordering.root}/loyalty_plans/${walletData?.loyalty_plan_id}/businesses/${businessId}`
        : `${ordering.root}/loyalty_plans/${walletData?.id}`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('POINTS_WALLET_UPDATED', 'Points wallet updated'))
        setFormState({ ...formState, loading: false, error: null, changes: {} })
        handleUpdateWalletBusiness && handleUpdateWalletBusiness(result)
        handleUpdateBusinessList && handleUpdateBusinessList(changes)
        if (!isBusiness && handleUpdatePointsWallet) handleUpdatePointsWallet(result)
      } else {
        setFormState({ ...formState, loading: false, error: result })
      }
    } catch (error) {
      setFormState({ ...formState, loading: false, error: error.message })
    }
  }

  /**
   * @param { Number } businessId id of loyalty business
   * @param {Object} changes data of business
   */
  const addLoyaltyPlan = async (changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const fetchEndpoint = `${ordering.root}/loyalty_plans`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('POINTS_WALLET_CREATED', 'Points wallet created'))
        setFormState({ ...formState, loading: false, error: null, changes: {} })
        if (!isBusiness && handleUpdatePointsWallet) handleUpdatePointsWallet(result)
      } else {
        setFormState({ ...formState, loading: false, error: result })
      }
    } catch (error) {
      setFormState({ ...formState, loading: false, error: error.message })
    }
  }

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [walletData])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          setFormState={setFormState}
          handleClickSubmit={handleClickSubmit}
          handleChangeInput={handleChangeInput}
        />
      )}
    </>
  )
}

PointsWalletBusinessDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * walletData, this must be contains an object
   */
  walletData: PropTypes.object,
  /**
   * Function to update wallet business
   */
  handleUpdateWalletBusiness: PropTypes.func,
  /**
   * Function to update business list
   */
  handleUpdateBusinessList: PropTypes.func,
  /**
   * Function to update points wallet
   */
  handleUpdatePointsWallet: PropTypes.func,
  /**
   * isBusiness, flag to check business
   */
  isBusiness: PropTypes.bool,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PointsWalletBusinessDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
