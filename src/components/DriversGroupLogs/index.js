import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const DriversGroupLogs = (props) => {
  const {
    driversGroupId,
    UIComponent,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [session] = useSession()

  /**
   * Array to save logistics
   */
  const [logsList, setLogsList] = useState({ logs: [], loading: true, error: null })

  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  /**
   * Method to get logistics from API
   */
  const getDriversGroupLogs = async (page, pageSize) => {
    try {
      setLogsList({ ...logsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/drivergroups/${driversGroupId}/logs?orderBy=-id&page=${page}&page_size=${pageSize}`, requestOptions)
      const { pagination, result } = await response.json()
      setLogsList({ ...logsList, loading: false, logs: result })
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        from: pagination.from,
        to: pagination.to
      })
    } catch (err) {
      setLogsList({ ...logsList, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    getDriversGroupLogs(1, null)
  }, [driversGroupId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          logsList={logsList}
          paginationProps={paginationProps}
          getDriversGroupLogs={getDriversGroupLogs}
        />
      )}
    </>
  )
}

DriversGroupLogs.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers group logs
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers group logs
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers group logs
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers group logs
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversGroupLogs.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
