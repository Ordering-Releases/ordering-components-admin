import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessZoneGoogleMaps = (props) => {
  const {
    apiKey,
    mapControls,
    clearState,
    location,
    type,
    data,
    fillStyle,
    infoContentString,
    handleData,
    setClearState,
    isAddMode,
    greenFillStyle,
    businessZones,
    kmlData,
    disabled
  } = props

  if (!apiKey) {
    console.warn('Prop `apiKey` is required to use Google Maps components.')
  }

  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [googleMapMarker, setGoogleMapMarker] = useState(null)
  const [circleZone, setCircleZone] = useState(null)
  const [polygonZone, setPolygonZone] = useState(null)
  const [infoWindow, setInfoWindow] = useState(null)
  const [drawingManager, setDrawingManager] = useState(null)
  const center = location ? { lat: location?.lat, lng: location?.lng } : mapControls?.defaultPosition
  const [googleReady, setGoogleReady] = useState(false)

  /**
   * Method to control the data when center of circle is changed.
   */
  const onCircleCenterChanged = () => {
    handleData({
      center: {
        lat: circleZone.getCenter().lat(),
        lng: circleZone.getCenter().lng()
      },
      radio: circleZone.getRadius() / 1000
    })
  }

  /**
   * Method to control the data when radius of circle is changed.
   */
  const onCircleRadiusChanged = () => {
    handleData({
      ...data,
      radio: circleZone.getRadius() / 1000
    })
  }

  /**
   * Method to control the data when polygon is changed.
   */
  const onPoygonPathChanged = () => {
    const data = []
    for (const pos of polygonZone.getPath().getArray()) {
      const position = {
        lat: pos.lat(),
        lng: pos.lng()
      }
      data.push(position)
    }
    handleData(data)
  }

  /**
   * Listening method when overlay is completed.
   * @param {EventTarget} event
   */
  const overlayCompleteListener = (event) => {
    setClearState(false)
    drawingManager.setMap(null)
    if (type === 1) {
      setCircleZone(event.overlay)
      infoWindow && infoWindow.open(googleMap)
    } else {
      setPolygonZone(event.overlay)
    }
  }

  /**
   * listening info string change
   */
  useEffect(() => {
    if (googleReady && infoWindow) {
      infoWindow.setContent(infoContentString)
      if (data?.center) {
        infoWindow.setPosition(data.center)
      }
    }
  }, [infoWindow, infoContentString, data, googleReady])

  useEffect(() => {
    if (circleZone) {
      handleData({
        center: {
          lat: circleZone.getCenter().lat(),
          lng: circleZone.getCenter().lng()
        },
        radio: circleZone.getRadius() / 1000
      })
      window.google.maps.event.addListener(circleZone, 'center_changed', onCircleCenterChanged)
      window.google.maps.event.addListener(circleZone, 'radius_changed', onCircleRadiusChanged)
    }
  }, [circleZone])

  useEffect(() => {
    if (polygonZone) {
      const data = []
      for (const pos of polygonZone.getPath().getArray()) {
        const position = {
          lat: pos.lat(),
          lng: pos.lng()
        }
        data.push(position)
      }
      handleData(data)
      window.google.maps.event.addListener(polygonZone, 'mouseup', onPoygonPathChanged)
    }
  }, [polygonZone])

  useEffect(() => {
    if (drawingManager) {
      drawingManager.addListener('overlaycomplete', overlayCompleteListener)
    }
  }, [drawingManager])

  /**
   * clear all the shapes
   */
  useEffect(() => {
    if (!window.google?.maps) return
    if (clearState) {
      if (circleZone) {
        circleZone.setMap(null)
        setCircleZone(null)
        infoWindow && infoWindow.close()
      }
      if (polygonZone) {
        polygonZone.setMap(null)
        setPolygonZone(null)
      }

      if (drawingManager) {
        drawingManager.setMap(null)
      }
      if (window.google.maps?.drawing?.DrawingManager) {
        const _drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingControl: !disabled,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: type === 1
              ? [window.google.maps.drawing.OverlayType.CIRCLE]
              : [window.google.maps.drawing.OverlayType.POLYGON]
          },
          circleOptions: {
            ...fillStyle,
            clickable: false,
            draggable: true
          },
          polygonOptions: {
            ...fillStyle,
            clickable: false,
            draggable: false
          }
        })
        setDrawingManager(_drawingManager)
        _drawingManager.setMap(googleMap)
      }
    }
  }, [clearState, type])

  /**
   * Fit map
   */
  useEffect(() => {
    if (!googleReady || !googleMap) return
    const bounds = new window.google.maps.LatLngBounds()
    if (circleZone) {
      bounds.union(circleZone.getBounds())
      googleMap.fitBounds(bounds)
    }
    if (polygonZone && Array.isArray(data)) {
      for (const position of data) {
        bounds.extend(position)
      }
      googleMap.fitBounds(bounds)
    }
  }, [googleReady, data, type, googleMap, circleZone, polygonZone])

  useEffect(() => {
    if (googleReady) {
      center.lat = location?.lat
      center.lng = location?.lng
      if (center.lat && center.lng) {
        googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center?.lat, center?.lng))
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
      }
    }
  }, [location])

  useEffect(() => {
    if (!googleMap || !Array.isArray(kmlData) || !isAddMode) return
    const polygon = new window.google.maps.Polygon({
      ...fillStyle,
      draggable: false,
      map: googleMap,
      paths: kmlData
    })
    polygon.setMap(googleMap)
    const bounds = new window.google.maps.LatLngBounds()
    for (const position of kmlData) {
      bounds.extend(position)
    }
    googleMap.fitBounds(bounds)
    setPolygonZone(polygon)
  }, [isAddMode, kmlData, googleMap])

  useEffect(() => {
    if (googleReady) {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location?.zoom ?? mapControls.defaultZoom,
        center,
        zoomControl: mapControls?.zoomControl,
        streetViewControl: mapControls?.streetViewControl,
        fullscreenControl: mapControls?.fullscreenControl,
        mapTypeControl: mapControls?.mapTypeControl,
        mapTypeId: mapControls?.mapTypeId,
        mapTypeControlOptions: {
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT,
          ...mapControls?.mapTypeControlOptions
        }
      })

      let marker = null
      setGoogleMap(map)
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(center?.lat, center?.lng),
        map,
        draggable: !!mapControls?.isMarkerDraggable
      })
      setGoogleMapMarker(marker)

      if (data) {
        const _infoWindow = new window.google.maps.InfoWindow({
          content: infoContentString,
          position: data.center
        })
        setInfoWindow(_infoWindow)

        if (type === 1 && data?.center) {
          const circle = new window.google.maps.Circle({
            ...fillStyle,
            editable: !disabled,
            draggable: true,
            map: map,
            center: data.center,
            radius: data.radio * 1000
          })
          setCircleZone(circle)
          _infoWindow.open(map)
        }
        if (type === 2 && Array.isArray(data)) {
          const polygon = new window.google.maps.Polygon({
            ...fillStyle,
            editable: !disabled,
            draggable: false,
            map: map,
            paths: data
          })
          setPolygonZone(polygon)
        }
      }
      if (window.google.maps?.drawing?.DrawingManager) {
        const _drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingControl: !disabled,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: type === 1
              ? [window.google.maps.drawing.OverlayType.CIRCLE]
              : [window.google.maps.drawing.OverlayType.POLYGON]
          },
          circleOptions: {
            ...fillStyle,
            clickable: false,
            draggable: true
          },
          polygonOptions: {
            ...fillStyle,
            clickable: false,
            draggable: false
          }
        })
        setDrawingManager(_drawingManager)
        _drawingManager.setMap(map)
      }
      if (isAddMode) {
        const bounds = new window.google.maps.LatLngBounds()
        for (const deliveryZone of businessZones) {
          if (deliveryZone.type === 1 && deliveryZone?.data?.center && deliveryZone?.data?.radio) {
            const newCircleZone = new window.google.maps.Circle({
              ...greenFillStyle,
              editable: false,
              center: deliveryZone?.data.center,
              radius: deliveryZone?.data.radio * 1000
            })
            newCircleZone.setMap(map)
            bounds.union(newCircleZone.getBounds())
            map.fitBounds(bounds)
          }
          if (deliveryZone?.type === 2 && Array.isArray(deliveryZone?.data)) {
            const newPolygonZone = new window.google.maps.Polygon({
              ...greenFillStyle,
              editable: false,
              paths: deliveryZone?.data
            })
            newPolygonZone.setMap(map)
            if (Array.isArray(deliveryZone?.data)) {
              for (const position of deliveryZone?.data) {
                bounds.extend(position)
              }
              map.fitBounds(bounds)
            }
          }
        }
      }
    }
  }, [googleReady])

  /**
   * append google map script
   */
  useEffect(() => {
    if (!apiKey) {
      return
    }
    let checker = null
    if (window.document.getElementById('__googleMapsScriptId')) {
      if (typeof google !== 'undefined') {
        setGoogleReady(true)
      } else {
        checker = setInterval(() => {
          if (typeof google !== 'undefined') {
            setGoogleReady(true)
            clearInterval(checker)
          }
        }, 100)
      }
      return
    }

    window.googleAsyncInit = () => {
      setGoogleReady(true)
    }

    const js = window.document.createElement('script')
    js.id = '__googleMapsScriptId'
    js.async = true
    js.defer = true
    js.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry,visualization,drawing&callback=googleAsyncInit`

    window.document.body.appendChild(js)
    return () => {
      if (checker) {
        clearInterval(checker)
      }
    }
  }, [apiKey])

  return (
    googleReady && (
      <div
        id='map'
        ref={divRef}
        style={{ width: '70%', height: '50%', position: 'absolute' }}
      />
    )
  )
}

BusinessZoneGoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: PropTypes.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: PropTypes.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessZoneGoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

BusinessZoneGoogleMaps.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: PropTypes.string.isRequired
}
