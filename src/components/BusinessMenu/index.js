import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessMenu = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessBusinessMenu
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessMenusState, setBusinessMenusState] = useState({ menus: [], menusShared: [], loading: false, error: null })
  const [isSelectedSharedMenus, setIsSelectedSharedMenus] = useState(false)
  const [sitesState, setSitesState] = useState({ sites: [], loading: true, error: null })

  /**
  * Method to get the business menus from API
  */
  const getBusinessMenus = async () => {
    try {
      setBusinessMenusState({ ...businessMenusState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          menus: content.result
        })
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to control business menu active state from API
   * @param {Number} menuId menu id to change the business menu state
   * @param {Boolean} enabled menu enabled to change the business menu state
   */
  const handleChangeBusinessMenuActiveState = async (menuId, enabled) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setBusinessMenusState({ ...businessMenusState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ enabled: enabled })
      }

      const endPoint = isSelectedSharedMenus
        ? `${ordering.root}/business/${business.id}/menus_shared/${menuId}`
        : `${ordering.root}/business/${business.id}/menus/${menuId}`

      const response = await fetch(endPoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        let _business = {}
        if (!isSelectedSharedMenus) {
          const menus = businessMenusState.menus.filter(menu => {
            if (menu.id === menuId) {
              Object.assign(menu, content.result)
            }
            return true
          })
          setBusinessMenusState({
            ...businessMenusState,
            loading: false,
            menus: menus
          })
          _business = { ...business, menus: menus }
        } else {
          const menusShared = businessMenusState.menusShared.map(menu => {
            if (menu.id === menuId) {
              return {
                ...menu,
                ...content.result,
                id: menu?.id
              }
            }
            return menu
          })
          setBusinessMenusState({
            ...businessMenusState,
            loading: false,
            menusShared: menusShared
          })
          _business = { ...business, menus_shared: menusShared }
        }
        handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business)
        showToast(ToastType.Success, t('MENU_SAVED', 'Products catalog saved'))
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }


  /**
   * Method to delete the business menu from API
   * @param {Number} menuId menu id to delete the business menu
   */
  const handleDeleteBusinessMenu = async (menuId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setBusinessMenusState({ ...businessMenusState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const endPoint = isSelectedSharedMenus
        ? `${ordering.root}/business/${business.id}/menus_shared/${menuId}`
        : `${ordering.root}/business/${business.id}/menus/${menuId}`

      const response = await fetch(endPoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        let _business = {}
        if (!isSelectedSharedMenus) {
          const menus = businessMenusState.menus.filter(menu => menu.id !== menuId)
          setBusinessMenusState({
            ...businessMenusState,
            loading: false,
            menus: menus
          })
          _business = { ...business, menus: menus }
        } else {
          const menusShared = businessMenusState.menusShared.filter(menu => menu.id !== menuId)
          setBusinessMenusState({
            ...businessMenusState,
            loading: false,
            menusShared: menusShared
          })
          _business = { ...business, menus_shared: menusShared }
        }
        handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business)
        showToast(ToastType.Success, t('MENU_DELETED', 'Products catalog deleted'))
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to get the business menus channels from API
   */
  const getBusinessMenuChannels = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus?params=sites`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        let sites = {}
        result.forEach(menu => {
          sites = {
            ...sites,
            [menu.id]: {
              id: menu.id,
              sites: menu.sites
            }
          }
        })

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
          setBusinessMenusState({
            ...businessMenusState,
            loading: false,
            error: [err.message]
          })
        }
      } else {
        setBusinessMenusState({
          ...businessMenusState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setBusinessMenusState({
        ...businessMenusState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (business?.menus) {
      setBusinessMenusState({
        ...businessMenusState,
        menus: business?.menus,
        menusShared: business?.menus_shared
      })
    } else {
      getBusinessMenus()
    }
  }, [business])

  useEffect(() => {
    getBusinessMenuChannels()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMenusState={businessMenusState}
            isSelectedSharedMenus={isSelectedSharedMenus}
            sitesState={sitesState}
            handleChangeBusinessMenuActiveState={handleChangeBusinessMenuActiveState}
            handleDeleteBusinessMenu={handleDeleteBusinessMenu}
            setIsSelectedSharedMenus={setIsSelectedSharedMenus}
          />
        )
      }
    </>
  )
}

BusinessMenu.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Business, this must be contains an object with all business info
  */
  business: PropTypes.object,
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

BusinessMenu.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
