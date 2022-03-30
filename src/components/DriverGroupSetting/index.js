import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const DriverGroupSetting = (props) => {
  const {
    userId,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [driversGroupsState, setDriversGroupsState] = useState({ groups: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [includedGroupIds, setIncludedGroupIds] = useState([])

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
      const response = await fetch(`${ordering.root}/drivergroups?params=name,drivers`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDriversGroupsState({ ...driversGroupsState, groups: content.result, loading: false })
      }
    } catch (err) {
      setDriversGroupsState({ ...driversGroupsState, loading: false, error: [err.message] })
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

  const handleCheckboxClick = (groupId) => {
    const selectedGroup = driversGroupsState.groups.find(group => group.id === groupId)
    const driverIds = selectedGroup.drivers.reduce((ids, driver) => [...ids, driver.id], [])
    let changedDriverIds = []
    if (driverIds.includes(userId)) {
      console.log(userId, driverIds)
      changedDriverIds = driverIds.filter(id => id !== userId)
    } else {
      console.log('else')
      changedDriverIds = [...driverIds, userId]
    }

    console.log(changedDriverIds)
    const changes = { drivers: JSON.stringify(changedDriverIds) }
    handleUpdateDriversGroup(groupId, changes)
  }

  useEffect(() => {
    if (driversGroupsState.loading) return
    const groupIds = driversGroupsState.groups.reduce((ids, group) => {
      const found = group.drivers.find(driver => driver.id === userId)
      if (found) return [...ids, group.id]
      else return [...ids]
    }, [])
    setIncludedGroupIds(groupIds)
  }, [userId, driversGroupsState])

  useEffect(() => {
    getDriversGroups()
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            driversGroupsState={driversGroupsState}
            includedGroupIds={includedGroupIds}
            actionState={actionState}
            handleCheckboxClick={handleCheckboxClick}
          />
        )
      }
    </>
  )
}

DriverGroupSetting.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before drivers group setting
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after drivers group setting
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before drivers group setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after drivers group setting
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriverGroupSetting.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
