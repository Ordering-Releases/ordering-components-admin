import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const CampaignUserList = (props) => {
  const {
    UIComponent,
    campaignId
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [userListState, setUserListState] = useState({ users: [], loading: true, error: null })

  /**
   * Method to get the user list from API
   */
  const getUserList = async () => {
    try {
      setUserListState({ ...userListState, loading: true })

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/marketing_campaigns/${campaignId}/users`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setUserListState({ ...userListState, loading: false, error: null, users: content.result })
      } else {
        setUserListState({ ...userListState, loading: false, error: content.result })
      }
    } catch (err) {
      setUserListState({ ...userListState, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          userListState={userListState}
        />
      )}
    </>
  )
}

CampaignUserList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before place list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after place list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CampaignUserList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
