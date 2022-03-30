"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversCompaniesList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

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

var DriversCompaniesList = function DriversCompaniesList(props) {
  var UIComponent = props.UIComponent;

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
    companies: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      driversCompaniesState = _useState2[0],
      setDriversCompaniesState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      actionState = _useState4[0],
      setActionState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openDetails = _useState6[0],
      setOpenDetails = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedCompanyList = _useState8[0],
      setSelectedCompanyList = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      startSeveralDeleteStart = _useState10[0],
      setStartSeveralDeleteStart = _useState10[1];
  /**
   * Method to get the drivers companies from API
   */


  var getDriversCompanies = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setDriversCompaniesState(_objectSpread(_objectSpread({}, driversCompaniesState), {}, {
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
              return fetch("".concat(ordering.root, "/driver_companies"), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setDriversCompaniesState(_objectSpread(_objectSpread({}, driversCompaniesState), {}, {
                  companies: content.result,
                  loading: false
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setDriversCompaniesState(_objectSpread(_objectSpread({}, driversCompaniesState), {}, {
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

    return function getDriversCompanies() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update the selected drivers company from API
   * @param {Number} driverCompanyId
   */


  var handleUpdateDriversCompany = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(driverCompanyId, changes) {
      var requestOptions, response, content, companies;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/driver_companies/").concat(driverCompanyId), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                companies = driversCompaniesState.companies.filter(function (company) {
                  if (company.id === driverCompanyId) {
                    Object.assign(company, content.result);
                  }

                  return true;
                });
                setDriversCompaniesState(_objectSpread(_objectSpread({}, driversCompaniesState), {}, {
                  companies: companies
                }));
                showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setActionState({
                loading: false,
                error: [_context2.t0.message]
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function handleUpdateDriversCompany(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the selected drivers company from API
   * @param {Number} driverCompanyId
   */


  var handleDeleteDriversCompany = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(driverCompanyId) {
      var requestOptions, response, content, companies, companyList;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/driver_companies/").concat(driverCompanyId), requestOptions);

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
                companies = driversCompaniesState.companies.filter(function (company) {
                  return company.id !== driverCompanyId;
                });
                setDriversCompaniesState(_objectSpread(_objectSpread({}, driversCompaniesState), {}, {
                  companies: companies
                }));
                showToast(_ToastContext.ToastType.Success, t('DRIVER_COMPANY_DELETED', 'Driver company deleted'));

                if (startSeveralDeleteStart) {
                  companyList = _toConsumableArray(selectedCompanyList);
                  companyList.shift();

                  if (companyList.length === 0) {
                    setStartSeveralDeleteStart(false);
                  }

                  setSelectedCompanyList(companyList);
                }
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
                setStartSeveralDeleteStart(false);
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

    return function handleDeleteDriversCompany(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSelectCompany = function handleSelectCompany(driversCompanyId) {
    var ids = [];

    if (selectedCompanyList.includes(driversCompanyId)) {
      ids = selectedCompanyList.filter(function (id) {
        return id !== driversCompanyId;
      });
    } else {
      ids = [].concat(_toConsumableArray(selectedCompanyList), [driversCompanyId]);
    }

    setSelectedCompanyList(ids);
  };

  var handleAllSelectCompany = function handleAllSelectCompany() {
    var allIds = driversCompaniesState.companies.reduce(function (ids, company) {
      return [].concat(_toConsumableArray(ids), [company.id]);
    }, []);

    if (selectedCompanyList.length === allIds.length) {
      setSelectedCompanyList([]);
    } else {
      setSelectedCompanyList(allIds);
    }
  };

  (0, _react.useEffect)(function () {
    if (!startSeveralDeleteStart || selectedCompanyList.length === 0) return;
    handleDeleteDriversCompany(selectedCompanyList[0]);
  }, [selectedCompanyList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    getDriversCompanies();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversCompaniesState: driversCompaniesState,
    setDriversCompaniesState: setDriversCompaniesState,
    actionState: actionState,
    openDetails: openDetails,
    setOpenDetails: setOpenDetails,
    handleUpdateDriversCompany: handleUpdateDriversCompany,
    handleDeleteDriversCompany: handleDeleteDriversCompany,
    handleSelectCompany: handleSelectCompany,
    selectedCompanyList: selectedCompanyList,
    handleAllSelectCompany: handleAllSelectCompany,
    handleDeleteSelectedCompanies: function handleDeleteSelectedCompanies() {
      return setStartSeveralDeleteStart(true);
    }
  })));
};

exports.DriversCompaniesList = DriversCompaniesList;
DriversCompaniesList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before drivers companies list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after drivers companies list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before drivers companies list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after drivers companies list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversCompaniesList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};