"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPaymethods = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _ConfigContext = require("../../contexts/ConfigContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var paymethodsNotAllowed = ['paypal_express', 'authorize'];

var BusinessPaymethods = function BusinessPaymethods(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _configState$configs4, _configState$configs5;

  var business = props.business,
      UIComponent = props.UIComponent,
      defaultSandboxRequiredGateways = props.defaultSandboxRequiredGateways,
      handleSuccessUpdate = props.handleSuccessUpdate;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessPaymethodsState = _useState2[0],
      setBusinessPaymethodsState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    sites: [],
    loading: true,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      sitesState = _useState4[0],
      setSitesState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      paymethodsList = _useState6[0],
      setPaymethodsList = _useState6[1];

  var sandboxRequiredGateways = defaultSandboxRequiredGateways || ['paypal', 'stripe_direct', 'paypal_express', 'stripe_connect', 'stripe_redirect', 'carlos_payment', 'ivr'];

  var _useState7 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionState = _useState8[0],
      setActionState = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      changesState = _useState10[0],
      setChangesState = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      stripeConnectData = _useState12[0],
      setStripeConnectData = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isSuccessDeleted = _useState14[0],
      setIsSuccessDeleted = _useState14[1];

  var stripeClientId = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.stripe_connect_sandbox) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) === '1' ? configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.stripe_connect_client_id_sandbox) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value : configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.stripe_connect_client_id) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value;
  /**
   * Clean formState
   */

  var cleanChangesState = function cleanChangesState(values) {
    return setChangesState(_objectSpread({}, values));
  };

  var parsePaymethods = function parsePaymethods(paymethods) {
    var _paymethods = paymethods && paymethods.filter(function (paymethod) {
      return !paymethodsNotAllowed.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway);
    });

    return _paymethods;
  };
  /**
   * Method to get paymethods from API
   */


  var getBusinessPaymethods = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response, _yield$response$json, result, response2, _yield$response2$json, sitesResult;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods?params=sites"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              _context.prev = 8;
              _context.next = 11;
              return fetch("".concat(ordering.root, "/sites"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                }
              });

            case 11:
              response2 = _context.sent;
              _context.next = 14;
              return response2.json();

            case 14:
              _yield$response2$json = _context.sent;
              sitesResult = _yield$response2$json.result;
              setSitesState(_objectSpread(_objectSpread({}, sitesState), {}, {
                loading: false,
                sites: sitesResult
              }));
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](8);
              setSitesState(_objectSpread(_objectSpread({}, sitesState), {}, {
                loading: false,
                sites: _context.t0.message
              }));

            case 22:
              setBusinessPaymethodsState(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: result
              }));
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t1 = _context["catch"](0);
              setBusinessPaymethodsState(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: _context.t1.message
              }));

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 25], [8, 19]]);
    }));

    return function getBusinessPaymethods() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get paymethods from API
   */


  var getAllPaymethods = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var response, _yield$response$json2, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(ordering.root, "/paymethods?where=[{%22attribute%22:%22enabled%22,%22value%22:true}]"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                }
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              _yield$response$json2 = _context2.sent;
              result = _yield$response$json2.result;
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: parsePaymethods(result)
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function getAllPaymethods() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to create the business paymethod option from API
   * @param {*} paymethodId paymethod id to create
   */


  var handleCreateBusinessPaymentOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(paymethodId) {
      var paymethod, params, requestOptions, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              paymethod = paymethodsList.paymethods.find(function (_paymethod) {
                return _paymethod.id === paymethodId;
              });
              params = {
                enabled: true,
                paymethod_id: paymethodId,
                sandbox: sandboxRequiredGateways.includes(paymethod.gateway)
              };
              _context3.prev = 2;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                },
                body: JSON.stringify(params)
              };
              _context3.next = 8;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods"), requestOptions);

            case 8:
              response = _context3.sent;
              _context3.next = 11;
              return response.json();

            case 11:
              content = _context3.sent;

              if (!content.error) {
                setBusinessPaymethodsState(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    paymethods: [].concat(_toConsumableArray(prevState.paymethods), [_objectSpread(_objectSpread({}, content.result), {}, {
                      paymethod: paymethod
                    })])
                  });
                });
                setActionState({
                  loading: false,
                  result: {
                    error: false
                  }
                });
                showToast(_ToastContext.ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'));
              }

              _context3.next = 18;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](2);
              setActionState({
                result: {
                  error: true,
                  result: _context3.t0.message
                },
                loading: false
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 15]]);
    }));

    return function handleCreateBusinessPaymentOption(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to update the business paymethod option
   * @param {Number} paymethodId business paymethod id to delete
   * @param {Object} options parameters to update
   */


  var handleUpdateBusinessPaymethodOpton = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(paymethodId, options) {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                },
                body: JSON.stringify(options)
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods/").concat(paymethodId), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;
              setChangesState(content.error ? changesState : {});

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                setBusinessPaymethodsState(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    paymethods: prevState.paymethods.filter(function (paymethod) {
                      if (paymethod.id === paymethodId) {
                        Object.assign(paymethod, content.result);
                      }

                      return true;
                    })
                  });
                });
                showToast(_ToastContext.ToastType.Success, t('PAYMETHOD_SAVED', 'Payment method saved'));
              }

              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              setActionState({
                result: {
                  error: true,
                  result: _context4.t0.message
                },
                loading: false
              });

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));

    return function handleUpdateBusinessPaymethodOpton(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to update the business paymethod option
   */


  var handleUpdateBusiness = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                },
                body: JSON.stringify(changesState)
              };
              _context5.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id), requestOptions);

            case 6:
              response = _context5.sent;
              _context5.next = 9;
              return response.json();

            case 9:
              content = _context5.sent;
              setChangesState(content.error ? changesState : {});

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                handleSuccessUpdate && handleSuccessUpdate(content.result);
              }

              _context5.next = 17;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              setActionState({
                result: {
                  error: true,
                  result: _context5.t0.message
                },
                loading: false
              });

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 14]]);
    }));

    return function handleUpdateBusiness() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the business paymethod option from API
   * @param {Number} paymethodId id to delete the business paymethod
   */


  var handleDeleteBusinessPaymethodOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(paymethodId) {
      var businessPaymethodId, requestOptions, response, content, updatedPaymethods;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              businessPaymethodId = businessPaymethodsState.paymethods.find(function (paymethod) {
                return paymethod.paymethod_id === paymethodId;
              }).id;
              _context6.prev = 1;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                }
              };
              _context6.next = 7;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/paymethods/").concat(businessPaymethodId), requestOptions);

            case 7:
              response = _context6.sent;
              _context6.next = 10;
              return response.json();

            case 10:
              content = _context6.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                updatedPaymethods = businessPaymethodsState.paymethods.filter(function (paymethod) {
                  return paymethod.paymethod_id !== paymethodId;
                });
                setBusinessPaymethodsState(_objectSpread(_objectSpread({}, businessPaymethodsState), {}, {
                  paymethods: updatedPaymethods
                }));
                showToast(_ToastContext.ToastType.Success, t('PAYMETHOD_DELETED', 'Payment method deleted'));
                setIsSuccessDeleted(true);
              }

              _context6.next = 17;
              break;

            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](1);
              setActionState({
                result: {
                  error: true,
                  result: _context6.t0.message
                },
                loading: false
              });

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 14]]);
    }));

    return function handleDeleteBusinessPaymethodOption(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Method to handle payment enabled state
   * @param {Number} paymethodId id of payment method
   */


  var handleClickPayment = function handleClickPayment(paymethodId) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === paymethodId;
    });

    if (found) {
      handleUpdateBusinessPaymethodOpton(found.id, {
        enabled: !found.enabled
      });
    } else {
      handleCreateBusinessPaymentOption(paymethodId);
    }
  };
  /**
   * Method to allow all paymethods
   */


  var handleSelectAllPaymethods = function handleSelectAllPaymethods() {
    var _iterator = _createForOfIteratorHelper(paymethodsList.paymethods),
        _step;

    try {
      var _loop = function _loop() {
        var paymethod = _step.value;
        var found = businessPaymethodsState.paymethods.find(function (_paymethod) {
          return _paymethod.paymethod_id === paymethod.id;
        });

        if (found) {
          if (!(found !== null && found !== void 0 && found.enabled)) {
            handleUpdateBusinessPaymethodOpton(found.id, {
              enabled: true
            });
          }
        } else {
          handleCreateBusinessPaymentOption(paymethod.id);
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  /**
   * Method to disable all paymethods
   */


  var handleSelectNonePaymethods = function handleSelectNonePaymethods() {
    var _iterator2 = _createForOfIteratorHelper(businessPaymethodsState.paymethods),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var paymethod = _step2.value;

        if (paymethod !== null && paymethod !== void 0 && paymethod.enabled) {
          handleUpdateBusinessPaymethodOpton(paymethod.id, {
            enabled: false
          });
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} sandbox value if sandbox data is or not
   */


  var handleChangeInput = function handleChangeInput(e, sandbox) {
    if (sandbox) {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        data_sandbox: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.data_sandbox), {}, _defineProperty({}, e.target.name, e.target.value))
      }));
    } else {
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        data: _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.data), {}, _defineProperty({}, e.target.name, e.target.value))
      }));
    }
  };
  /**
   * Method to control the sanbox enable state
   */


  var handleChangeSandbox = function handleChangeSandbox() {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      sandbox: !(changesState !== null && changesState !== void 0 && changesState.sandbox)
    }));
  };
  /**
   * Method to connect with stripe
   */


  var handleStripeConnect = function handleStripeConnect() {
    var connect = window.open("https://connect.stripe.com/oauth/authorize?response_type=code&client_id=".concat(stripeClientId, "&scope=read_write&state=").concat(token), '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,clearcache=yes');
    var interval = setInterval(function () {
      if (!connect.closed) {
        connect.postMessage('data', ordering.url);
      } else {
        clearInterval(interval);
      }
    }, 200);
    var timeout = null;
    window.addEventListener('message', function (e) {
      if (e.origin.indexOf('.ordering.co') === -1) {
        return;
      }

      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        connect.postMessage('close', ordering.url);

        if (!e.data.error && e.data.result) {
          var data = e.data.result;
          var stripeData = {
            sandbox: data.livemode,
            data: {
              token: data.access_token,
              publishable: data.stripe_publishable_key,
              user: data.stripe_user_id,
              refresh_token: data.refresh_token
            }
          };
          setStripeConnectData(stripeData);
        } else if (e.data.error) {
          setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
            loading: false,
            error: e.data.error
          }));
        }
      }, 1000);
    });
  };
  /**
   * Method to save the stripe connect data
   * @param {Number} paymethodId id of payment method
   */


  var handleStripeSave = function handleStripeSave(paymethodId) {
    var _requestionOptions, _requestionOptions2;

    var requestionOptions = _objectSpread(_objectSpread({}, stripeConnectData), {}, {
      sandbox: true,
      data_sandbox: JSON.stringify(stripeConnectData === null || stripeConnectData === void 0 ? void 0 : stripeConnectData.data)
    });

    if ((_requestionOptions = requestionOptions) !== null && _requestionOptions !== void 0 && _requestionOptions.allowed_order_types) {
      requestionOptions = _objectSpread(_objectSpread({}, requestionOptions), {}, {
        allowed_order_types: requestionOptions.allowed_order_types.length > 0 ? JSON.stringify(requestionOptions.allowed_order_types) : null
      });
    }

    if ((_requestionOptions2 = requestionOptions) !== null && _requestionOptions2 !== void 0 && _requestionOptions2.sites) {
      requestionOptions = _objectSpread(_objectSpread({}, requestionOptions), {}, {
        sites: JSON.stringify(requestionOptions.sites)
      });
    }

    if (Object.keys(stripeConnectData).length) {
      handleUpdateBusinessPaymethodOpton(paymethodId, requestionOptions);
    }

    handleUpdateBusiness();
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeStripeInput = function handleChangeStripeInput(e) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var handleChangeBusinessPaymentState = function handleChangeBusinessPaymentState(values) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), values));
  };

  var handleChangeStripeConnectData = function handleChangeStripeConnectData(values) {
    setStripeConnectData(_objectSpread(_objectSpread({}, stripeConnectData), values));
  };
  /**
   * Method to save the form state
   * @param {Number} paymethodId id to save the change state
   */


  var handleSaveClick = function handleSaveClick(paymethodId) {
    var _changes, _changes2, _changes3, _changes4;

    var changes = _objectSpread({}, changesState);

    if ((_changes = changes) !== null && _changes !== void 0 && _changes.data) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        data: JSON.stringify(changes.data)
      });
    }

    if ((_changes2 = changes) !== null && _changes2 !== void 0 && _changes2.data_sandbox) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        data_sandbox: JSON.stringify(changes.data_sandbox)
      });
    }

    if ((_changes3 = changes) !== null && _changes3 !== void 0 && _changes3.allowed_order_types) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        allowed_order_types: changes.allowed_order_types.length > 0 ? JSON.stringify(changes.allowed_order_types) : null
      });
    }

    if ((_changes4 = changes) !== null && _changes4 !== void 0 && _changes4.sites) {
      changes = _objectSpread(_objectSpread({}, changes), {}, {
        sites: JSON.stringify(changes.sites)
      });
    }

    handleUpdateBusinessPaymethodOpton(paymethodId, changes);
    handleUpdateBusiness();
  };

  (0, _react.useEffect)(function () {
    getAllPaymethods();
    getBusinessPaymethods();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessPaymethodsState: businessPaymethodsState,
    paymethodsList: paymethodsList,
    handleClickPayment: handleClickPayment,
    actionState: actionState,
    sitesState: sitesState,
    handleDeleteBusinessPaymethodOption: handleDeleteBusinessPaymethodOption,
    changesState: changesState,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    stripeConnectData: stripeConnectData,
    handleChangeStripeConnectData: handleChangeStripeConnectData,
    cleanChangesState: cleanChangesState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleStripeConnect: handleStripeConnect,
    handleChangeStripeInput: handleChangeStripeInput,
    handleStripeSave: handleStripeSave,
    isSuccessDeleted: isSuccessDeleted,
    setIsSuccessDeleted: setIsSuccessDeleted,
    handleSelectAllPaymethods: handleSelectAllPaymethods,
    handleSelectNonePaymethods: handleSelectNonePaymethods
  })));
};

exports.BusinessPaymethods = BusinessPaymethods;
BusinessPaymethods.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessPaymethods.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};