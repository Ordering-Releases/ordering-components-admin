import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to create importer form without UI component
 */

export const ImporterForm = (props) => {
  const {
    UIComponent,
    handleSuccessAdd,
    handleSuccessUpdateImporter,
    selectedImporter
  } = props
  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [mappingState, setMappingState] = useState({})
  const [fieldList, setFieldList] = useState({})
  const [metafieldList, setMetaFieldList] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [editState, setEditState] = useState({})

  /**
 * Update form state data
 * @param {EventTarget} e Related HTML event
 */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  const handleChangeMappingInput = (e, isMany) => {
    let mappingData = {}
    if (isMany) {
      Object.values(e).map(obj => {
        mappingData = {
          ...mappingData,
          [obj.name]: obj.value
        }
      })
    } else {
      mappingData = {
        [e.target.name]: e.target.value
      }
    }
    setMappingState({
      ...mappingState, ...mappingData
    })
  }

  const addNewField = (key, value) => {
    const field = { [key]: parseInt(value) }
    setFieldList({
      ...fieldList, ...field
    })
    clearFieldForm()
  }

  const removeField = (fieldKey) => {
    const _fieldList = { ...fieldList }
    delete _fieldList[fieldKey]
    setFieldList(_fieldList)
  }

  const addNewMetaField = (key, value) => {
    const field = { [key]: parseInt(value) }
    setMetaFieldList({
      ...metafieldList, ...field
    })
    clearFieldForm()
  }

  const removeMetaField = (metaFieldKey) => {
    const _metafieldList = { ...metafieldList }
    delete _metafieldList[metaFieldKey]
    setMetaFieldList(_metafieldList)
  }

  const handleChangeSelect = (type, value) => {
    let currentChanges = {}
    currentChanges = { [type]: value }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })

    if (!isEdit) {
      setMappingState({})
      clearMappingForm()
    }
  }

  const clearMappingForm = () => {
    document.getElementById('importer-form').reset()
  }

  const clearFieldForm = () => {
    document.getElementById('field-form').reset()
  }

  const clearImorterForm = () => {
    clearMappingForm()
    clearFieldForm()
    setMappingState({})
    setFieldList({})
    setEditState({})
    setFormState({
      ...formState,
      changes: {}
    })
  }

  const handleEditState = (seletedImpoter) => {
    let _metafieldList = {}
    _metafieldList = seletedImpoter?.mapping?.metafields
    if (typeof _metafieldList === 'object' && _metafieldList !== null) {
      setMetaFieldList(_metafieldList)
    }

    let _fieldList = {}
    _fieldList = seletedImpoter?.mapping?.fields
    if (typeof _fieldList === 'object' && _fieldList !== null) {
      setFieldList(_fieldList)
    }

    let _mappingState = {}
    _mappingState = seletedImpoter?.mapping
    setMappingState(_mappingState)
    setEditState({
      ...editState,
      name: seletedImpoter?.name,
      slug: seletedImpoter?.slug,
      type: seletedImpoter?.type,
      mapping: _mappingState,
      fields: _fieldList,
      metafields: _metafieldList
    })
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        name: seletedImpoter?.name,
        // slug: seletedImpoter?.slug,
        type: seletedImpoter?.type
      }
    })
  }

  const handleCreateImporter = async () => {
    showToast(ToastType.Info, t('LOADING', 'Loading'))
    const data = { ...formState.changes }
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(`${ordering.root}/importers`, requestOptions)
      const { error, result } = await response.json()

      if (error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      } else {
        showToast(ToastType.Success, t('IMPORTER_SAVED', 'Importer saved'))
        clearImorterForm()
        setFormState({
          loading: false,
          changes: {},
          result: {
            error: false,
            result: result
          }
        })
        if (handleSuccessAdd) {
          handleSuccessAdd(result)
        }
        if (props.onClose) {
          props.onClose()
        }
      }
    } catch (error) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: [error.message]
        },
        loading: false
      })
    }
  }

  /**
   * Function to update importer
   */
  const editImporter = async () => {
    showToast(ToastType.Info, t('LOADING', 'Loading'))
    const data = { ...formState.changes }
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(`${ordering.root}/importers/${selectedImporter?.id}`, requestOptions)
      const { error, result } = await response.json()

      if (error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
      } else {
        showToast(ToastType.Success, t('IMPORTER_SAVED', 'Importer saved'))
        clearImorterForm()
        setFormState({
          loading: false,
          changes: {},
          result: {
            error: false,
            result: result
          }
        })

        handleSuccessUpdateImporter && handleSuccessUpdateImporter(result)
        props.onClos && props.onClos()
      }
    } catch (error) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: [error.message]
        },
        loading: false
      })
    }
  }

  useEffect(() => {
    if (Object.keys(metafieldList).length !== 0) {
      setMappingState({
        ...mappingState,
        metafields: metafieldList
      })
    }
  }, [metafieldList])

  useEffect(() => {
    if (Object.keys(fieldList).length !== 0) {
      setMappingState({
        ...mappingState,
        fields: fieldList
      })
    }
  }, [fieldList])

  useEffect(() => {
    if (Object.keys(mappingState).length !== 0) {
      const data = { ...mappingState }
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          mapping: JSON.stringify(data)
        }
      })
    }
  }, [mappingState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          mappingState={mappingState}
          fieldList={fieldList}
          metafieldList={metafieldList}
          editState={editState}
          isEdit={isEdit}
          handleChangeInput={handleChangeInput}
          handleChangeSelect={handleChangeSelect}
          handleChangeMappingInput={handleChangeMappingInput}
          addNewField={addNewField}
          removeField={removeField}
          addNewMetaField={addNewMetaField}
          removeMetaField={removeMetaField}
          clearImorterForm={clearImorterForm}
          setIsEdit={setIsEdit}
          handleCreateImporter={handleCreateImporter}
          handleEditState={handleEditState}
          editImporter={editImporter}
        />
      )}
    </>
  )
}

ImporterForm.propTypes = {
  /**
   * Function to update importer list
   */
  handleSuccessUpdateImporter: PropTypes.func,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ImporterForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
