"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCashWallet = void 0;

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

var UserCashWallet = function UserCashWallet(props) {
  var _cashWalletState$wall6, _cashWalletState$wall7;

  var UIComponent = props.UIComponent,
      userId = props.userId;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    loading: false,
    wallet: {},
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      cashWalletState = _useState2[0],
      setCashWalletState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    events: [],
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      cashEventsState = _useState4[0],
      setCashEventsState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    users: [],
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      usersState = _useState6[0],
      setUsersState = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      addWalletState = _useState8[0],
      setAddWalletState = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      reduceWalletState = _useState10[0],
      setReduceWalletState = _useState10[1];

  var _useState11 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      actionState = _useState12[0],
      setActionState = _useState12[1];
  /**
   * Method to get user cash wallet info from API
   */


  var getUserCashWallet = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCashWalletState(_objectSpread(_objectSpread({}, cashWalletState), {}, {
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
              return fetch("".concat(ordering.root, "/users/").concat(userId, "/wallets"), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setCashWalletState({
                  loading: false,
                  wallet: content.result.find(function (wallet) {
                    return wallet.type === 'cash';
                  }) || {},
                  error: null
                });
              } else {
                setCashWalletState(_objectSpread(_objectSpread({}, cashWalletState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setCashWalletState(_objectSpread(_objectSpread({}, cashWalletState), {}, {
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

    return function getUserCashWallet() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get user cash wallet info from API
   */


  var getUserWalletHistory = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(walletId) {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setCashEventsState(_objectSpread(_objectSpread({}, cashEventsState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/users/").concat(userId, "/wallets/").concat(walletId, "/events?orderBy=-id"), requestOptions);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              content = _context2.sent;

              if (!content.error) {
                setCashEventsState({
                  loading: false,
                  events: content.result,
                  error: null
                });
              } else {
                setCashEventsState(_objectSpread(_objectSpread({}, cashEventsState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setCashEventsState(_objectSpread(_objectSpread({}, cashEventsState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function getUserWalletHistory(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getUsers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, result, error;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setUsersState(_objectSpread({
                loading: true
              }, usersState));
              _context3.next = 4;
              return ordering.setAccessToken(token).users().select(['name', 'lastname']).get();

            case 4:
              _yield$ordering$setAc = _context3.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              error = _yield$ordering$setAc2.error;

              if (!error) {
                setUsersState({
                  loading: false,
                  users: result,
                  error: null
                });
              } else {
                setUsersState(_objectSpread(_objectSpread({}, usersState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setUsersState(_objectSpread(_objectSpread({}, usersState), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function getUsers() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to add wallet money from API
   */


  var handleAddWalletMoney = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _cashWalletState$wall, requestOptions, response, content, _cashWalletState$wall2;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setActionState({
                loading: true,
                error: null
              });
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(addWalletState)
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/users/").concat(userId, "/wallets/").concat((_cashWalletState$wall = cashWalletState.wallet) === null || _cashWalletState$wall === void 0 ? void 0 : _cashWalletState$wall.id, "/events"), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                setCashWalletState(_objectSpread(_objectSpread({}, cashWalletState), {}, {
                  wallet: _objectSpread(_objectSpread({}, cashWalletState.wallet), {}, {
                    balance: ((_cashWalletState$wall2 = cashWalletState.wallet) === null || _cashWalletState$wall2 === void 0 ? void 0 : _cashWalletState$wall2.balance) + content.result.amount
                  })
                }));
                setAddWalletState({});
                setActionState({
                  loading: false,
                  error: null
                });
                showToast(_ToastContext.ToastType.Success, t('WALLET_MONEY_ADDED', 'Wallet money added'));
              } else {
                setActionState({
                  loading: false,
                  error: content.result
                });
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setActionState({
                loading: false,
                error: [_context4.t0.message]
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleAddWalletMoney() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to add wallet money from API
   */


  var handleReduceWalletMoney = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var _cashWalletState$wall3, params, requestOptions, response, content, _cashWalletState$wall4;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setActionState({
                loading: true,
                error: null
              });
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              params = _objectSpread({}, reduceWalletState);
              params.amount = '-' + reduceWalletState.amount;
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(params)
              };
              _context5.next = 8;
              return fetch("".concat(ordering.root, "/users/").concat(userId, "/wallets/").concat((_cashWalletState$wall3 = cashWalletState.wallet) === null || _cashWalletState$wall3 === void 0 ? void 0 : _cashWalletState$wall3.id, "/events"), requestOptions);

            case 8:
              response = _context5.sent;
              _context5.next = 11;
              return response.json();

            case 11:
              content = _context5.sent;

              if (!content.error) {
                setCashWalletState(_objectSpread(_objectSpread({}, cashWalletState), {}, {
                  wallet: _objectSpread(_objectSpread({}, cashWalletState.wallet), {}, {
                    balance: ((_cashWalletState$wall4 = cashWalletState.wallet) === null || _cashWalletState$wall4 === void 0 ? void 0 : _cashWalletState$wall4.balance) + content.result.amount
                  })
                }));
                setActionState({
                  loading: false,
                  error: null
                });
                setReduceWalletState({});
                showToast(_ToastContext.ToastType.Success, t('WALLET_MONEY_REDUCED', 'Wallet money reduced'));
              } else {
                setActionState({
                  loading: false,
                  error: content.result
                });
              }

              _context5.next = 18;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              setActionState({
                loading: false,
                error: [_context5.t0.message]
              });

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 15]]);
    }));

    return function handleReduceWalletMoney() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} isAddMoney variable to check if the add mode is or not
   */


  var handleChangeInput = function handleChangeInput(e, isAddMoney) {
    if (isAddMoney) {
      setAddWalletState(_objectSpread(_objectSpread({}, addWalletState), {}, _defineProperty({}, e.target.name, e.target.value)));
    } else {
      setReduceWalletState(_objectSpread(_objectSpread({}, reduceWalletState), {}, _defineProperty({}, e.target.name, e.target.value)));
    }
  };
  /**
   * Method to parse the transaction event
   */


  var parseEvent = function parseEvent(event) {
    var eventLog = '';
    var author = '';
    var findUser = usersState.users.find(function (user) {
      return user.id === event.author_id;
    });

    if (findUser) {
      author = "".concat(findUser === null || findUser === void 0 ? void 0 : findUser.name, " ").concat(findUser === null || findUser === void 0 ? void 0 : findUser.lastname);
    } else {
      author = "".concat(event.author_id);
    }

    if (event.event_type === 'manual') {
      switch (event.event) {
        case 'movement':
          if (Math.sign(event.amount) === -1) {
            eventLog = t('TRANSACTION_REDUCE_MONEY', '<strong>_user_</strong> reduce money').replace('_user_', "".concat(author));
          } else {
            eventLog = t('TRANSACTION_ADD_MONEY', '<strong>_user_</strong> add money').replace('_user_', "".concat(author));
          }

          break;

        case 'locked':
          eventLog = t('TRANSACTION_LOCKED', '<strong>_user_</strong> locked').replace('_user_', "".concat(author));
          break;

        case 'unlocked':
          eventLog = t('TRANSACTION_UNLOCKED', '<strong>_user_</strong> unlocked').replace('_user_', "".concat(author));
          break;

        default:
          eventLog = event.event;
          break;
      }
    }

    if (event.event_type === 'refund') {
      eventLog = t('REFUND_MONEY', 'Refund money');
    }

    if (event.event_type === 'payment') {
      eventLog = t('PAID_MONEY', 'Paid money');
    }

    return eventLog;
  };

  (0, _react.useEffect)(function () {
    var _cashWalletState$wall5;

    if (!((_cashWalletState$wall5 = cashWalletState.wallet) !== null && _cashWalletState$wall5 !== void 0 && _cashWalletState$wall5.id)) return;
    getUserWalletHistory(cashWalletState.wallet.id);
  }, [(_cashWalletState$wall6 = cashWalletState.wallet) === null || _cashWalletState$wall6 === void 0 ? void 0 : _cashWalletState$wall6.id, (_cashWalletState$wall7 = cashWalletState.wallet) === null || _cashWalletState$wall7 === void 0 ? void 0 : _cashWalletState$wall7.balance]);
  (0, _react.useEffect)(function () {
    getUserCashWallet();
  }, [userId]);
  (0, _react.useEffect)(function () {
    getUsers();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cashWalletState: cashWalletState,
    cashEventsState: cashEventsState,
    addWalletState: addWalletState,
    reduceWalletState: reduceWalletState,
    actionState: actionState,
    handleChangeInput: handleChangeInput,
    handleAddWalletMoney: handleAddWalletMoney,
    handleReduceWalletMoney: handleReduceWalletMoney,
    parseEvent: parseEvent
  })));
};

exports.UserCashWallet = UserCashWallet;
UserCashWallet.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * This must be contains userId to fetch
  */
  userId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

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
UserCashWallet.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};