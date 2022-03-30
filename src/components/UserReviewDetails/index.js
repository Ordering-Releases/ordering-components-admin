import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const UserReviewDetails = (props) => {
  const {
    userId,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [userReviewState, setUserReviewState] = useState({ reviews: [], loading: false, error: null })

  /**
   * Method to get the driver reviews from API
   */
  const getUserReviews = async () => {
    try {
      setUserReviewState({ ...userReviewState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/users/${userId}/user_reviews`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setUserReviewState({ reviews: content.result, loading: false, error: null })
      }
    } catch (err) {
      setUserReviewState({
        ...userReviewState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!userId) return
    getUserReviews()
  }, [userId])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            userReviewState={userReviewState}
          />
        )
      }
    </>
  )
}

UserReviewDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before driver review details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after driver review details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before driver review details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after driver review details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

UserReviewDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
