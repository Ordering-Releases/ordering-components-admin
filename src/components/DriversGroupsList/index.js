import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const DriversGroupsList = (props) => {
  const {
    UIComponent,
    isDriversMangersRequired,
    isHeaderComponent,
    paginationSettings,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [driversGroupsState, setDriversGroupsState] = useState({ groups: [], loading: false, error: null })
  const [driversManagersList, setDriversManagersList] = useState({ managers: [], loading: false, error: null })
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: false, error: null })
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: false, error: null })
  const [driversList, setDriversList] = useState({ drivers: [], loading: false, error: null })
  const [driversCompanyList, setDriversCompanyList] = useState({ companies: [], loading: false, error: null })
  const [searchValue, setSearchValue] = useState('')
  const [startSeveralDeleteStart, setStartSeveralDeleteStart] = useState(false)
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [selectedGroupList, setSelectedGroupList] = useState([])
  const [actionDisabled, setActionDisabled] = useState(true)
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage : 1,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  /**
 * Method to get the driver groups from API
 */
  const getHeaderDriversGroups = async (page, pageSize) => {
    try {
      setDriversGroupsState({ ...driversGroupsState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      let where = []
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURIComponent(`%${searchValue}%`)
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
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const response = await fetch(`${ordering.root}/drivergroups?page=${page}&page_size=${pageSize}&params=${propsToFetch}&where=${JSON.stringify(where)}`, requestOptions)
      const content = await response.json()
      const { result, pagination, error } = content

      if (!error) {
        setDriversGroupsState({
          ...driversGroupsState,
          groups: result,
          loading: false
        })
      } else {
        driversGroupsState.groups = result
        setDriversGroupsState({
          ...driversGroupsState,
          loading: false
        })
      }
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - pagination.page_size * pagination.current_page
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        from: pagination.from,
        to: pagination.to,
        nextPageItems
      })
    } catch (err) {
      setDriversGroupsState({ ...driversGroupsState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the drivers groups from API
   */
  const getDriversGroups = async () => {
    try {
      setDriversGroupsState({ ...driversGroupsState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/drivergroups`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriversGroupsState({ ...driversGroupsState, groups: content.result, loading: false })
        if (user?.level === 5) {
          const found = content.result.find(group => group?.administrator_id === user?.id)
          if (found) setActionDisabled(false)
          else setActionDisabled(true)
        } else {
          setActionDisabled(false)
        }
      }
    } catch (err) {
      setDriversGroupsState({ ...driversGroupsState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to  get the driver managers from API
   */
  const getDriverManagers = async () => {
    try {
      setDriversManagersList({ ...driversManagersList, loading: false })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .users()
        .where([{ attribute: 'level', value: 5 }])
        .select(['name', 'email', 'photo']).get()
      if (!error) {
        setDriversManagersList({ ...driversManagersList, loading: false, managers: result })
      }
    } catch (err) {
      setDriversManagersList({ ...driversManagersList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get businesses from API
   */
  const getBusinesses = async () => {
    try {
      setBusinessesList({ ...businessesList, loading: true })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .businesses()
        .select(['name', 'logo'])
        .asDashboard()
        .get()
      if (!error) {
        setBusinessesList({ ...businessesList, loading: false, businesses: result })
      }
    } catch (err) {
      setBusinessesList({ ...businessesList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      setDriversList({ ...driversList, loading: false })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .users()
        .where([{ attribute: 'level', value: 4 }])
        .select(['name', 'lastname', 'email', 'photo']).get()
      if (!error) {
        setDriversList({ ...driversList, loading: false, drivers: result })
      }
    } catch (err) {
      setDriversList({ ...driversList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the paymethods from API
   */
  const getPaymethods = async () => {
    try {
      setPaymethodsList({ ...paymethodsList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/paymethods?params=name,gateway&where={%22enabled%22:true}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPaymethodsList({ ...paymethodsList, paymethods: content.result, loading: false })
      }
    } catch (err) {
      setPaymethodsList({ ...paymethodsList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the drivers companies from API
   */
  const getDriversCompanies = async () => {
    try {
      setDriversCompanyList({ ...driversCompanyList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/driver_companies?params=name`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriversCompanyList({ ...driversCompanyList, companies: content.result, loading: false })
      }
    } catch (err) {
      setDriversCompanyList({ ...driversCompanyList, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update selected drivers group from API
   * @param {Number} driverGroupId
   * @param {Object} changes
   */
  const handleUpdateDriversGroup = async (driverGroupId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true, error: null })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/drivergroups/${driverGroupId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ error: null, loading: false })
        const groups = driversGroupsState.groups.filter(group => {
          if (group.id === driverGroupId) {
            Object.assign(group, content.result)
          }
          return true
        })
        setDriversGroupsState({ ...driversGroupsState, groups: groups })
        showToast(ToastType.Success, t('CHANGES_SAVED', 'Changes saved'))
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the drivers group from API
   * @param {Number} driversGroupId
   */
  const handleDeleteDriversGroup = async (driversGroupId) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true, error: null })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/drivergroups/${driversGroupId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const groups = driversGroupsState.groups.filter(group => group.id !== driversGroupId)
        setDriversGroupsState({ ...driversGroupsState, groups: groups })
        showToast(ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'))
        if (startSeveralDeleteStart) {
          const groupList = [...selectedGroupList]
          groupList.shift()
          if (groupList.length === 0) {
            setStartSeveralDeleteStart(false)
          }
          setSelectedGroupList(groupList)
        }
      } else {
        setActionState({ ...actionState, loading: false, error: content.result })
        setStartSeveralDeleteStart(false)
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  const handleSelectGroup = (groupId) => {
    let ids = []
    if (selectedGroupList.includes(groupId)) {
      ids = selectedGroupList.filter(id => id !== groupId)
    } else {
      ids = [...selectedGroupList, groupId]
    }
    setSelectedGroupList(ids)
  }

  const handleAllSelectGroup = () => {
    const allIds = driversGroupsState.groups?.reduce((ids, group) => [...ids, group.id], [])
    if (selectedGroupList.length === allIds.length) {
      setSelectedGroupList([])
    } else {
      setSelectedGroupList(allIds)
    }
  }

  useEffect(() => {
    if (!startSeveralDeleteStart || selectedGroupList.length === 0) return
    handleDeleteDriversGroup(selectedGroupList[0])
  }, [selectedGroupList, startSeveralDeleteStart])

  useEffect(() => {
    getHeaderDriversGroups(paginationSettings.initialPage, paginationProps.pageSize)
    if (isHeaderComponent) return
    getDriversGroups()
    if (isDriversMangersRequired) {
      getDriverManagers()
    }
    getDrivers()
    getBusinesses()
    getPaymethods()
    getDriversCompanies()
  }, [searchValue])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            driversGroupsState={driversGroupsState}
            setDriversGroupsState={setDriversGroupsState}
            driversManagersList={driversManagersList}
            businessesList={businessesList}
            paymethodsList={paymethodsList}
            driversList={driversList}
            driversCompanyList={driversCompanyList}
            actionState={actionState}
            handleUpdateDriversGroup={handleUpdateDriversGroup}
            handleDeleteDriversGroup={handleDeleteDriversGroup}
            handleDeleteSelectedGroups={() => setStartSeveralDeleteStart(true)}
            selectedGroupList={selectedGroupList}
            handleSelectGroup={handleSelectGroup}
            handleAllSelectGroup={handleAllSelectGroup}
            actionDisabled={actionDisabled}
            getHeaderDriversGroups={getHeaderDriversGroups}
            pagination={paginationProps}
            onSearch={setSearchValue}
            searchValue={searchValue}
          />
        )
      }
    </>
  )
}

DriversGroupsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversGroupsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: []
}
