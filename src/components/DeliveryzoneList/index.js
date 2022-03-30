import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const DeliveryzoneList = (props) => {
  const {
    UIComponent,
    propsToFetch,
    businessIds,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [deliveryzoneList, setDeliveryzoneList] = useState({ zones: [], loading: false, error: null })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  /**
   * Method to get businesses from API
   */
  const getDeliveryzones = async (page, pageSize) => {
    try {
      setDeliveryzoneList({ ...deliveryzoneList, loading: true })
      let where = null
      const conditions = []

      if (businessIds) {
        conditions.push({ attribute: 'business_id', value: businessIds })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const fetchEndpoint = where
        ? `${ordering.root}/delivery_zones?page=${page}&page_size=${pageSize}8&params=${propsToFetch.toString()}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/delivery_zones?page=${page}&page_size=${pageSize}8&params=${propsToFetch.toString()}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDeliveryzoneList({ loading: false, zones: content.result, error: null })
        setPaginationProps({
          ...paginationProps,
          currentPage: content.pagination.current_page,
          totalPages: content.pagination.total_pages,
          totalItems: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
      }
    } catch (err) {
      setDeliveryzoneList({ ...deliveryzoneList, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getDeliveryzones(1, paginationProps.pageSize)
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            deliveryzoneList={deliveryzoneList}
            paginationProps={paginationProps}
            setPaginationProps={setPaginationProps}
            getDeliveryzones={getDeliveryzones}
          />
        )
      }
    </>
  )
}

DeliveryzoneList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before delivery zones
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after delivery zones
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before delivery zones
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after delivery zones
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DeliveryzoneList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  propsToFetch: ['name', 'minimum', 'price', 'type', 'data', 'enabled', 'business_id']
}
