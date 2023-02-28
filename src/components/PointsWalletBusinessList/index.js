import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const PointsWalletBusinessList = (props) => {
  const {
    UIComponent,
    pointWallet,
    propsToFetch,
    handleUpdateWalletBusiness,
    handleAddWalletBusiness,
    handleDeleteWalletBusiness,
    setSelectedBusinessList
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [businessList, setBusinessList] = useState({ loading: true, error: null, businesses: [], pagination: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Update business data
   * @param {Number} businessId id of business
   * @param {String} name name of business
   * @param {Boolean} name status of checkbox
   */
  const handleCheckBox = (businessId, name, checked) => {
    const changes = { [name]: checked }
    if (!pointWallet) {
      handleUpdateBusinessList(businessId, changes)
    } else {
      updateLoyalty(businessId, changes)
    }
  }

  /**
   * Update business data
   * @param {Number} businessId id of business
   * @param {String} name name of business
   * @param {Boolean} name status of checkbox
   */
  const handleChangeSwitch = (businessId, checked) => {
    if (!pointWallet) {
      const updatedBusinesses = businessList?.businesses.map(business => {
        if (businessId === business.id) {
          return {
            ...business,
            wallet_enabled: checked
          }
        }
        return business
      })
      setBusinessList({
        ...businessList,
        businesses: updatedBusinesses
      })
      return
    }
    if (checked) {
      const selectedBusiness = businessList?.businesses?.find(business => business.id === businessId)
      if (selectedBusiness) {
        const data = {
          business_id: businessId,
          redeems: selectedBusiness?.redeems,
          accumulates: selectedBusiness?.accumulates,
          loyalty_plan_id: pointWallet?.id
        }
        addLoyaltyBusiness(data)
      }
    } else {
      deleteLoyaltyBusiness(businessId)
    }
  }

  /**
   * Method to update the business list
   */
  const handleUpdateBusinessList = (id, changes) => {
    const businesses = businessList.businesses.map(business => {
      if (business.id === id) {
        return {
          ...business,
          ...changes
        }
      }
      return business
    })
    setBusinessList({
      ...businessList,
      businesses: businesses
    })
  }

  /**
   * Method to update business status
   */
  const handleUpdateBusinessState = (result, enabled) => {
    const businesses = businessList.businesses.map(business => {
      if (business.id === result.business_id) {
        return {
          ...business,
          wallet_enabled: enabled,
          ...(!enabled && { redeems: false }),
          ...(!enabled && { accumulates: false }),
          ...(!enabled && { redemption_rate: null }),
          ...(!enabled && { accumulation_rate: null }),
          ...(!enabled && { expire_after_minutes: null }),
          ...(!enabled && { maximum_accumulation: null }),
          ...(!enabled && { maximum_redemption_rate: null }),
          ...(!enabled && { maximum_redemption_type: null })
        }
      }
      return business
    })
    setBusinessList({
      ...businessList,
      businesses: businesses
    })
  }

  /**
   * Method to update the loyalty data
   */
  const updateLoyalty = async (businessId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/loyalty_plans/${pointWallet?.id}/businesses/${businessId}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('WALLET_BUSINESS_UPDATED', 'Wallet business updated'))
        setActionState({ loading: false, error: null })
        handleUpdateWalletBusiness && handleUpdateWalletBusiness(result)
        handleUpdateBusinessList(businessId, changes)
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (error) {
      setActionState({ loading: false, error: error.message })
    }
  }

  /**
   * Method to add the loyalty business data
   */
  const addLoyaltyBusiness = async (data) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(`${ordering.root}/loyalty_plans/${pointWallet?.id}/businesses`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('WALLET_BUSINESS_ENABLED', 'Wallet business enabled'))
        setActionState({ loading: false, error: null })
        handleAddWalletBusiness && handleAddWalletBusiness(result)
        handleUpdateBusinessState(result, true)
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (error) {
      setActionState({ loading: false, error: error.message })
    }
  }

  /**
   * Method to delete the loyalty business data
   */
  const deleteLoyaltyBusiness = async (businessId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/loyalty_plans/${pointWallet?.id}/businesses/${businessId}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('WALLET_BUSINESS_DISABLED', 'Wallet business disabled'))
        setActionState({ loading: false, error: null })
        handleDeleteWalletBusiness && handleDeleteWalletBusiness(result)
        handleUpdateBusinessState(result, false)
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (error) {
      setActionState({ loading: false, error: error.message })
    }
  }

  /**
   * Method to get business types from API
   */
  const getBusinessTypes = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })
      const fetchEndpoint = ordering.businesses().asDashboard().select(propsToFetch)
      const { content: { error, result, pagination } } = await fetchEndpoint.get()
      if (!error) {
        let _businessList = []
        _businessList = result.map(business => {
          const walletBusiness = pointWallet?.businesses.find(item => item.business_id === business.id)
          if (walletBusiness) {
            return {
              ...walletBusiness,
              ...business,
              wallet_enabled: true
            }
          }
          return {
            ...business,
            redeems: false,
            accumulates: false,
            wallet_enabled: false,
            loyalty_plan_id: pointWallet?.id,
            redemption_rate: null,
            accumulation_rate: null,
            expire_after_minutes: null,
            maximum_accumulation: null,
            maximum_redemption_rate: null,
            maximum_redemption_type: null
          }
        })
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: _businessList,
          pagination
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

  useEffect(() => {
    const controller = new AbortController()
    getBusinessTypes()
    return controller.abort()
  }, [pointWallet?.id])

  useEffect(() => {
    setSelectedBusinessList([...businessList?.businesses])
  }, [businessList?.businesses])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessList={businessList}
          handleCheckBox={handleCheckBox}
          handleUpdateBusinessList={handleUpdateBusinessList}
          handleChangeSwitch={handleChangeSwitch}
        />
      )}
    </>
  )
}

PointsWalletBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * pointWallet, this must be contains an object
   */
  pointWallet: PropTypes.object,
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

PointsWalletBusinessList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
