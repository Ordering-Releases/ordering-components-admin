import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'

/**
 * Create LanguageContext
 * This context will manage the current languages internally and provide an easy interface
 */
export const LanguageContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const LanguageProvider = ({ children, strategy }) => {
  const [state, setState] = useState({
    loading: true,
    dictionary: {},
    languageList: []
  })

  /**
   * Load language from localstorage and set state or load default language
   */
  const setLanguageFromLocalStorage = async () => {
    const language = await strategy.getItem('language', true)
    if (language) {
      setState(prevState => ({ ...prevState, language }))
      apiHelper.setLanguage(language?.code)
    }
  }

  const [ordering, apiHelper] = useApi()

  const refreshTranslations = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.translations().asDictionary().get()
      setState(prevState => ({
        ...prevState,
        loading: false,
        dictionary: error ? {} : result
      }))
    } catch (err) {
      setState(prevState => ({ ...prevState, loading: false }))
    }
  }

  const setLanguage = async (language) => {
    if (!language || language.id === state.language?.id) return
    try {
      const { content: { error, result } } = await ordering.languages(language.id).save({ default: true })
      if (!error) {
        const defaultLanguage = { id: result.id, code: result.code, rtl: result.rtl }
        await strategy.setItem('language', defaultLanguage, true)
        const _languageList = state.languageList.filter(_language => {
          if (_language.id === language.id) {
            Object.assign(_language, language)
          }
          return true
        })
        setState({ ...state, language: defaultLanguage, languageList: _languageList })
        apiHelper.setLanguage(language?.code)
      }
    } catch (err) {
      setState({ ...state, loading: false })
    }

    location.reload()
  }

  const refreshLanguages = async () => {
    try {
      setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.languages().get()
      if (!error) {
        const _defaultLanguage = result.find(language => language.default)
        const defaultLanguage = { id: _defaultLanguage.id, code: _defaultLanguage.code, rtl: _defaultLanguage.rtl }
        await strategy.setItem('language', defaultLanguage, true)
        apiHelper.setLanguage(defaultLanguage?.code)
        setState(prevState => ({
          ...prevState,
          loading: false,
          language: defaultLanguage,
          languageList: result
        }))
      }
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const updateLanguageListState = (updatedLanguage) => {
    const _languageList = state.languageList.filter(language => {
      if (language.id === updatedLanguage.id) {
        Object.assign(language, updatedLanguage)
      }
      return true
    })
    setState({
      ...state,
      languageList: _languageList
    })
  }

  /**
   * Refresh translation when change language from ordering
   */
  useEffect(() => {
    if (!ordering?.project) return
    if (state.language?.code && state.language?.code === ordering.language) {
      refreshTranslations()
    }
  }, [state.language?.code, ordering?.project, ordering.language])

  useEffect(() => {
    setLanguageFromLocalStorage()
    if (!ordering?.project) return
    refreshLanguages()
  }, [ordering?.language, ordering?.project])

  const t = (key, fallback = null) => {
    return (state?.dictionary && Object.keys(state?.dictionary).length > 0 && state.dictionary[key]) || fallback || key
  }

  const functions = {
    setLanguage,
    updateLanguageListState,
    refreshTranslations
  }

  return (
    <LanguageContext.Provider value={[state, t, functions]}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook to get and update language state
 */
export const useLanguage = () => {
  const languageManager = useContext(LanguageContext)
  return languageManager || [{}, (key, fallback = null) => fallback || key, async () => {}, async () => {}]
}
