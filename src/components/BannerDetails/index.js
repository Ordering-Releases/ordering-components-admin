import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage banner behavior without UI component
 */
export const BannerDetails = (props) => {
  const {
    UIComponent,
    banner,
    sitesState,
    defaultPosition,
    handleSuccessUpdate,
    handleSuccessAdd,
    handleSuccessDelete
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [bannerState, setBannerState] = useState({ banner: banner, loading: false, error: null })
  const [isAddMode, setIsAddMode] = useState(false)

  const [bannerItemsState, setBannerItemsState] = useState({ loading: false, items: [], images: [], videos: [], error: null })
  const [changesState, setChangesState] = useState({ changes: {}, itemId: null, loading: false, error: null })
  const [selectedSitesIds, setSelectedSitesIds] = useState([])
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to change the option state
   */
  const handleChangeItem = (changes, id) => {
    setChangesState(prevState => ({
      ...prevState,
      changes: {
        ...prevState?.changes,
        ...changes
      },
      ...(id && { itemId: id })
    }))
  }

  /**
   * Method to change the sites
   */
  const handleSelectSite = (checked, siteId) => {
    let sites = []
    if (changesState.changes?.sites) {
      sites = [...changesState.changes?.sites]
    } else {
      if (banner?.sites) {
        sites = banner?.sites?.reduce((ids, site) => [...ids, site.id], [])
      }
    }
    if (checked) {
      sites.push(siteId)
    } else {
      sites = sites.filter(id => id !== siteId)
    }
    setSelectedSitesIds(sites)
    setChangesState({
      ...changesState,
      changes: {
        ...changesState.changes,
        sites: sites
      }
    })
  }

  const handleSelectAllSites = (isAll) => {
    const sitesIds = sitesState.sites?.reduce((ids, site) => [...ids, site.id], [])
    let filteredIds = []
    if (isAll) {
      filteredIds = [...sitesIds]
    } else {
      filteredIds = []
    }
    setSelectedSitesIds(filteredIds)
    setChangesState({
      ...changesState,
      changes: {
        ...changesState.changes,
        sites: filteredIds
      }
    })
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
      const response = await fetch(`${ordering.root}/banners/${banner.id}/items`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        showToast(ToastType.Success, t('BANNER_ITEM_ADDED', 'Banner item added'))
        const items = [...bannerItemsState.items, content.result]
        if (content.result?.type === 'image') {
          setBannerItemsState({
            ...bannerItemsState,
            items: items,
            images: [...bannerItemsState.images, content.result]
          })
        }
        if (content.result?.type === 'video') {
          setBannerItemsState({
            ...bannerItemsState,
            items: items,
            videos: [...bannerItemsState.videos, content.result]
          })
        }
        const updatedBanner = { ...banner, items: items }
        handleSuccessUpdate && handleSuccessUpdate(updatedBanner)
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

  /**
   * Method to delete the banner item from API
   * @param {Object} params
   */
  const handleDeleteBannerItem = async (itemId) => {
    try {
      setChangesState(prevState => ({ ...prevState, loading: true }))
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/banners/${banner.id}/items/${itemId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        showToast(ToastType.Success, t('BANNER_ITEM_DELETED', 'Banner item deleted'))
        const items = bannerItemsState.items.filter(item => item.id !== itemId)
        if (content.result?.type === 'image') {
          setBannerItemsState({
            ...bannerItemsState,
            items: items,
            images: bannerItemsState.images.filter(item => item.id !== itemId)
          })
        }
        if (content.result?.type === 'video') {
          setBannerItemsState({
            ...bannerItemsState,
            items: items,
            videos: bannerItemsState.videos.filter(item => item.id !== itemId)
          })
        }
        const updatedBanner = { ...banner, items: items }
        handleSuccessUpdate && handleSuccessUpdate(updatedBanner)
      } else {
        setChangesState({ ...changesState, loading: false, error: content.result })
      }
    } catch (err) {
      setChangesState({ ...changesState, loading: false, error: [err.message] })
    }
  }

  /**
   * Medthod to update the banner item from API
   */
  const handleUpdateBannerItem = async (payload, itemId, isReturn = false) => {
    try {
      setChangesState(prevState => ({ ...prevState, loading: true }))
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      }
      const response = await fetch(`${ordering.root}/banners/${banner.id}/items/${itemId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        const items = bannerItemsState.items.filter(item => {
          if (item.id === content.result.id) {
            Object.assign(item, content.result)
          }
          return true
        })
        if (content.result?.type === 'image') {
          const images = bannerItemsState.images.filter(item => {
            if (item.id === content.result.id) {
              Object.assign(item, content.result)
            }
            return true
          })
          setBannerItemsState({
            ...bannerItemsState,
            items: items,
            images: images
          })
        }
        if (content.result?.type === 'video') {
          const videos = bannerItemsState.videos.filter(item => {
            if (item.id === content.result.id) {
              Object.assign(item, content.result)
            }
            return true
          })
          setBannerItemsState({
            ...bannerItemsState,
            items: items,
            videos: videos
          })
        }
        const updatedBanner = { ...banner, items: items }
        handleSuccessUpdate && handleSuccessUpdate(updatedBanner)
        showToast(ToastType.Success, t('BANNER_ITEM_SAVED', 'Banner item saved'))
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

  /**
   * Method to update the banner from API
   */
  const handleUpdateClick = async (payload) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const changes = payload ? { ...payload } : { ...changesState?.changes }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/banners/${banner.id ?? bannerState.banner?.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setBannerState({
          ...bannerState,
          banner: content.result
        })
        setActionState({ loading: false, error: null })
        if (handleSuccessUpdate) {
          handleSuccessUpdate(content.result)
        }
        setChangesState({
          ...changesState,
          changes: {}
        })
        showToast(ToastType.Success, t('BANNER_SAVED', 'Banner saved'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to update the banner from API
   */
  const handleAddBanner = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const changes = {
        ...changesState?.changes,
        position: defaultPosition
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/banners`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ loading: false, error: null })
        handleSuccessAdd && handleSuccessAdd({ ...content.result, enabled: true })
        props.onClose && props.onClose()
        showToast(ToastType.Success, t('BANNER_ADDED', 'Banner added'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to delete the banner from API
   */
  const handleDeleteBanner = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/banners/${banner.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ loading: false, error: null })
        handleSuccessDelete && handleSuccessDelete(banner.id)
        props.onClose && props.onClose()
        showToast(ToastType.Success, t('BANNER_DELETED', 'Banner deleted'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  useEffect(() => {
    if (Object.keys(banner).length === 0) {
      setIsAddMode(true)
      setChangesState({
        ...changesState,
        changes: {}
      })
      setSelectedSitesIds([])
      setBannerItemsState({
        ...bannerItemsState,
        loading: false,
        items: [],
        images: [],
        videos: []
      })
    } else {
      setIsAddMode(false)
      setChangesState({
        ...changesState,
        changes: {}
      })
      const images = banner?.items.filter(item => item.type === 'image')
      const videos = banner?.items.filter(item => item.type === 'video')
      setBannerItemsState({
        ...bannerItemsState,
        loading: false,
        items: banner.items,
        images: images,
        videos: videos
      })
      const sitesIds = banner?.sites?.reduce((ids, site) => [...ids, site.id], [])
      setSelectedSitesIds(sitesIds || [])
      setBannerState({ ...bannerState, banner: banner })
    }
  }, [banner])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          bannerState={bannerState}
          bannerItemsState={bannerItemsState}
          changesState={changesState}
          actionState={actionState}
          isAddMode={isAddMode}
          handleChangeItem={handleChangeItem}
          handleAddBannerItem={handleAddBannerItem}
          handleUpdateBannerItem={handleUpdateBannerItem}
          selectedSitesIds={selectedSitesIds}
          handleSelectSite={handleSelectSite}
          handleSelectAllSites={handleSelectAllSites}
          handleUpdateClick={handleUpdateClick}
          handleAddBanner={handleAddBanner}
          handleDeleteBanner={handleDeleteBanner}
          handleDeleteBannerItem={handleDeleteBannerItem}
        />
      )}
    </>
  )
}

BannerDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

BannerDetails.defaultProps = {}
