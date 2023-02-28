import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessFilter = (props) => {
  const {
    UIComponent
  } = props

  const initialFilterValues = {
    name: null,
    cityIds: [],
    availableMenus: { value: '', condition: '=' },
    menus: { value: '', condition: '=' },
    enabled: null,
    featured: null
  }
  /**
   * This property is used to set in state the current value
  */
  const [filterValues, setFilterValues] = useState(JSON.parse(JSON.stringify(initialFilterValues)))

  /**
   * Changer order Id
   * @param {object} changes filter values
   */
  const handleChangeValue = (changes) => {
    setFilterValues({ ...filterValues, ...changes })
  }

  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  const handleChangeCity = (cityId) => {
    let _cityIds = [...filterValues.cityIds]
    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId)
    } else {
      _cityIds = _cityIds.filter((_cityId) => _cityId !== cityId)
    }
    setFilterValues({ ...filterValues, cityIds: _cityIds })
  }

  /**
   * Reset filter values
  */
  const handleResetFilterValues = () => {
    setFilterValues(JSON.parse(JSON.stringify(initialFilterValues)))
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterValues={filterValues}
          handleChangeValue={handleChangeValue}
          handleChangeCity={handleChangeCity}
          handleResetFilterValues={handleResetFilterValues}
        />
      )}
    </>
  )
}

BusinessFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
