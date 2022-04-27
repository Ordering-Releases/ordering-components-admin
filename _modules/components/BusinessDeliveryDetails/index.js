"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessDeliveryDetails = function BusinessDeliveryDetails(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      actionState = _useState2[0],
      setActionState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    changes: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    changes: {},
    isCheckAll: false,
    isDirty: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      zoneListState = _useState6[0],
      setZoneListState = _useState6[1];
  /**
   * Method to update the business from the API
   */


  var handleDeliveryStateSave = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ordering.businesses(business.id).save(formState.changes, {
                accessToken: session.token
              });

            case 3:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (error) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", result);

            case 11:
              throw {
                message: error
              };

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", Promise.reject(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function handleDeliveryStateSave() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update the business delivery zone enable state from API
   */


  var handleUpdateDeliveryZoneState = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(zoneId, enabled) {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: JSON.stringify({
                  enabled: enabled
                })
              };
              _context2.next = 4;
              return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/deliveryzones/").concat(zoneId), requestOptions);

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              content = _context2.sent;

              if (content.error) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", content.result);

            case 12:
              throw {
                message: content.result
              };

            case 13:
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", Promise.reject(_context2.t0));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function handleUpdateDeliveryZoneState(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDeliveryStateSave = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _loop, key, zones, _business, result;

      return _regenerator.default.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState({
                loading: true,
                error: null
              });

              if (!Object.keys(zoneListState.changes).length) {
                _context4.next = 15;
                break;
              }

              _loop = /*#__PURE__*/_regenerator.default.mark(function _loop(key) {
                var _business$zones;

                var zoneId, foundZone;
                return _regenerator.default.wrap(function _loop$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        zoneId = parseInt(key);
                        foundZone = business === null || business === void 0 ? void 0 : (_business$zones = business.zones) === null || _business$zones === void 0 ? void 0 : _business$zones.find(function (zone) {
                          return zone.id === zoneId;
                        });

                        if (!((foundZone === null || foundZone === void 0 ? void 0 : foundZone.enabled) !== zoneListState.changes[key])) {
                          _context3.next = 5;
                          break;
                        }

                        _context3.next = 5;
                        return handleUpdateDeliveryZoneState(zoneId, zoneListState.changes[key]);

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _loop);
              });
              _context4.t0 = _regenerator.default.keys(zoneListState.changes);

            case 6:
              if ((_context4.t1 = _context4.t0()).done) {
                _context4.next = 11;
                break;
              }

              key = _context4.t1.value;
              return _context4.delegateYield(_loop(key), "t2", 9);

            case 9:
              _context4.next = 6;
              break;

            case 11:
              setZoneListState(_objectSpread(_objectSpread({}, zoneListState), {}, {
                isDirty: false
              }));
              zones = business.zones.filter(function (zone) {
                if (typeof zoneListState.changes[zone.id] !== 'undefined') {
                  zone.enabled = zoneListState.changes[zone.id];
                }

                return true;
              });
              _business = _objectSpread(_objectSpread({}, business), {}, {
                zones: zones
              });
              handleUpdateBusinessState(_business);

            case 15:
              if (!Object.keys(formState.changes).length) {
                _context4.next = 21;
                break;
              }

              _context4.next = 18;
              return handleDeliveryStateSave();

            case 18:
              result = _context4.sent;
              setFormState({
                changes: {}
              });
              handleUpdateBusinessState(result);

            case 21:
              setActionState({
                loading: false,
                error: null
              });
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
              _context4.next = 28;
              break;

            case 25:
              _context4.prev = 25;
              _context4.t3 = _context4["catch"](0);
              setActionState({
                loading: false,
                error: [_context4.t3.message]
              });

            case 28:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3, null, [[0, 25]]);
    }));

    return function onDeliveryStateSave() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChangeAllZoneState = function handleChangeAllZoneState(enabled) {
    var zoneChanges = _objectSpread({}, zoneListState.changes);

    for (var key in zoneChanges) {
      zoneChanges[key] = enabled;
    }

    setZoneListState(_objectSpread(_objectSpread({}, zoneListState), {}, {
      changes: zoneChanges,
      isCheckAll: enabled,
      isDirty: true
    }));
  };

  var handleChangeZoneState = function handleChangeZoneState(zoneId, enabled) {
    setZoneListState(_objectSpread(_objectSpread({}, zoneListState), {}, {
      changes: _objectSpread(_objectSpread({}, zoneListState.changes), {}, _defineProperty({}, zoneId, enabled)),
      isDirty: true
    }));
  };

  var handleChangeForm = function handleChangeForm(updateChange) {
    setFormState({
      changes: _objectSpread(_objectSpread({}, formState.changes), updateChange)
    });
  };

  (0, _react.useEffect)(function () {
    var enabledZones = 0;

    for (var key in zoneListState.changes) {
      if (zoneListState.changes[key]) enabledZones += 1;
    }

    setZoneListState(_objectSpread(_objectSpread({}, zoneListState), {}, {
      isCheckAll: Object.keys(zoneListState.changes).length === enabledZones
    }));
  }, [zoneListState.changes]);
  (0, _react.useEffect)(function () {
    var _business$zones2;

    var zoneList = (business === null || business === void 0 ? void 0 : (_business$zones2 = business.zones) === null || _business$zones2 === void 0 ? void 0 : _business$zones2.filter(function (zone) {
      return (zone === null || zone === void 0 ? void 0 : zone.type) !== 3;
    })) || [];
    var zoneChanges = {};
    zoneList.forEach(function (zone) {
      zoneChanges[zone.id] = zone.enabled;
    });
    setZoneListState(_objectSpread(_objectSpread({}, zoneListState), {}, {
      changes: zoneChanges
    }));
  }, [business === null || business === void 0 ? void 0 : business.zones]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionState: actionState,
    formState: formState,
    zoneListState: zoneListState,
    handleChangeForm: handleChangeForm,
    onDeliveryStateSave: onDeliveryStateSave,
    handleChangeAllZoneState: handleChangeAllZoneState,
    handleChangeZoneState: handleChangeZoneState
  })));
};

exports.BusinessDeliveryDetails = BusinessDeliveryDetails;
BusinessDeliveryDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessDeliveryDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};