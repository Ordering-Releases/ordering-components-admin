import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

/**
 * Component to manage Banner Image link behavior without UI component
 */
export const BannerImageDetails = (props) => {
  const {
    UIComponent,
    propsToFetch,
    bannerId,
    isSearchByName,
    handleUpdateBannerItem,
    handleSuccessBannerItemAdd
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [searchValue, setSearchValue] = useState(null)
  const [imageState, setImageState] = useState({ image: props.image, loading: false, error: null })
  const [changesState, setChangesState] = useState({ changes: {}, loading: false, error: null })
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], result: { error: null } })
  const [selectedLinkType, setSelectedLinkType] = useState(props.image?.action?.type || null)
  const [selectedBusinessId, setSelectedBusinessId] = useState(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null)

  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

  /**
   * Method to change the option state
   */
  const handleChangeItem = (changes) => {
    setChangesState(prevState => ({
      ...prevState,
      changes: {
        ...prevState?.changes,
        ...changes
      }
    }))
  }

  /**
   * Method to get business list from API
   */
  const getBusinessList = async () => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })

      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        const isSpecialCharacter = rex.test(searchValue)
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const fetchEndpoint = where
        ? ordering.businesses().asDashboard().select(propsToFetch).where(where)
        : ordering.businesses().asDashboard().select(propsToFetch)
      const { content: { error, result, pagination } } = await fetchEndpoint.get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result,
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

  /**
   * Method to add new banner item from API
   * @param {Object} params
   */
  const handleAddBannerItem = async (params, isReturn = false) => {
    try {
      setChangesState(prevState => ({ ...prevState, loading: true }))
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/banners/${bannerId}/items`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        showToast(ToastType.Success, t('BANNER_ITEM_ADDED', 'Banner item added'))
        handleSuccessBannerItemAdd && handleSuccessBannerItemAdd(content.result)
        props.onClose && props.onClose()
      } else {
        setChangesState({ ...changesState, loading: false, error: content.result })
      }
      if (isReturn) return content
    } catch (err) {
      setChangesState({ ...changesState, loading: false, error: [err.message] })
      if (isReturn) {
        return { error: true, result: err }
      }
    }
  }

  const handleSaveImage = async () => {
    try {
      setImageState({
        ...imageState,
        loading: true,
        error: null
      })
      let action = null
      if (selectedLinkType === 'business') {
        action = {
          type: 'business',
          business_id: selectedBusinessId
        }
      }
      if (selectedLinkType === 'product') {
        action = {
          type: 'product',
          business_id: selectedBusinessId,
          category_id: selectedCategoryId,
          product_id: selectedProductId
        }
      }
      let payload = {}
      payload.action = JSON.stringify(action)
      if (changesState.changes) {
        payload = { ...payload, ...changesState.changes }
      }

      if (!selectedLinkType) {
        setImageState({
          ...imageState,
          loading: false,
          error: [t('VALIDATION_ERROR_REQUIRED', 'The link type is required').replace('_attribute_', t('LINK_TYPE', 'Link type'))]
        })
        return
      }

      if (selectedLinkType === 'business' && !selectedBusinessId) {
        setImageState({
          ...imageState,
          loading: false,
          error: [t('VALIDATION_ERROR_REQUIRED', 'The business is required').replace('_attribute_', t('BUSINESS', 'Business'))]
        })
        return
      }
      if (selectedLinkType === 'product' && !selectedProductId) {
        setImageState({
          ...imageState,
          loading: false,
          error: [t('VALIDATION_ERROR_REQUIRED', 'The business is required').replace('_attribute_', t('PRODUCT', 'Product'))]
        })
        return
      }

      let content
      if (props.image) {
        content = await handleUpdateBannerItem(payload, imageState.image?.id, true)
      } else {
        if (!changesState.changes?.image) {
          setImageState({
            ...imageState,
            loading: false,
            error: [t('VALIDATION_ERROR_REQUIRED', 'The image is required').replace('_attribute_', t('IMAGE', ''))]
          })
          return
        }
        content = await handleAddBannerItem(payload, true)
      }
      if (content.error) {
        setImageState({
          ...imageState,
          loading: false,
          error: content.result
        })
      } else {
        setImageState({
          loading: false,
          image: content.result,
          error: null
        })
      }
    } catch (error) {
      setImageState({
        ...imageState,
        loading: true,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    getBusinessList()
  }, [searchValue])

  useEffect(() => {
    if (props.image?.action) {
      const action = { ...props.image?.action }
      setSelectedBusinessId(action?.business_id || null)
      setSelectedCategoryId(action?.category_id || null)
      setSelectedProductId(action?.product_id || null)
    } else {
      setSelectedBusinessId(null)
      setSelectedCategoryId(null)
      setSelectedProductId(null)
    }
  }, [props.image, selectedLinkType])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          imageState={imageState}
          changesState={changesState}
          handleChangeItem={handleChangeItem}
          searchValue={searchValue}
          onSearch={setSearchValue}
          businessList={businessList}
          selectedLinkType={selectedLinkType}
          setSelectedLinkType={setSelectedLinkType}
          selectedBusinessId={selectedBusinessId}
          setSelectedBusinessId={setSelectedBusinessId}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
          handleSaveImage={handleSaveImage}
        />
      )}
    </>
  )
}

BannerImageDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

BannerImageDetails.defaultProps = {
  propsToFetch: ['id', 'name', 'logo', 'slug']
}
