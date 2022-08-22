import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage product extras behavior without UI component
 */
export const ProductExtraOptions = (props) => {
  const {
    UIComponent,
    business,
    extra,
    handleUpdateBusinessState
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [extraState, setExtraState] = useState({ extra: extra, loading: false, error: null })
  const [changesState, setChangesState] = useState({ changes: {}, result: {} })
  const [editOptionId, setEditOptionId] = useState(null)
  const [addChangesState, setAddChangesState] = useState({
    conditioned: false,
    enabled: true,
    name: '',
    min: 1,
    max: 1
  })
  const [curOption, setCurOption] = useState(null)
  const [openModal, setOpenModal] = useState({})
  const [dragoverOptionId, setDragoverOptionId] = useState(null)
  const [isOptionsBottom, setIsOptionsBottom] = useState(false)

  /**
   * Clean changesState
   */
  const cleanChangesState = (values) => setChangesState({ ...values })

  /**
   * Method to open the modal
   */
  const handleOpenModal = (option, name) => {
    cleanChangesState({ ...changesState, changes: {} })
    setCurOption(option)
    setOpenModal({ ...openModal, [name]: true })
  }

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} optionId
   */
  const handleChangeInput = (e, optionId) => {
    if (optionId === editOptionId) {
      setChangesState({
        result: {},
        changes: {
          ...changesState.changes,
          [e.target.name]: e.target.value
        }
      })
    } else {
      setEditOptionId(optionId)
      setChangesState({
        result: {},
        changes: {
          [e.target.name]: e.target.value
        }
      })
    }
  }

  /**
   * Method to change the option state
   */
  const handleChangeItem = (changes, id) => {
    if (id !== undefined) setEditOptionId(id)
    setChangesState({
      result: {},
      changes: {
        ...changesState.changes,
        ...changes
      }
    })
  }
  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   */
  const handleChangeOptionEnable = (enabled, optionId) => {
    if (optionId === editOptionId) {
      setChangesState({
        result: {},
        changes: {
          ...changesState.changes,
          enabled: enabled
        }
      })
    } else {
      setEditOptionId(optionId)
      setChangesState({
        result: {},
        changes: {
          enabled: enabled
        }
      })
    }
  }

  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeAddOption = (e) => {
    setAddChangesState({
      ...addChangesState,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  const handleChangeImage = (file, optionId) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    if (optionId === editOptionId) {
      reader.onload = () => {
        setChangesState({
          result: {},
          changes: {
            ...changesState.changes,
            image: reader.result
          }
        })
      }
    } else {
      setEditOptionId(optionId)
      reader.onload = () => {
        setChangesState({
          result: {},
          changes: {
            image: reader.result
          }
        })
      }
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Method to change the add option enabled state
   * @param {Boolean} enabled
   */
  const handleChangeAddOptionEnable = (enabled) => {
    setAddChangesState({ ...addChangesState, enabled: enabled })
  }

  const handleSuccessUpdateBusiness = (updatedExtra) => {
    if (handleUpdateBusinessState) {
      const updatedExtras = business.extras.filter(extra => {
        if (extra.id === updatedExtra.id) {
          Object.assign(extra, updatedExtra)
        }
        return true
      })
      const businessState = { ...business, extras: updatedExtras }
      const categories = businessState.categories.map(item => {
        const _products = item.products.map(prod => {
          const _extras = prod.extras.filter(extra => {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra)
            }
            return true
          })
          return { ...prod, extras: _extras }
        })
        const _item = { ...item, products: _products }
        return _item
      })
      const updatedBusiness = { ...businessState, categories: categories }
      handleUpdateBusinessState(updatedBusiness)
    }
  }

  /**
   * Method to update the option from API
   */
  const handleUpdateOption = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changesState?.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options/${editOptionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({
          changes: content.error ? changesState.changes : {},
          result: content.result
        })
        const options = extraState.extra.options.filter(option => {
          if (option.id === content.result.id) {
            Object.assign(option, content.result)
          }
          return true
        })
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
        showToast(ToastType.Success, t('OPTION_SAVED', 'Option saved'))
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  /**
   * Method to save the new product extra option from API
   */
  const handleAddOption = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addChangesState)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setAddChangesState({
          conditioned: false,
          enabled: true,
          name: '',
          min: 1,
          max: 1
        })
        let options
        if (extraState.extra.options) options = [...extraState.extra.options, { ...content.result, suboptions: [] }]
        else options = [{ ...content.result, suboptions: [] }]
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
        showToast(ToastType.Success, t('OPTION_ADDED', 'Option added'))
        handleOpenModal({ ...content.result, suboptions: [] }, 'edit')
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }
  /**
   * Method to delete the extra
   * @param {Number} optionId
   */
  const handleDeteteOption = async (optionId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options/${optionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const options = extraState.extra.options.filter(option => option.id !== optionId)
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
        showToast(ToastType.Success, t('OPTION_DELETED', 'Option deleted'))
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  /**
   * Method to delete the extra
   */
  const handleDeleteExtra = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const extras = business.extras.filter(_extra => _extra.id !== extra.id)
        if (handleUpdateBusinessState) {
          const businessState = { ...business, extras: extras }
          const categories = businessState.categories.map(item => {
            const _products = item.products.map(prod => {
              const _extras = prod.extras.filter(_extra => _extra.id !== extra.id)
              return { ...prod, extras: _extras }
            })
            const _item = { ...item, products: _products }
            return _item
          })
          const updatedBusiness = { ...businessState, categories: categories }
          handleUpdateBusinessState(updatedBusiness)
        }
        showToast(ToastType.Success, t('EXTRA_DELETED', 'Extra deleted'))
        props.onClose && props.onClose()
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  const handleSucccessDeleteOption = (optionId) => {
    const options = extraState.extra.options.filter(option => option.id !== optionId)
    const updatedExtra = { ...extraState.extra, options: options }
    setExtraState({ ...extraState, loading: false, extra: updatedExtra })
    handleSuccessUpdateBusiness(updatedExtra)
  }

  /**
   * Method to handle option drag start
   */
  const handleDragStart = (event, option) => {
    event.dataTransfer.setData('transferOptionId', option.id)
    const ghostElement = document.createElement('div')
    ghostElement.classList.add('ghostDragging')
    ghostElement.innerHTML = option.name
    document.body.appendChild(ghostElement)
    event.dataTransfer.setDragImage(ghostElement, 0, 0)
    setIsOptionsBottom(false)
  }

  /**
   * Method to handle option drag over
   */
  const hanldeDragOver = (event, option, isLastOption) => {
    event.preventDefault()
    const element = event.target.closest('.draggable-option')
    if (element) {
      if (!isLastOption) {
        setDragoverOptionId(option.id)
      } else {
        const middlePositionY = window.scrollY + event.target.getBoundingClientRect().top + event.target.offsetHeight / 2
        const dragPositionY = event.clientY
        if (dragPositionY > middlePositionY) {
          setIsOptionsBottom(true)
          setDragoverOptionId(null)
        } else {
          setIsOptionsBottom(false)
          setDragoverOptionId(option.id)
        }
      }
    }
  }

  /**
   * Method to handle option drop
   */
  const handleDrop = (event, option) => {
    event.preventDefault()
    const transferOptionId = parseInt(event.dataTransfer.getData('transferOptionId'))
    if (option.id === transferOptionId) return
    let dropOptionRank
    if (isOptionsBottom) {
      dropOptionRank = option?.rank + 1
    } else {
      dropOptionRank = option?.rank
    }
    setIsOptionsBottom(false)
    handleChangeOptionRank(transferOptionId, { rank: dropOptionRank })
  }

  /**
   * Method to handle option drag end
   */
  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
    setDragoverOptionId(null)
  }

  /**
   * Method to change the rank of option
   */
  const handleChangeOptionRank = async (transferOptionId, params) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setExtraState({ ...extraState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/extras/${extra.id}/options/${transferOptionId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({
          changes: content.error ? changesState.changes : {},
          result: content.result
        })
        const options = extraState.extra.options.filter(option => {
          if (option.id === content.result.id) {
            Object.assign(option, content.result)
          }
          return true
        })
        const updatedExtra = { ...extraState.extra, options: options }
        setExtraState({ ...extraState, loading: false, extra: updatedExtra })
        handleSuccessUpdateBusiness(updatedExtra)
        showToast(ToastType.Success, t('OPTION_SAVED', 'Option saved'))
      }
    } catch (err) {
      setExtraState({ ...extraState, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    setChangesState({ changes: {}, result: {} })
    setExtraState({ ...extraState, extra: extra })
  }, [extra])

  useEffect(() => {
    setAddChangesState({
      conditioned: false,
      enabled: true,
      name: '',
      min: 1,
      max: 1
    })
  }, [extra?.id])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          changesState={changesState}
          cleanChangesState={cleanChangesState}
          handleChangeItem={handleChangeItem}
          extraState={extraState}
          editOptionId={editOptionId}
          addChangesState={addChangesState}
          handleChangeImage={handleChangeImage}
          handleChangeInput={handleChangeInput}
          handleChangeOptionEnable={handleChangeOptionEnable}
          handleAddOption={handleAddOption}
          handleChangeAddOption={handleChangeAddOption}
          handleChangeAddOptionEnable={handleChangeAddOptionEnable}
          handleDeteteOption={handleDeteteOption}
          handleDeleteExtra={handleDeleteExtra}
          handleSucccessDeleteOption={handleSucccessDeleteOption}
          handleUpdateOption={handleUpdateOption}
          curOption={curOption}
          openModal={openModal}
          setCurOption={setCurOption}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          dragoverOptionId={dragoverOptionId}
          isOptionsBottom={isOptionsBottom}
          handleDragStart={handleDragStart}
          hanldeDragOver={hanldeDragOver}
          handleDrop={handleDrop}
          handleDragEnd={handleDragEnd}
        />
      )}
    </>
  )
}

ProductExtraOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product extra options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product extra options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductExtraOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
