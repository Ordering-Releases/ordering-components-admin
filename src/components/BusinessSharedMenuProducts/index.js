import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const BusinessSharedMenuProducts = (props) => {
  const {
    menu,
    UIComponent,
    business,
    setMenuList,
    menuList
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [menuState, setMenuState] = useState({ loading: false, error: null, menu: menu || {} })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to update the business shared menu product
   * @param {Number} productId product id to update
   * @param {Object} changes changes to update
   */
  const handleUpdateBusinessSharedMenuProduct = async (productId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/menus_shared/${menu.id}/products/${productId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const menusShared = menuList?.menusShared?.filter(sharedMenu => {
          const products = sharedMenu.products.map(product => {
            if (product.id === productId) {
              return {
                ...product,
                ...changes
              }
            }
            return product
          })
          sharedMenu.products = [...products]
          return true
        })
        showToast(ToastType.Success, t('PRODUCT_SAVED', 'Product saved'))
        setActionState({
          loading: false,
          error: null
        })
        setMenuList({
          ...menuList,
          menusShared
        })
      } else {
        setActionState({
          loading: false,
          error: content.resulut
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    setMenuState({ ...menuState, menu: menu || {} })
  }, [menu])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            menuState={menuState}
            actionState={actionState}
            handleUpdateBusinessSharedMenuProduct={handleUpdateBusinessSharedMenuProduct}
          />
        )
      }
    </>
  )
}

BusinessSharedMenuProducts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business shared menu products
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after business shared menu products
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before business shared menu products
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after business shared menu products
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessSharedMenuProducts.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
