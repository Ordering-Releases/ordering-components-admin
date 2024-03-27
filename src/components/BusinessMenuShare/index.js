import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessMenuShare = (props) => {
  const {
    UIComponent,
    business,
    menu,
    businesses,
    busienssesPropsToFetch,
    setMenuList,
    menuList
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessesState, setBusinessesState] = useState({ businesses: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, result: { error: false } })
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([])

  /**
   * Method to get all the business list from API
   */
  const getAllBusinesses = async () => {
    try {
      setBusinessesState({ ...businessesState, loading: true })
      const functionFetch = ordering.setAccessToken(token).businesses().select(busienssesPropsToFetch).asDashboard()
      const { content: { error, result } } = await functionFetch.get()
      if (!error) {
        const _businesses = result.filter(_business => _business.id !== business.id)
        setBusinessesState({ ...businessesState, businesses: _businesses, loading: false })
      }
    } catch (err) {
      setBusinessesState({ ...businessesState, loading: false, error: err.message })
    }
  }

  /**
   * Method to share the business menu
   * @param {Number} businessId business id
   * @param {Boolean} checked checked state
   */
  const handleSelectBusiness = (businessId, checked) => {
    if (checked) {
      setSelectedBusinessIds([...selectedBusinessIds, businessId])
    } else {
      const _selectedBusinessIds = selectedBusinessIds.filter(id => id !== businessId)
      setSelectedBusinessIds(_selectedBusinessIds)
    }
  }

  /**
   * Method to share the business menu
   * @param {Boolean} isAll state if all or none
   */
  const handleSelectAllBusiness = (isAll) => {
    if (isAll) {
      const businessIds = businessesState.businesses?.reduce((ids, business) => [...ids, business.id], [])
      setSelectedBusinessIds(businessIds)
    } else {
      setSelectedBusinessIds([])
    }
  }

  /**
   * Method to share the business menu
   */
  const handleShareBusinesses = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const changes = {
        business_id: business.id,
        shared: selectedBusinessIds
      }
      const content = await ordering.businesses(business.id).menus(menu.id).save(changes)
      if (!content.error) {
        const menuBusinesses = []
        for (const id of selectedBusinessIds) {
          menuBusinesses.push({
            id: id,
            name: businessesState.businesses.find(_business => _business.id === id)?.name,
            pivot: { business_id: id, menu_id: menu.id }
          })
        }
        const _businessMenu = { ...menu, businesses: menuBusinesses }
        const menus = menuList?.menus?.filter(_menu => {
          if (_menu.id === _businessMenu.id) {
            Object.assign(_menu, _businessMenu)
          }
          return true
        })
        setMenuList({
          ...menuList,
          menus
        })
        setActionState({ loading: false, result: { error: false } })
        showToast(ToastType.Success, t('BUSINESS_SAVED', 'Business saved'))
      }
    } catch (err) {
      setActionState({ loading: false, result: { error: false } })
    }
  }

  useEffect(() => {
    if (businesses) {
      setBusinessesState({ ...businessesState, businesses: businesses, loading: false })
    } else {
      getAllBusinesses()
    }
  }, [businesses])

  useEffect(() => {
    if (menu?.businesses) {
      const businessIds = menu.businesses?.reduce((ids, business) => [...ids, business.id], [])
      setSelectedBusinessIds(businessIds)
    }
  }, [menu])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessesState={businessesState}
          actionState={actionState}
          selectedBusinessIds={selectedBusinessIds}
          handleSelectBusiness={handleSelectBusiness}
          handleSelectAllBusiness={handleSelectAllBusiness}
          handleShareBusinesses={handleShareBusinesses}
        />
      )}
    </>
  )
}

BusinessMenuShare.propTypes = {
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

BusinessMenuShare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  busienssesPropsToFetch: ['id', 'name', 'logo']
}
