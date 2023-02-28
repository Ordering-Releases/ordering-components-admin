import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const UsersExportCSV = (props) => {
  const {
    defaultUserTypesSelected,
    disabledActiveStateCondition,
    UIComponent,
    userTypesSelected,
    selectedUserActiveState,

    searchValue,
    isSearchByUserId,
    isSearchByUserEmail,
    isSearchByUserPhone,
    isSearchByUserName
  } = props
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null, result: null })

  /**
   * Method to get csv from API
   */
  const getCSV = async (filterApply) => {
    if (loading) return
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const defaultConditions = []
      if (Array.isArray(defaultUserTypesSelected)) {
        defaultConditions.push({ attribute: 'level', value: defaultUserTypesSelected })
      }

      const filterConditons = []

      if (filterApply) {
        if (userTypesSelected.length > 0) {
          filterConditons.push({ attribute: 'level', value: userTypesSelected })
        }
        if (!disabledActiveStateCondition) {
          filterConditons.push({ attribute: 'enabled', value: selectedUserActiveState })
        }
        if (searchValue) {
          const searchConditions = []
          if (isSearchByUserId) {
            searchConditions.push(
              {
                attribute: 'id',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${searchValue}%`)
                }
              }
            )
          }
          if (isSearchByUserEmail) {
            searchConditions.push(
              {
                attribute: 'email',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${searchValue}%`)
                }
              }
            )
          }
          if (isSearchByUserPhone) {
            searchConditions.push(
              {
                attribute: 'cellphone',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${searchValue}%`)
                }
              }
            )
          }
          if (isSearchByUserName) {
            searchConditions.push(
              {
                attribute: 'name',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${searchValue}%`)
                }
              }
            )
            searchConditions.push(
              {
                attribute: 'lastname',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${searchValue}%`)
                }
              }
            )
          }

          filterConditons.push({
            conector: 'OR',
            conditions: searchConditions
          })
        }
      }
      const functionFetch = filterApply
        ? `${ordering.root}/users_new.csv?mode=dashboard&orderBy=id&where=${JSON.stringify(filterConditons)}`
        : defaultConditions.length > 0
          ? `${ordering.root}/users_new.csv?mode=dashboard&orderBy=id&where=${JSON.stringify(defaultConditions)}`
          : `${ordering.root}/users_new.csv?mode=dashboard&orderBy=id`

      const response = await fetch(functionFetch, requestOptions)
      const content = await response.json()
      setActionStatus({
        loading: false,
        result: content.result,
        error: null
      })
    } catch (err) {
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: err
      })
    }
  }
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionStatus={actionStatus}
          getCSV={getCSV}
        />
      )}
    </>
  )
}

UsersExportCSV.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

UsersExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
