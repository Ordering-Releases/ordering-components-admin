import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'

export const OccupationSelector = (props) => {
  const {
    UIComponent,
    handleChangeOccupation
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [events] = useEvent()

  const [occupationId, setOccupationId] = useState(props.occupationId)
  const [occupations, setOccupations] = useState(props.occupations)
  const [actionState, setActionState] = useState({ loading: false, error: null })

  const handleAddOccupation = async (payload) => {
    try {
      setActionState({
        ...actionState,
        loading: true
      })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      }
      const response = await fetch(`${ordering.root}/occupations`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({
          loading: false,
          error: null
        })
        setOccupations([...occupations, content.result])
        setOccupationId(content.result.id)
        handleChangeOccupation(content.result.id)
        events.emit('occupations_update', [...occupations, content.result])
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    setOccupationId(props.occupationId)
  }, [props.occupationId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionState={actionState}
          occupationId={occupationId}
          occupations={occupations}
          handleAddOccupation={handleAddOccupation}
        />
      )}
    </>
  )
}

OccupationSelector.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

OccupationSelector.defaultProps = {}
