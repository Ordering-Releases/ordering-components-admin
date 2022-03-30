"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImporterListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var ImporterListing = function ImporterListing(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState = (0, _react.useState)({
    loading: false,
    error: null,
    importers: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      importerList = _useState2[0],
      setImporterList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationProps = _useState4[0],
      setPaginationProps = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      paginationDetail = _useState6[0],
      setPaginationDetail = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionStatus = _useState8[0],
      setActionStatus = _useState8[1];

  var getImporters = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page, pageSize) {
      var requestOptions, response, _yield$response$json, result, pagination, nextPageItems, remainingItems;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setImporterList(_objectSpread(_objectSpread({}, importerList), {}, {
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
              return fetch("".concat(ordering.root, "/importers?page=").concat(page || paginationProps.currentPage, "&page_size=").concat(pageSize || paginationProps.pageSize), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              pagination = _yield$response$json.pagination;
              setImporterList(_objectSpread(_objectSpread({}, importerList), {}, {
                loading: false,
                importers: result
              }));
              nextPageItems = 0;

              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - importerList.importers.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }

              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                from: pagination.from,
                to: pagination.to,
                nextPageItems: nextPageItems
              }));
              setPaginationDetail(_objectSpread({}, pagination));
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setImporterList(_objectSpread(_objectSpread({}, importerList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    return function getImporters(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDeleteImporter = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(importerId) {
      var requestOptions, response, content, importers;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/importers/").concat(importerId), requestOptions);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              content = _context2.sent;

              if (!content.error) {
                importers = importerList.importers.filter(function (importer) {
                  return importer.id !== importerId;
                });
                setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
                  totalPages: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.totalPages) - 1,
                  totalItems: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.totalItems) - 1
                }));
                setImporterList(_objectSpread(_objectSpread({}, importerList), {}, {
                  importers: importers
                }));
              }

              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: content.error ? content.result : null
              }));
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function handleDeleteImporter(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
  * Method to add user
  * @param {Object} newImporter new user to add
  */


  var handleSuccessAddImporter = function handleSuccessAddImporter(newImporter) {
    setImporterList(_objectSpread(_objectSpread({}, importerList), {}, {
      importers: [].concat(_toConsumableArray(importerList.importers), [newImporter])
    }));
    setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
      total: paginationDetail !== null && paginationDetail !== void 0 && paginationDetail.total ? (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) + 1 : 1
    }));
  };
  /**
  * Method to update importers
  * @param {Object} updatedImporter updated importer
  */


  var handleSuccessUpdateImporter = function handleSuccessUpdateImporter(updatedImporter) {
    var importers = importerList.importers.map(function (importer) {
      if (importer.id === updatedImporter.id) {
        return updatedImporter;
      }

      return importer;
    });
    setImporterList(_objectSpread(_objectSpread({}, importerList), {}, {
      importers: importers
    }));
  };

  (0, _react.useEffect)(function () {
    getImporters(1, null);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    importerList: importerList,
    getImporters: getImporters,
    paginationProps: paginationProps,
    paginationDetail: paginationDetail,
    handleDeleteImporter: handleDeleteImporter,
    handleSuccessAddImporter: handleSuccessAddImporter,
    handleSuccessUpdateImporter: handleSuccessUpdateImporter
  })));
};

exports.ImporterListing = ImporterListing;
ImporterListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Slug from Store
   */
  slug: _propTypes.default.string,

  /**
   * True, flag to make initial API call
   */
  isInitialRender: _propTypes.default.bool
};
ImporterListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};