"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAutocompleteInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _WrapperGoogleMaps = require("../WrapperGoogleMaps");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to make an input with Google Autocomplete
 * @param {object} props Props of AutocompleteInput component
 */
var AutocompleteInput = function AutocompleteInput(props) {
  var googleReady = props.googleReady,
    onChangeAddress = props.onChangeAddress,
    types = props.types,
    fields = props.fields,
    countryCode = props.countryCode,
    childRef = props.childRef;
  var inputRef = (0, _react.useRef)();
  var inputProps = {};
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (['googleReady', 'apiKey', 'onChangeAddress', 'setValue', 'childRef', 'countryCode', 'types', 'fields'].indexOf(key) === -1) {
      inputProps[key] = value;
    }
  });
  var options = {
    types: types,
    fields: fields
  };
  if (countryCode !== '*') {
    options.componentRestrictions = {
      country: countryCode
    };
  }
  (0, _react.useEffect)(function () {
    var _window$google, _window$google$maps, _window$google$maps$p;
    if (googleReady && onChangeAddress && (_window$google = window.google) !== null && _window$google !== void 0 && (_window$google$maps = _window$google.maps) !== null && _window$google$maps !== void 0 && (_window$google$maps$p = _window$google$maps.places) !== null && _window$google$maps$p !== void 0 && _window$google$maps$p.Autocomplete) {
      var autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
      autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        var postalCode = null;
        var _iterator = _createForOfIteratorHelper(place.address_components),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var component = _step.value;
            var addressType = component.types[0];
            if (addressType === 'postal_code') {
              postalCode = component.short_name || component.long_name;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var address = {
          address: place.formatted_address,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          },
          utc_offset: place.utc_offset_minutes,
          map_data: {
            library: 'google',
            place_id: place.place_id
          }
        };
        if (postalCode) {
          address.zipcode = postalCode;
        }
        onChangeAddress(address);
      });
    }
  }, [googleReady]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      if (inputRef.current.attributes.autocomplete && inputRef.current.attributes.autocomplete.value === (props.autoComplete || 'new-field')) clearInterval(interval);
      inputRef.current.setAttribute('autocomplete', props.autoComplete || 'new-field');
    }, 100);
    return function () {
      return clearInterval(interval);
    };
  });
  return /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, {
    autoComplete: props.autoComplete || 'new-field',
    disabled: !props.googleReady,
    ref: function ref(e) {
      inputRef.current = e;
      childRef && childRef(e);
    },
    onFocus: function onFocus() {
      return inputRef.current.setAttribute('autocomplete', props.autoComplete || 'new-field');
    }
  }));
};
AutocompleteInput.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,
  /**
   * Fields for Google autocomplete
   * @see fields https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.fields
   */
  fields: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * types for Google autocomplete
   * @see types https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.types
   */
  types: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * types for Google autocomplete
   * @see countryCode https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#ComponentRestrictions.country
   */
  countryCode: _propTypes.default.string,
  /**
   * Function to get address when this changed
   * @param {object} address New address
   */
  onChangeAddress: _propTypes.default.func
};
AutocompleteInput.defaultProps = {
  types: [],
  fields: ['place_id', 'formatted_address', 'geometry', 'utc_offset_minutes', 'address_components'],
  countryCode: '*'
};
var GoogleAutocompleteInput = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(AutocompleteInput);
exports.GoogleAutocompleteInput = GoogleAutocompleteInput;