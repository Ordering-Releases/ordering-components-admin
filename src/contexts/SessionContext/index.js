import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'
/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const SessionContext = createContext()

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const SessionProvider = ({ children, strategy }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({
    auth: null,
    token: null,
    user: null,
    loading: true
  })

  const setValuesFromLocalStorage = async () => {
    const { auth, token, user } = await getValuesFromLocalStorage()

    if (token) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/order_options`, requestOptions)
      if (!response.ok && user?.level !== 8) {
        logout()
      }
    }
    setState({
      ...state,
      auth,
      token,
      user,
      loading: false
    })
  }

  const getValuesFromLocalStorage = async () => {
    const auth = await strategy.getItem('token')
    const token = await strategy.getItem('token')
    const project = await strategy.getItem('project')
    const user = await strategy.getItem('user', true)
    return { auth, token, project, user }
  }

  const login = async (values) => {
    await strategy.setItem('token', values.token)
    await strategy.setItem('user', values.user, true)
    await strategy.setItem('project', values.project)
    setState({
      ...state,
      auth: true,
      user: values.user,
      token: values.token,
      loading: false
    })
  }

  const logout = async () => {
    await strategy.removeItem('token')
    await strategy.removeItem('user')
    const userCustomer = await strategy.getItem('user-customer')
    if (userCustomer) {
      await strategy.removeItem('user-customer')
    }
    setState({
      ...state,
      auth: false,
      user: null,
      token: null,
      loading: false
    })
  }

  const changeUser = async (user) => {
    await strategy.setItem('user', user, true)
    setState({
      ...state,
      user,
      loading: false
    })
  }

  const checkLocalStorage = async () => {
    const { token, project, user } = await getValuesFromLocalStorage()
    if (token && !state.token) {
      login({
        user,
        token,
        project
      })
    }

    if (!token && !state.token) {
      logout()
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkLocalStorage()
    }, 1000)
    return () => clearInterval(interval)
  }, [state])

  useEffect(() => {
    setValuesFromLocalStorage()
  }, [])

  const functions = {
    login,
    logout,
    changeUser
  }

  return (
    <SessionContext.Provider value={[state, functions]}>
      {children}
    </SessionContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => {}]
}
