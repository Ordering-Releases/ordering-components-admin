"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagesList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

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

var PagesList = function PagesList(props) {
  var UIComponent = props.UIComponent,
      propsToFetch = props.propsToFetch;

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
    pages: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pagesListState = _useState2[0],
      setPagesListState = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      editPageId = _useState4[0],
      setEditPageId = _useState4[1];

  var _useState5 = (0, _react.useState)({
    changes: {},
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      changeState = _useState6[0],
      setChangeState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionState = _useState8[0],
      setActionState = _useState8[1];
  /**
   * Method to get the pages from API
   */


  var getPages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setPagesListState(_objectSpread(_objectSpread({}, pagesListState), {}, {
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
              return fetch("".concat(ordering.root, "/pages?params=").concat(propsToFetch.toString()), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setPagesListState({
                  pages: content.result,
                  loading: false
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setPagesListState(_objectSpread(_objectSpread({}, pagesListState), {}, {
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

    return function getPages() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update the page from API
   */


  var handleUpdatePage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _changes, changes, key, requestOptions, response, content, updatedPages;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _changes = _objectSpread({}, changeState.changes);
              changes = {};

              for (key in _changes) {
                if (_changes[key] !== '') {
                  changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
                }
              }

              if (!(Object.keys(changes).length === 0)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return");

            case 6:
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setChangeState(_objectSpread(_objectSpread({}, changeState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changeState === null || changeState === void 0 ? void 0 : changeState.changes)
              };
              _context2.next = 11;
              return fetch("".concat(ordering.root, "/pages/").concat(editPageId), requestOptions);

            case 11:
              response = _context2.sent;
              _context2.next = 14;
              return response.json();

            case 14:
              content = _context2.sent;

              if (!content.error) {
                updatedPages = pagesListState.pages.filter(function (page) {
                  if (page.id === editPageId) {
                    var _changeState$changes, _changeState$changes2, _changeState$changes$, _changeState$changes3;

                    page.name = (_changeState$changes = changeState.changes) !== null && _changeState$changes !== void 0 && _changeState$changes.name ? (_changeState$changes2 = changeState.changes) === null || _changeState$changes2 === void 0 ? void 0 : _changeState$changes2.name : page === null || page === void 0 ? void 0 : page.name;
                    page.enabled = (_changeState$changes$ = (_changeState$changes3 = changeState.changes) === null || _changeState$changes3 === void 0 ? void 0 : _changeState$changes3.enabled) !== null && _changeState$changes$ !== void 0 ? _changeState$changes$ : page === null || page === void 0 ? void 0 : page.enabled;
                  }

                  return page;
                });
                handleUpdatePageList(updatedPages);
                setChangeState(_objectSpread(_objectSpread({}, changeState), {}, {
                  loading: false,
                  changes: {}
                }));
                showToast(_ToastContext.ToastType.Success, t('PAGE_SAVED', 'Page saved'));
              } else {
                setChangeState(_objectSpread(_objectSpread({}, changeState), {}, {
                  result: {
                    error: true,
                    result: content.result
                  },
                  loading: false
                }));
              }

              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              setChangeState(_objectSpread(_objectSpread({}, changeState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 18]]);
    }));

    return function handleUpdatePage() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the page from API
   */


  var handleDeletePage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(pageId) {
      var requestOptions, response, content, updatedPages;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/pages/").concat(pageId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                updatedPages = pagesListState.pages.filter(function (page) {
                  return page.id !== pageId;
                });
                handleUpdatePageList(updatedPages);
                showToast(_ToastContext.ToastType.Success, t('PAGE_DELETED', 'Page Deleted'));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setActionState({
                loading: false,
                error: [_context3.t0.message]
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeletePage(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to control the change state
   * @param {number} id page id
   * @param {string} field name to change
   * @param {string || boolean} value
   */


  var timeout = null;

  var handleChangeState = function handleChangeState(id, field, value) {
    setEditPageId(id);

    if (field === 'name') {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        setChangeState(_objectSpread(_objectSpread({}, changeState), {}, {
          changes: _defineProperty({}, field, value)
        }));
      }, 1000);
    } else {
      setChangeState(_objectSpread(_objectSpread({}, changeState), {}, {
        changes: _defineProperty({}, field, value)
      }));
    }
  };

  var handleUpdatePageList = function handleUpdatePageList(updatedPages) {
    setPagesListState(_objectSpread(_objectSpread({}, pagesListState), {}, {
      pages: updatedPages
    }));
  };

  (0, _react.useEffect)(function () {
    if (changeState.loading || Object.keys(changeState === null || changeState === void 0 ? void 0 : changeState.changes).length === 0) return;
    handleUpdatePage();
  }, [changeState]);
  (0, _react.useEffect)(function () {
    getPages();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    pagesListState: pagesListState,
    handleChangeState: handleChangeState,
    handleUpdatePageList: handleUpdatePageList,
    handleDeletePage: handleDeletePage
  })));
};

exports.PagesList = PagesList;
PagesList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Components types before page list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after page list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before page list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after page list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PagesList.defaultProps = {
  propsToFetch: ['name', 'enabled'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};