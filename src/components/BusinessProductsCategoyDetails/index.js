import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

/**
 * Component to manage BusinessProductsCategoyDetails behavior without UI component
 */
export const BusinessProductsCategoyDetails = (props) => {
  const {
    UIComponent,
    businessState,
    handleUpdateBusinessState,
    category,
    categoryId,
    onClose,
    categorySelected,
    setCategorySelected
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [formState, setFormState] = useState({ loading: false, changes: { enabled: true, enabledParent: false }, result: { error: false } })
  const [parentCategories, setParentCategories] = useState([])

  useEffect(() => {
    setFormState({ ...formState, changes: category || {} })
  }, [category])

  /**
  * Update form input data
  * @param {EventTarget} e Related HTML event
  */
  const handleChangeInput = (e) => {
    const currentChanges = { [e.target.name]: e.target.value }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
  * Update credential data
  * @param {Object} isChecked checkbox status
  */
  const handleChangeCheckBox = (isChecked) => {
    let currentChanges = null
    if (isChecked.enabled !== undefined) {
      currentChanges = { enabled: isChecked.enabled }
    }
    if (isChecked.enabledParent) {
      currentChanges = { ...currentChanges, parent_category_id: categorySelected?.id }
    } else {
      currentChanges = { ...currentChanges, parent_category_id: null }
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update form item
   */
  const handleChangeItem = (change) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...change }
    })
  }

  /**
 * Update business photo data
 * @param {File} file Image to change business photo
 */
  const handlechangeImage = (file, isSeo) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          [isSeo ? 'seo_image' : 'image']: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
  * Default fuction for business profile workflow
  */
  const handleUpdateClick = async () => {
    if (category) {
      const id = category?.id || categoryId
      if (loading) return
      try {
        showToast(ToastType.Info, t('LOADING', 'Loading'))
        setFormState({
          ...formState,
          loading: true
        })
        const changes = { ...formState.changes }
        for (const key in changes) {
          if (changes[key] === null) {
            delete changes[key]
          }
        }
        const { content } = await ordering.businesses(businessState?.business?.id).categories(parseInt(id)).save(changes)
        if (!content.error) {
          setFormState({
            ...formState,
            changes: content.result,
            result: {
              error: false,
              result: content.result
            },
            loading: false
          })
          setCategorySelected(content.result)
          if (handleUpdateBusinessState) {
            const _categories = [...businessState.business.categories]
            _categories.forEach(function iterate (category, index, object) {
              if (category?.id === content?.result.parent_category_id) {
                if (Array.isArray(category?.subcategories)) {
                  const found = category.subcategories.find(subCategory => subCategory?.id === content?.result?.id)
                  if (!found) {
                    category.subcategories.push(content?.result)
                  }
                }
              }
              const categoryKeyOptions = ['name', 'enabled', 'image', 'slug', 'seo_image', 'seo_title', 'seo_description']
              if (category?.id === content?.result?.id && category.parent_category_id === content?.result.parent_category_id) {
                Object.keys(category).forEach(key => {
                  if (categoryKeyOptions.includes(key) && content.result[key]) {
                    category[key] = content?.result[key]
                  }
                })
              }
              if (category?.id === content?.result?.id && category.parent_category_id !== content?.result.parent_category_id) {
                object.splice(index, 1)
              }
              Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
            })

            const _business = { ...businessState.business, categories: _categories }
            handleUpdateBusinessState(_business)
          }
          showToast(ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'))
        } else {
          setFormState({
            ...formState,
            changes: formState.changes,
            result: content,
            loading: false
          })
        }
      } catch (err) {
        setFormState({
          ...formState,
          result: {
            error: true,
            result: [err.message]
          },
          loading: false
        })
      }
    } else {
      createBusinessCategory()
    }
  }

  const createBusinessCategory = async () => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const { content } = await ordering.businesses(parseInt(businessState?.business?.id)).categories().save(formState.changes)
      if (!content.error) {
        const newCategory = { ...content.result }
        newCategory.parent_category_id = content.result?.parent_category_id || null
        setFormState({
          ...formState,
          category: {},
          result: {
            error: false,
            result: newCategory
          },
          loading: false
        })
        if (handleUpdateBusinessState) {
          const _categories = businessState.business?.categories || []
          if (content?.result.parent_category_id) {
            _categories.forEach(function iterate (category) {
              if (category?.id === content?.result.parent_category_id) {
                category.subcategories.push({ ...newCategory, products: [], subcategories: [] })
              }
              Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
            })
          } else {
            _categories.push({ ...newCategory, products: [], subcategories: [] })
          }
          handleUpdateBusinessState({ ...businessState.business, categories: _categories })
        }
        showToast(ToastType.Success, t('CATEOGORY_CREATED', 'Category created'))
        onClose && onClose()
      } else {
        setFormState({
          ...formState,
          changes: formState.changes,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
 * Method to edit a category
 */
  const handleDeleteCategory = async () => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(businessState.business?.id)).categories(parseInt(category?.id)).delete()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (handleUpdateBusinessState) {
          const _categories = [...businessState.business.categories]
          _categories.forEach(function iterate (_category, index, object) {
            if (_category?.id === category?.id) {
              object.splice(index, 1)
            }
            Array.isArray(_category?.subcategories) && _category.subcategories.forEach(iterate)
          })

          handleUpdateBusinessState({ ...businessState.business, categories: _categories })
          if (category?.id === categorySelected?.id) setCategorySelected(_categories[0])
        }
        showToast(ToastType.Success, t('CATEOGORY_DELETED', 'Category deleted'))
        props.onClose && props.onClose(category?.id)
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  useEffect(() => {
    if (businessState.loading || !categorySelected) return
    const getParentCategories = (category, id) => {
      let path
      const item = { id: category?.id, name: category.name }
      if (!category || typeof category !== 'object') return
      if (category?.id === id) {
        return []
      }
      (category?.subcategories || []).some(child =>
        (path = getParentCategories(child, id))
      )
      return path && [item, ...path]
    }
    businessState.business.categories.forEach(category => {
      const _parentCategories = getParentCategories(category, categorySelected?.id)
      if (_parentCategories) {
        setParentCategories(_parentCategories)
      }
    })
  }, [businessState?.loading, categorySelected])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isAddMode={!category}
          formState={formState}
          setFormState={setFormState}
          parentCategories={parentCategories}
          handlechangeImage={handlechangeImage}
          handleChangeInput={handleChangeInput}
          handleChangeCheckBox={handleChangeCheckBox}
          handleChangeItem={handleChangeItem}
          handleUpdateClick={handleUpdateClick}
          handleDeleteCategory={handleDeleteCategory}
        />
      )}
    </>
  )
}

BusinessProductsCategoyDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for a business
   */
  businessState: PropTypes.object,
  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: PropTypes.func,
  /**
   * Function to set product creation mode
   */
  setIsAddProduct: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessProductsCategoyDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
