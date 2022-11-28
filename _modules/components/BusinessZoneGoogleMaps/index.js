"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessZoneGoogleMaps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessZoneGoogleMaps = function BusinessZoneGoogleMaps(props) {
  var apiKey = props.apiKey,
    mapControls = props.mapControls,
    clearState = props.clearState,
    location = props.location,
    type = props.type,
    data = props.data,
    fillStyle = props.fillStyle,
    infoContentString = props.infoContentString,
    handleData = props.handleData,
    setClearState = props.setClearState,
    isAddMode = props.isAddMode,
    greenFillStyle = props.greenFillStyle,
    businessZones = props.businessZones,
    kmlData = props.kmlData,
    disabled = props.disabled;
  if (!apiKey) {
    console.warn('Prop `apiKey` is required to use Google Maps components.');
  }
  var divRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    googleMap = _useState2[0],
    setGoogleMap = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    googleMapMarker = _useState4[0],
    setGoogleMapMarker = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    circleZone = _useState6[0],
    setCircleZone = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    polygonZone = _useState8[0],
    setPolygonZone = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    infoWindow = _useState10[0],
    setInfoWindow = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    drawingManager = _useState12[0],
    setDrawingManager = _useState12[1];
  var center = location ? {
    lat: location === null || location === void 0 ? void 0 : location.lat,
    lng: location === null || location === void 0 ? void 0 : location.lng
  } : mapControls === null || mapControls === void 0 ? void 0 : mapControls.defaultPosition;
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    googleReady = _useState14[0],
    setGoogleReady = _useState14[1];

  /**
   * Method to control the data when center of circle is changed.
   */
  var onCircleCenterChanged = function onCircleCenterChanged() {
    handleData({
      center: {
        lat: circleZone.getCenter().lat(),
        lng: circleZone.getCenter().lng()
      },
      radio: circleZone.getRadius() / 1000
    });
  };

  /**
   * Method to control the data when radius of circle is changed.
   */
  var onCircleRadiusChanged = function onCircleRadiusChanged() {
    handleData(_objectSpread(_objectSpread({}, data), {}, {
      radio: circleZone.getRadius() / 1000
    }));
  };

  /**
   * Method to control the data when polygon is changed.
   */
  var onPoygonPathChanged = function onPoygonPathChanged() {
    var data = [];
    var _iterator = _createForOfIteratorHelper(polygonZone.getPath().getArray()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pos = _step.value;
        var position = {
          lat: pos.lat(),
          lng: pos.lng()
        };
        data.push(position);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    handleData(data);
  };

  /**
   * Listening method when overlay is completed.
   * @param {EventTarget} event
   */
  var overlayCompleteListener = function overlayCompleteListener(event) {
    setClearState(false);
    drawingManager.setMap(null);
    if (type === 1) {
      setCircleZone(event.overlay);
      infoWindow && infoWindow.open(googleMap);
    } else {
      setPolygonZone(event.overlay);
    }
  };

  /**
   * listening info string change
   */
  (0, _react.useEffect)(function () {
    if (googleReady && infoWindow) {
      infoWindow.setContent(infoContentString);
      if (data !== null && data !== void 0 && data.center) {
        infoWindow.setPosition(data.center);
      }
    }
  }, [infoWindow, infoContentString, data, googleReady]);
  (0, _react.useEffect)(function () {
    if (circleZone) {
      handleData({
        center: {
          lat: circleZone.getCenter().lat(),
          lng: circleZone.getCenter().lng()
        },
        radio: circleZone.getRadius() / 1000
      });
      window.google.maps.event.addListener(circleZone, 'center_changed', onCircleCenterChanged);
      window.google.maps.event.addListener(circleZone, 'radius_changed', onCircleRadiusChanged);
    }
  }, [circleZone]);
  (0, _react.useEffect)(function () {
    if (polygonZone) {
      var _data = [];
      var _iterator2 = _createForOfIteratorHelper(polygonZone.getPath().getArray()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pos = _step2.value;
          var position = {
            lat: pos.lat(),
            lng: pos.lng()
          };
          _data.push(position);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      handleData(_data);
      window.google.maps.event.addListener(polygonZone, 'mouseup', onPoygonPathChanged);
    }
  }, [polygonZone]);
  (0, _react.useEffect)(function () {
    if (drawingManager) {
      drawingManager.addListener('overlaycomplete', overlayCompleteListener);
    }
  }, [drawingManager]);

  /**
   * clear all the shapes
   */
  (0, _react.useEffect)(function () {
    var _window$google;
    if (!((_window$google = window.google) !== null && _window$google !== void 0 && _window$google.maps)) return;
    if (clearState) {
      var _window$google$maps, _window$google$maps$d;
      if (circleZone) {
        circleZone.setMap(null);
        setCircleZone(null);
        infoWindow && infoWindow.close();
      }
      if (polygonZone) {
        polygonZone.setMap(null);
        setPolygonZone(null);
      }
      if (drawingManager) {
        drawingManager.setMap(null);
      }
      if ((_window$google$maps = window.google.maps) !== null && _window$google$maps !== void 0 && (_window$google$maps$d = _window$google$maps.drawing) !== null && _window$google$maps$d !== void 0 && _window$google$maps$d.DrawingManager) {
        var _drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingControl: !disabled,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: type === 1 ? [window.google.maps.drawing.OverlayType.CIRCLE] : [window.google.maps.drawing.OverlayType.POLYGON]
          },
          circleOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: true
          }),
          polygonOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: false
          })
        });
        setDrawingManager(_drawingManager);
        _drawingManager.setMap(googleMap);
      }
    }
  }, [clearState, type]);

  /**
   * Fit map
   */
  (0, _react.useEffect)(function () {
    if (!googleReady || !googleMap) return;
    var bounds = new window.google.maps.LatLngBounds();
    if (circleZone) {
      bounds.union(circleZone.getBounds());
      googleMap.fitBounds(bounds);
    }
    if (polygonZone && Array.isArray(data)) {
      var _iterator3 = _createForOfIteratorHelper(data),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var position = _step3.value;
          bounds.extend(position);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      googleMap.fitBounds(bounds);
    }
  }, [googleReady, data, type, googleMap, circleZone, polygonZone]);
  (0, _react.useEffect)(function () {
    if (googleReady) {
      center.lat = location === null || location === void 0 ? void 0 : location.lat;
      center.lng = location === null || location === void 0 ? void 0 : location.lng;
      if (center.lat && center.lng) {
        googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      }
    }
  }, [location]);
  (0, _react.useEffect)(function () {
    if (!googleMap || !Array.isArray(kmlData) || !isAddMode) return;
    var polygon = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
      draggable: false,
      map: googleMap,
      paths: kmlData
    }));
    polygon.setMap(googleMap);
    var bounds = new window.google.maps.LatLngBounds();
    var _iterator4 = _createForOfIteratorHelper(kmlData),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var position = _step4.value;
        bounds.extend(position);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    googleMap.fitBounds(bounds);
    setPolygonZone(polygon);
  }, [isAddMode, kmlData, googleMap]);
  (0, _react.useEffect)(function () {
    if (googleReady) {
      var _location$zoom, _window$google$maps2, _window$google$maps2$;
      var map = new window.google.maps.Map(divRef.current, {
        zoom: (_location$zoom = location === null || location === void 0 ? void 0 : location.zoom) !== null && _location$zoom !== void 0 ? _location$zoom : mapControls.defaultZoom,
        center: center,
        zoomControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.zoomControl,
        streetViewControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.streetViewControl,
        fullscreenControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.fullscreenControl,
        mapTypeControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControl,
        mapTypeId: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeId,
        mapTypeControlOptions: _objectSpread({
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT
        }, mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControlOptions)
      });
      var marker = null;
      setGoogleMap(map);
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
        map: map,
        draggable: !!(mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable)
      });
      setGoogleMapMarker(marker);
      if (data) {
        var _infoWindow = new window.google.maps.InfoWindow({
          content: infoContentString,
          position: data.center
        });
        setInfoWindow(_infoWindow);
        if (type === 1 && data !== null && data !== void 0 && data.center) {
          var circle = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
            editable: !disabled,
            draggable: true,
            map: map,
            center: data.center,
            radius: data.radio * 1000
          }));
          setCircleZone(circle);
          _infoWindow.open(map);
        }
        if (type === 2 && Array.isArray(data)) {
          var polygon = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
            editable: !disabled,
            draggable: false,
            map: map,
            paths: data
          }));
          setPolygonZone(polygon);
        }
      }
      if ((_window$google$maps2 = window.google.maps) !== null && _window$google$maps2 !== void 0 && (_window$google$maps2$ = _window$google$maps2.drawing) !== null && _window$google$maps2$ !== void 0 && _window$google$maps2$.DrawingManager) {
        var _drawingManager = new window.google.maps.drawing.DrawingManager({
          drawingControl: !disabled,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: type === 1 ? [window.google.maps.drawing.OverlayType.CIRCLE] : [window.google.maps.drawing.OverlayType.POLYGON]
          },
          circleOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: true
          }),
          polygonOptions: _objectSpread(_objectSpread({}, fillStyle), {}, {
            clickable: false,
            draggable: false
          })
        });
        setDrawingManager(_drawingManager);
        _drawingManager.setMap(map);
      }
      if (isAddMode) {
        var bounds = new window.google.maps.LatLngBounds();
        var _iterator5 = _createForOfIteratorHelper(businessZones),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _deliveryZone$data, _deliveryZone$data2;
            var deliveryZone = _step5.value;
            if (deliveryZone.type === 1 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data = deliveryZone.data) !== null && _deliveryZone$data !== void 0 && _deliveryZone$data.center && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data2 = deliveryZone.data) !== null && _deliveryZone$data2 !== void 0 && _deliveryZone$data2.radio) {
              var newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
                editable: false,
                center: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.center,
                radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.radio) * 1000
              }));
              newCircleZone.setMap(map);
              bounds.union(newCircleZone.getBounds());
              map.fitBounds(bounds);
            }
            if ((deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.type) === 2 && Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
              var newPolygonZone = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
                editable: false,
                paths: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data
              }));
              newPolygonZone.setMap(map);
              if (Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
                var _iterator6 = _createForOfIteratorHelper(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var position = _step6.value;
                    bounds.extend(position);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                map.fitBounds(bounds);
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, [googleReady]);

  /**
   * append google map script
   */
  (0, _react.useEffect)(function () {
    if (!apiKey) {
      return;
    }
    var checker = null;
    if (window.document.getElementById('__googleMapsScriptId')) {
      if (typeof google !== 'undefined') {
        setGoogleReady(true);
      } else {
        checker = setInterval(function () {
          if (typeof google !== 'undefined') {
            setGoogleReady(true);
            clearInterval(checker);
          }
        }, 100);
      }
      return;
    }
    window.googleAsyncInit = function () {
      setGoogleReady(true);
    };
    var js = window.document.createElement('script');
    js.id = '__googleMapsScriptId';
    js.async = true;
    js.defer = true;
    js.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&libraries=places,geometry,visualization,drawing&callback=googleAsyncInit");
    window.document.body.appendChild(js);
    return function () {
      if (checker) {
        clearInterval(checker);
      }
    };
  }, [apiKey]);
  return googleReady && /*#__PURE__*/_react.default.createElement("div", {
    id: "map",
    ref: divRef,
    style: {
      width: '70%',
      height: '50%',
      position: 'absolute'
    }
  });
};
exports.BusinessZoneGoogleMaps = BusinessZoneGoogleMaps;
BusinessZoneGoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: _propTypes.default.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessZoneGoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
BusinessZoneGoogleMaps.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired
};