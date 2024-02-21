import React, { useEffect, useState } from 'react'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const BusinessLogs = (props) => {
  const {
    businessId,
    UIComponent,
    paginationSettings
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [logsList, setLogsList] = useState({ logs: [], loading: true, error: null })

  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  const getBusinesssLogs = async (page, pageSize) => {
    try {
      setLogsList({ ...logsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/business/${businessId}/logs?orderBy=-id&page=${page}&page_size=${pageSize}`, requestOptions)
      const content = await response.json()

      setLogsList({
        loading: false,
        logs: content.error ? [] : content.result,
        error: content.error
          ? Array.isArray(content.result) ? content.result[0] : content.result
          : null
      })
      setPaginationProps({
        ...paginationProps,
        currentPage: content?.pagination?.current_page,
        totalPages: content?.pagination?.total_pages,
        totalItems: content?.pagination?.total,
        from: content?.pagination?.from,
        to: content?.pagination?.to
      })
    } catch (error) {
      setLogsList({
        ...logsList,
        loading: false,
        error: error?.message ?? error
      })
    }
  }

  useEffect(() => {
    getBusinesssLogs(1, null)
  }, [businessId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          logsList={logsList}
          paginationProps={paginationProps}
          getBusinessLogs={getBusinesssLogs}
        />
      )}
    </>
  )
}

BusinessLogs.defaultProps = {
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
