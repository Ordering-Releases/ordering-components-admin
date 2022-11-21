import React, { useState } from 'react'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'

export const SidebarMenu = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [state, setState] = useState({ loading: false, error: null, result: null })

  /**
   * Method to get billing token from core API
   */
  const getBillingToken = async () => {
    try {
      setState({ ...state, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/integrations/internal/tokens/current/`, requestOptions)
      const content = await response.json()
      setState({
        ...state,
        loading: false,
        result: content.error ? null : content.result,
        error: content.error ? content.result : null
      })
      content.error && showToast(ToastType.Error, content.result?.[0])
      return {
        result: content.result,
        error: content.error ? content.result : null
      }
    } catch (err) {
      setState({
        ...state,
        loading: false,
        error: err.message
      })
      err?.message && showToast(ToastType.Error, err?.message)
    }
  }

  return (
    UIComponent && (
      <UIComponent
        {...props}
        state={state}
        getBillingToken={getBillingToken}
      />
    )
  )
}
