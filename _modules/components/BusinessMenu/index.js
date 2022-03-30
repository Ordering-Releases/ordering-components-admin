"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenu = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _ToastContext = require("../../contexts/ToastContext");

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

var BusinessMenu = function BusinessMenu(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      handleSuccessBusinessMenu = props.handleSuccessBusinessMenu;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    menus: [],
    menusShared: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessMenusState = _useState2[0],
      setBusinessMenusState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSelectedSharedMenus = _useState4[0],
      setIsSelectedSharedMenus = _useState4[1];

  var _useState5 = (0, _react.useState)({
    sites: [],
    loading: true,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      sitesState = _useState6[0],
      setSitesState = _useState6[1];
  /**
  * Method to get the business menus from API
  */


  var getBusinessMenus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus"), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  menus: content.result
                }));
              } else {
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getBusinessMenus() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to control business menu active state from API
   * @param {Number} menuId menu id to change the business menu state
   * @param {Boolean} enabled menu enabled to change the business menu state
   */


  var handleChangeBusinessMenuActiveState = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(menuId, enabled) {
      var requestOptions, endPoint, response, content, _business, menus, menusShared;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  enabled: enabled
                })
              };
              endPoint = isSelectedSharedMenus ? "".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menuId) : "".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menuId);
              _context2.next = 7;
              return fetch(endPoint, requestOptions);

            case 7:
              response = _context2.sent;
              _context2.next = 10;
              return response.json();

            case 10:
              content = _context2.sent;

              if (!content.error) {
                _business = {};

                if (!isSelectedSharedMenus) {
                  menus = businessMenusState.menus.filter(function (menu) {
                    if (menu.id === menuId) {
                      Object.assign(menu, content.result);
                    }

                    return true;
                  });
                  setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                    loading: false,
                    menus: menus
                  }));
                  _business = _objectSpread(_objectSpread({}, business), {}, {
                    menus: menus
                  });
                } else {
                  menusShared = businessMenusState.menusShared.filter(function (menu) {
                    if (menu.id === menuId) {
                      var _menu;

                      menu = _objectSpread(_objectSpread(_objectSpread({}, menu), content.result), {}, {
                        id: (_menu = menu) === null || _menu === void 0 ? void 0 : _menu.id
                      });
                    }

                    return true;
                  });
                  setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                    loading: false,
                    menusShared: menusShared
                  }));
                  _business = _objectSpread(_objectSpread({}, business), {}, {
                    menus_shared: menusShared
                  });
                }

                handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business);
                showToast(_ToastContext.ToastType.Success, t('MENU_SAVED', 'Products catalog saved'));
              } else {
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function handleChangeBusinessMenuActiveState(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the business menu from API
   * @param {Number} menuId menu id to delete the business menu
   */


  var handleDeleteBusinessMenu = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(menuId) {
      var requestOptions, endPoint, response, content, _business, menus, menusShared;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              endPoint = isSelectedSharedMenus ? "".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menuId) : "".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menuId);
              _context3.next = 7;
              return fetch(endPoint, requestOptions);

            case 7:
              response = _context3.sent;
              _context3.next = 10;
              return response.json();

            case 10:
              content = _context3.sent;

              if (!content.error) {
                _business = {};

                if (!isSelectedSharedMenus) {
                  menus = businessMenusState.menus.filter(function (menu) {
                    return menu.id !== menuId;
                  });
                  setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                    loading: false,
                    menus: menus
                  }));
                  _business = _objectSpread(_objectSpread({}, business), {}, {
                    menus: menus
                  });
                } else {
                  menusShared = businessMenusState.menusShared.filter(function (menu) {
                    return menu.id !== menuId;
                  });
                  setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                    loading: false,
                    menusShared: menusShared
                  }));
                  _business = _objectSpread(_objectSpread({}, business), {}, {
                    menus_shared: menusShared
                  });
                }

                handleSuccessBusinessMenu && handleSuccessBusinessMenu(_business);
                showToast(_ToastContext.ToastType.Success, t('MENU_DELETED', 'Products catalog deleted'));
              } else {
                setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function handleDeleteBusinessMenu(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get the business menus channels from API
   */


  var getBusinessMenuChannels = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var requestOptions, response, _yield$response$json, result, error, sites, response2, _yield$response2$json, sitesResult;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context4.next = 4;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus?params=sites"), requestOptions);

            case 4:
              response = _context4.sent;
              _context4.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context4.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;

              if (error) {
                _context4.next = 29;
                break;
              }

              sites = {};
              result.forEach(function (menu) {
                sites = _objectSpread(_objectSpread({}, sites), {}, _defineProperty({}, menu.id, {
                  id: menu.id,
                  sites: menu.sites
                }));
              });
              _context4.prev = 13;
              _context4.next = 16;
              return fetch("".concat(ordering.root, "/sites"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'x-app-x': ordering === null || ordering === void 0 ? void 0 : ordering.appId
                }
              });

            case 16:
              response2 = _context4.sent;
              _context4.next = 19;
              return response2.json();

            case 19:
              _yield$response2$json = _context4.sent;
              sitesResult = _yield$response2$json.result;
              setSitesState(_objectSpread(_objectSpread({}, sitesState), {}, {
                loading: false,
                sites: sitesResult
              }));
              _context4.next = 27;
              break;

            case 24:
              _context4.prev = 24;
              _context4.t0 = _context4["catch"](13);
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

            case 27:
              _context4.next = 30;
              break;

            case 29:
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: result
              }));

            case 30:
              _context4.next = 35;
              break;

            case 32:
              _context4.prev = 32;
              _context4.t1 = _context4["catch"](0);
              setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
                loading: false,
                error: [_context4.t1.message]
              }));

            case 35:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 32], [13, 24]]);
    }));

    return function getBusinessMenuChannels() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (business !== null && business !== void 0 && business.menus) {
      setBusinessMenusState(_objectSpread(_objectSpread({}, businessMenusState), {}, {
        menus: business === null || business === void 0 ? void 0 : business.menus,
        menusShared: business === null || business === void 0 ? void 0 : business.menus_shared
      }));
    } else {
      getBusinessMenus();
    }
  }, [business]);
  (0, _react.useEffect)(function () {
    getBusinessMenuChannels();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessMenusState: businessMenusState,
    isSelectedSharedMenus: isSelectedSharedMenus,
    sitesState: sitesState,
    handleChangeBusinessMenuActiveState: handleChangeBusinessMenuActiveState,
    handleDeleteBusinessMenu: handleDeleteBusinessMenu,
    setIsSelectedSharedMenus: setIsSelectedSharedMenus
  })));
};

exports.BusinessMenu = BusinessMenu;
BusinessMenu.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * Business, this must be contains an object with all business info
  */
  business: _propTypes.default.object,

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
BusinessMenu.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};