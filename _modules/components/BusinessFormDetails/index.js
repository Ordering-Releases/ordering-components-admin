"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessFormDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _ConfigContext = require("../../contexts/ConfigContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage business form details behavior without UI component
 */
var BusinessFormDetails = function BusinessFormDetails(props) {
  var _configs$google_maps_, _session$user;

  var UIComponent = props.UIComponent,
      business = props.business,
      handleSuccessUpdate = props.handleSuccessUpdate,
      handleSucessAddBusiness = props.handleSucessAddBusiness;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)({
    loading: false,
    business: null,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessState = _useState2[0],
      setBusinessState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      addressChange = _useState6[0],
      setAddressChange = _useState6[1];

  var timeout = null;
  var googleMapsApiKey = configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  /**
   * Clean formState
   */

  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };
  /**
   * deafult params to add the business newly
   */


  var defaultAddBusinessParams = {
    minimum: 0,
    delivery_price: 0,
    tax: 0,
    tax_type: 1,
    service_fee: 0,
    enabled: true,
    owner_id: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id,
    schedule: [{
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }, {
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }, {
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }, {
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }, {
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }, {
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }, {
      enabled: true,
      lapses: [{
        open: {
          hour: 0,
          minute: 0
        },
        close: {
          hour: 23,
          minute: 59
        }
      }]
    }]
  };
  /**
   * Default fuction for business profile workflow
   */

  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).save(formState.changes, {
                accessToken: session.token
              });

            case 4:
              response = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : {},
                result: response.content,
                loading: false
              }));

              if (!response.content.error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  businesses: _objectSpread(_objectSpread({}, businessState.business), response.content)
                }));

                if (handleSuccessUpdate) {
                  handleSuccessUpdate(response.content.result);
                }
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function handleUpdateClick() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add the business
   */


  var handleAddBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var changes, response;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = _objectSpread(_objectSpread({}, formState.changes), defaultAddBusinessParams);
              _context2.next = 5;
              return ordering.businesses().save(changes, {
                accessToken: session.token
              });

            case 5:
              response = _context2.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : {},
                result: response.content,
                loading: false
              }));

              if (!response.content.error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  businesses: _objectSpread(_objectSpread({}, businessState.business), response.content)
                }));

                if (handleSucessAddBusiness) {
                  handleSucessAddBusiness(response.content.result);
                }
              }

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              }));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function handleAddBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};

    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */


  var handlechangeImage = function handlechangeImage(file, name) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, reader.result))
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  var handleChangeSwtich = function handleChangeSwtich(name, checked) {
    var changes = _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, checked));

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: changes
    }));
  };

  var getTimeZone = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(lat, lng) {
      var date, timestamp, url, response, result;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              date = new Date();
              timestamp = Math.floor(date.getTime() / 1000);
              url = "https://maps.googleapis.com/maps/api/timezone/json?location=".concat(lat, ",").concat(lng, "&timestamp=").concat(timestamp, "&key=").concat(googleMapsApiKey);
              _context3.next = 5;
              return fetch(url, {
                method: 'GET'
              });

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              result = _context3.sent;
              return _context3.abrupt("return", result === null || result === void 0 ? void 0 : result.timeZoneId);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getTimeZone(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChangeAddress = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(address) {
      var _address$location, _address$location2;

      var timezone;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getTimeZone(address === null || address === void 0 ? void 0 : (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat, address === null || address === void 0 ? void 0 : (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng);

            case 2:
              timezone = _context4.sent;
              setAddressChange({
                address: address === null || address === void 0 ? void 0 : address.address,
                location: _objectSpread(_objectSpread({}, address === null || address === void 0 ? void 0 : address.location), {}, {
                  zipcode: address !== null && address !== void 0 && address.zipcode ? address.zipcode : -1,
                  zoom: 15
                }),
                timezone: timezone
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleChangeAddress(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleChangeCenter = function handleChangeCenter(address) {
    var timezone;
    clearTimeout(timeout);
    timeout = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return getTimeZone(address === null || address === void 0 ? void 0 : address.lat(), address === null || address === void 0 ? void 0 : address.lng());

            case 2:
              timezone = _context5.sent;
              setAddressChange({
                location: {
                  lat: address === null || address === void 0 ? void 0 : address.lat(),
                  lng: address === null || address === void 0 ? void 0 : address.lng(),
                  zoom: 15,
                  zipcode: -1
                },
                timezone: timezone
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })), 200);
  };

  (0, _react.useEffect)(function () {
    if (!addressChange) return;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), addressChange)
    }));
  }, [addressChange]);
  (0, _react.useEffect)(function () {
    if (!business) return;
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cleanFormState: cleanFormState,
    formState: formState,
    businessState: businessState,
    setFormState: setFormState,
    handleChangeInput: handleChangeInput,
    handleButtonUpdateClick: handleUpdateClick,
    handlechangeImage: handlechangeImage,
    handleAddBusiness: handleAddBusiness,
    handleChangeAddress: handleChangeAddress,
    handleChangeCenter: handleChangeCenter,
    handleChangeSwtich: handleChangeSwtich
  })));
};

exports.BusinessFormDetails = BusinessFormDetails;
BusinessFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessFormDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};