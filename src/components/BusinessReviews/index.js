import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const BusinessReviews = (props) => {
  const {
    businessId,
    reviews,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const requestsState = {}

  /**
   * businessReviewsList, this must be contain a reviews, loading and error to send UIComponent
   */
  const [businessReviewsList, setBusinessReviewsList] = useState({ reviews: [], loading: true, error: null })

  /**
   * ReviewsList, this must be contain an original array of business reviews
   */
  const [reviewsList, setReviewsList] = useState(reviews)

  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to change filter value for business reviews
   * @param {Number} val
   */
  const onChangeOption = (val = null) => {
    const reviews = val !== 'all'
      ? reviewsList.filter(review => review.total >= val && review.total < val + 1)
      : reviewsList
    setBusinessReviewsList({
      ...businessReviewsList,
      loading: false,
      reviews
    })
  }

  /**
   * Method to get business from SDK
   */
  const getBusiness = async () => {
    try {
      const source = {}
      requestsState.reviews = source
      const { content: { result } } = await ordering
        .businesses(businessId)
        .select(['reviews'])
        .get({ cancelToken: source })

      const list = result?.reviews?.reviews
      list.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      setReviewsList(list)
      setBusinessReviewsList({
        ...businessReviewsList,
        loading: false,
        reviews: list
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessReviewsList({
          ...businessReviewsList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Method to change the enabled of the review
   * @param {boolean} enabled
   */
  const handleChangeReviewEnabled = async (reviewId, enabled) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ enabled: enabled })
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/reviews/${reviewId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const reviews = businessReviewsList.reviews.filter(review => {
          if (review.id === reviewId) {
            Object.assign(review, content.result)
          }
          return true
        })
        setBusinessReviewsList({ ...businessReviewsList, reviews: reviews })
        showToast(ToastType.Success, t('REVIEW_UPDATED', 'Review updated'))
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (reviews) {
      reviews.length &&
      reviews.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      setBusinessReviewsList({
        ...businessReviewsList,
        loading: false,
        reviews
      })
    } else {
      getBusiness()
    }
    return () => {
      if (requestsState.reviews) {
        requestsState.reviews.cancel()
      }
    }
  }, [businessId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          reviewsList={businessReviewsList}
          actionState={actionState}
          handleClickOption={onChangeOption}
          handleChangeReviewEnabled={handleChangeReviewEnabled}
        />
      )}
    </>
  )
}

BusinessReviews.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Reviews, this array must be containt all info about business reviews
   */
  reviews: PropTypes.arrayOf(PropTypes.object),
  /**
   * Id to get business from aPI
   */
  businessId: PropTypes.number,
  /**
   * Components types before business reviews
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business reviews
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business reviews
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business reviews
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessReviews.defaultProps = {
  reviews: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
