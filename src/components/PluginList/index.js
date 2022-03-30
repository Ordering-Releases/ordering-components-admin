import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const PluginList = (props) => {
  const {
    UIComponent
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [pluginListState, setPluginListState] = useState({ plugins: [], loading: false, error: null })
  const [isAddMode, setIsAddMode] = useState(false)
  const [newUrl, setNewUrl] = useState(null)
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the plugins from API
   */
  const getPlugins = async () => {
    try {
      setPluginListState({ ...pluginListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/plugins`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPluginListState({ ...pluginListState, plugins: content.result, loading: false })
      }
    } catch (err) {
      setPluginListState({ ...pluginListState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add new plugin from API
   */
  const handleAddNewPlugin = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ url: newUrl })
      }
      const response = await fetch(`${ordering.root}/plugins`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const plugins = [...pluginListState.plugins, content.result]
        setPluginListState({ ...pluginListState, plugins: plugins })
        showToast(ToastType.Success, t('PLUGIN_SAVED', 'Plugin saved'))
        setIsAddMode(false)
        setNewUrl(null)
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the plugin from API
   * @param {Number} pluginId plugin id to delete
   */
  const handleDeletePlugin = async (pluginId) => {
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
      const response = await fetch(`${ordering.root}/plugins/${pluginId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const plugins = pluginListState.plugins.filter(plugin => plugin.id !== pluginId)
        setPluginListState({ ...pluginListState, plugins: plugins })
        showToast(ToastType.Success, t('PLUGIN_REMOVED', 'Plugin removed'))
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the plugin from API
   * @param {Number} pluginId plugin id to update
   * @param {Object} body body to update
   */
  const handleUpdatePlugin = async (pluginId, body) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
      const response = await fetch(`${ordering.root}/plugins/${pluginId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const plugins = pluginListState.plugins.filter(plugin => {
          if (plugin.id === pluginId) {
            Object.assign(plugin, content.result)
          }
          return true
        })
        setPluginListState({ ...pluginListState, plugins: plugins })
        showToast(ToastType.Success, t('PLUGIN_SAVED', 'Plugin saved'))
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getPlugins()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          pluginListState={pluginListState}
          isAddMode={isAddMode}
          setIsAddMode={setIsAddMode}
          setNewUrl={setNewUrl}
          actionState={actionState}
          handleAddNewPlugin={handleAddNewPlugin}
          handleDeletePlugin={handleDeletePlugin}
          handleUpdatePlugin={handleUpdatePlugin}
        />
      )}
    </>
  )
}

PluginList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before plugin list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after plugin list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before plugin list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after plugin list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PluginList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
