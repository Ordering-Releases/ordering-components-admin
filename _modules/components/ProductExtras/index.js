"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtras = void 0;

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

/**
 * Component to manage product extras behavior without UI component
 */
var ProductExtras = function ProductExtras(props) {
  var business = props.business,
      UIComponent = props.UIComponent,
      product = props.product,
      handleSuccessUpdate = props.handleSuccessUpdate,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

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
    product: product,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      productState = _useState2[0],
      setProductState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    extras: business === null || business === void 0 ? void 0 : business.extras,
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      extrasState = _useState4[0],
      setExtrasState = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      changesState = _useState6[0],
      setChangesState = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isAddMode = _useState8[0],
      setIsAddMode = _useState8[1];
  /**
   * Method to save the new ingredient from API
   * @param {Array} extraIds
   */


  var handleProductExtraState = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(extraIds) {
      var changes, requestOptions, response, content, extras, updatedProduct;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              changes = {
                business_id: business === null || business === void 0 ? void 0 : business.id,
                category_id: product === null || product === void 0 ? void 0 : product.category_id,
                product_id: product === null || product === void 0 ? void 0 : product.id,
                extras: JSON.stringify(extraIds)
              };
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
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
              _context.next = 7;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(product === null || product === void 0 ? void 0 : product.category_id, "/products/").concat(product.id), requestOptions);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              content = _context.sent;

              if (!content.error) {
                extras = extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras.filter(function (extra) {
                  return extraIds.includes(extra.id);
                });
                updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                  extras: extras
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  loading: false,
                  product: updatedProduct
                }));
                handleSuccessUpdate && handleSuccessUpdate(updatedProduct); // updateBusinessState(updatedProduct, business)

                showToast(_ToastContext.ToastType.Success, t('EXTRA_SAVED', 'Extra saved'));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function handleProductExtraState(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to save the new ingredient from API
   * @param {Number} extraId
   * @param {Object} params updated parameters
   */


  var handleUpdateExtraState = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(extraId, params) {
      var requestOptions, response, content, extras, productExtras, updatedProduct;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(params)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extraId), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                extras = extrasState.extras.filter(function (extra) {
                  if (extra.id === content.result.id) {
                    Object.assign(extra, content.result);
                  }

                  return true;
                });
                setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                  loading: false,
                  extras: extras
                }));
                productExtras = productState.product.extras.filter(function (extra) {
                  if (extra.id === content.result.id) {
                    Object.assign(extra, content.result);
                  }

                  return true;
                });
                updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                  extras: productExtras
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  product: updatedProduct
                }));
                handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
                showToast(_ToastContext.ToastType.Success, t('EXTRA_SAVED', 'Extra saved'));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function handleUpdateExtraState(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to change the extra name
   * @param {EventTarget} e Related HTML event
   * @param {Number} extraId extra id to change
   */


  var handleChangeExtraInput = function handleChangeExtraInput(e, extraId) {
    var params = {
      name: e.target.value
    };
    handleUpdateExtraState(extraId, params);
  };
  /**
   * Method to delete the extra
   * @param {Number} extraId
   */


  var handleDeteteExtra = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(extraId) {
      var requestOptions, response, content, extras, productExtras, updatedProduct;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
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
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extraId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                extras = extrasState.extras.filter(function (extra) {
                  return extra.id !== extraId;
                });
                setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                  loading: false,
                  extras: extras
                }));
                productExtras = productState.product.extras.filter(function (extra) {
                  return extra.id !== extraId;
                });
                updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
                  extras: productExtras
                });
                setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                  product: updatedProduct
                }));
                handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
                showToast(_ToastContext.ToastType.Success, t('EXTRA_DELETED', 'Extra deleted'));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeteteExtra(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to change the add extra input
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeAddExtraInput = function handleChangeAddExtraInput(e) {
    setChangesState({
      name: e.target.value
    });
  };
  /**
   * Method to save the new ingredient from API
   */


  var handleAddExtra = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var changes, requestOptions, response, content, extras, updatedBusiness;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(Object.keys(changesState).length === 0)) {
                _context4.next = 3;
                break;
              }

              setIsAddMode(false);
              return _context4.abrupt("return");

            case 3:
              _context4.prev = 3;
              changes = _objectSpread({
                business_id: business === null || business === void 0 ? void 0 : business.id
              }, changesState);
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
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
              _context4.next = 10;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras"), requestOptions);

            case 10:
              response = _context4.sent;
              _context4.next = 13;
              return response.json();

            case 13:
              content = _context4.sent;

              if (!content.error) {
                setChangesState({});
                setIsAddMode(false);
                extras = [].concat(_toConsumableArray(extrasState.extras), [content.result]);
                setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                  loading: false,
                  extras: extras
                }));

                if (handleUpdateBusinessState) {
                  updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                    extras: extras
                  });
                  handleUpdateBusinessState(updatedBusiness);
                }

                showToast(_ToastContext.ToastType.Success, t('EXTRA_ADDED', 'Extra added'));
              }

              _context4.next = 20;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](3);
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 17]]);
    }));

    return function handleAddExtra() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: product
    }));
  }, [product]);
  (0, _react.useEffect)(function () {
    setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
      extras: business === null || business === void 0 ? void 0 : business.extras
    }));
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    changesState: changesState,
    isAddMode: isAddMode,
    productState: productState,
    extrasState: extrasState,
    handleChangeExtraInput: handleChangeExtraInput,
    handleDeteteExtra: handleDeteteExtra,
    handleOpenAddForm: function handleOpenAddForm() {
      return setIsAddMode(true);
    },
    handleAddExtra: handleAddExtra,
    handleChangeAddExtraInput: handleChangeAddExtraInput,
    handleProductExtraState: handleProductExtraState
  })));
};

exports.ProductExtras = ProductExtras;
ProductExtras.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product extras
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product extras
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product extras
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product extras
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductExtras.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};