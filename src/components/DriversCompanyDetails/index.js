import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const DriversCompanyDetails = (props) => {
  const {
    UIComponent,
    driversCompaniesState,
    setDriversCompaniesState,
    driversCompany
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [changesState, setChangesState] = useState({})
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to update the selected drivers company from API
   * @param {Number} driverCompanyId
   */
  const handleUpdateDriversCompany = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const _changes = { ...changesState }
      if (_changes?.schedule) {
        _changes.schedule = JSON.stringify(_changes?.schedule)
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(_changes)
      }
      const response = await fetch(`${ordering.root}/driver_companies/${driversCompany?.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = driversCompaniesState.companies.filter(company => {
          if (company.id === driversCompany?.id) {
            Object.assign(company, content.result)
          }
          return true
        })
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
        setChangesState({})
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to add new drivers company from API
   */
  const handleAddDriversCompany = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })

      const schedule = []
      for (var i = 0; i < 7; i++) {
        schedule.push({
          enabled: true,
          lapses: [
            {
              open: {
                hour: 0,
                minute: 0
              },
              close: {
                hour: 23,
                minute: 45
              }
            }
          ]
        })
      }
      const extraAttributes = {
        enabled: true,
        priority: '0',
        fixed_cost_per_km: 0,
        fixed_cost_delivery: 0,
        percentage_cost_per_order_subtotal: 0
      }
      const changes = {
        ...changesState,
        ...extraAttributes,
        schedule: changesState?.schedule ? JSON.stringify(changesState?.schedule) : JSON.stringify(schedule)
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/driver_companies`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = [...driversCompaniesState.companies, content.result]
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('DRIVER_COMPANY_ADDED', 'Driver company added'))
        setChangesState({})
        props.onClose && props.onClose()
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the selected drivers company from API
   */
  const handleDeleteDriversCompany = async () => {
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
      const response = await fetch(`${ordering.root}/driver_companies/${driversCompany.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const companies = driversCompaniesState.companies.filter(company => company.id !== driversCompany.id)
        setDriversCompaniesState({ ...driversCompaniesState, companies: companies })
        showToast(ToastType.Success, t('DRIVER_COMPANY_DELETED', 'Driver company deleted'))
        props.onClose && props.onClose()
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  const handleChangesState = (key, val) => {
    setChangesState({
      ...changesState,
      [key]: val
    })
  }

  const handleChangeScheduleState = (scheduleChanges) => {
    setChangesState({
      ...changesState,
      schedule: scheduleChanges
    })
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            cleanChagesState={() => setChangesState({})}
            changesState={changesState}
            actionState={actionState}
            cleanActionState={() => setActionState({ ...actionState, error: null })}
            handleChangesState={handleChangesState}
            handleUpdateDriversCompany={handleUpdateDriversCompany}
            handleAddDriversCompany={handleAddDriversCompany}
            handleChangeScheduleState={handleChangeScheduleState}
            handleDeleteDriversCompany={handleDeleteDriversCompany}
          />
        )
      }
    </>
  )
}

DriversCompanyDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers company details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers company details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers company details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers company details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversCompanyDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
