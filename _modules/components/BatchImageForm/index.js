"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchImageForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LanguageContext = require("../../contexts/LanguageContext");

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

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

var BatchImageForm = function BatchImageForm(props) {
  var categorySelected = props.categorySelected,
      businessState = props.businessState,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      UIComponent = props.UIComponent;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      loading = _useSession2[0].loading;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var business = businessState.business;

  var _useState3 = (0, _react.useState)({
    photos: [],
    loading: false,
    result: {
      error: null
    },
    API: false,
    endPoint: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      images = _useState6[0],
      setImages = _useState6[1];
  /**
  * Clean formState
  */


  var cleanFormState = function cleanFormState() {
    return setFormState({
      photos: [],
      loading: false,
      result: {
        error: null
      },
      API: false
    });
  };
  /**
   * Method to edit a product
   */


  var editProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(product, params) {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result, _formState$photos, _categories, photos;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                API: false
              }));
              _context.next = 7;
              return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(parseInt(product === null || product === void 0 ? void 0 : product.category_id)).products(product === null || product === void 0 ? void 0 : product.id).save(params);

            case 7:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (!error) {
                if (handleUpdateBusinessState) {
                  _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);

                  _categories.forEach(function iterate(category) {
                    if (category.id === (product === null || product === void 0 ? void 0 : product.category_id)) {
                      var _products = category.products.map(function (_product) {
                        if (_product.id === product.id) {
                          return _objectSpread(_objectSpread({}, _product), params);
                        }

                        return _product;
                      });

                      category.products = _toConsumableArray(_products);
                    }

                    Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                  });

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
                    categories: _categories
                  }));
                }

                photos = formState === null || formState === void 0 ? void 0 : (_formState$photos = formState.photos) === null || _formState$photos === void 0 ? void 0 : _formState$photos.filter(function (photo) {
                  return (photo === null || photo === void 0 ? void 0 : photo.name) !== (result === null || result === void 0 ? void 0 : result.id);
                });

                if (photos.length > 0) {
                  setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                    photos: photos,
                    API: true
                  }));
                } else {
                  setFormState({
                    loading: false,
                    photos: [],
                    result: {
                      error: false,
                      result: 'all product updated'
                    },
                    API: false,
                    endPoint: true
                  });
                }

                showToast(_ToastContext.ToastType.Success, t('PRODUCT_UPDATE', 'Products updated'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context.t0
                }
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));

    return function editProduct(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Upload product photo data
   * @param {File} file Image to change user photo
   */


  var fileToDataUri = function fileToDataUri(image) {
    // eslint-disable-next-line promise/param-names
    return new Promise(function (res) {
      var reader = new FileReader();
      var type = image.type,
          name = image.name,
          size = image.size;
      reader.addEventListener('load', function () {
        res({
          base64: reader.result,
          name: parseInt(name.split('.')[0]),
          type: type,
          size: size
        });
      });
      reader.readAsDataURL(image);
    });
  };

  var handleUploadImages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(files) {
      var newImagesPromises, i, newImages;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newImagesPromises = [];

              for (i = 0; i < files.length; i++) {
                newImagesPromises.push(fileToDataUri(files[i]));
              }

              _context2.next = 4;
              return Promise.all(newImagesPromises);

            case 4:
              newImages = _context2.sent;
              setImages([].concat(_toConsumableArray(images), _toConsumableArray(newImages)));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleUploadImages(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      photos: images
    }));
  }, [images]);
  /**
  * Save Product
  */

  var updateProduct = function updateProduct() {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      API: true,
      loading: true
    }));
  };

  (0, _react.useEffect)(function () {
    if (categorySelected && categorySelected !== null && categorySelected !== void 0 && categorySelected.products && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.products.length) > 0) {
      setProducts(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.products);
    }
  }, [categorySelected]);
  (0, _react.useEffect)(function () {
    var _formState$photos2;

    if (formState !== null && formState !== void 0 && formState.API && (formState === null || formState === void 0 ? void 0 : (_formState$photos2 = formState.photos) === null || _formState$photos2 === void 0 ? void 0 : _formState$photos2.length) > 0) {
      var _photo = formState === null || formState === void 0 ? void 0 : formState.photos[0];

      var params = {
        images: _photo === null || _photo === void 0 ? void 0 : _photo.base64
      };
      var product = products.find(function (product) {
        return (_photo === null || _photo === void 0 ? void 0 : _photo.name) === (product === null || product === void 0 ? void 0 : product.id);
      });
      editProduct(product, params);
    }

    if (formState !== null && formState !== void 0 && formState.API && (formState === null || formState === void 0 ? void 0 : formState.photos.length) === 0) {
      cleanFormState();
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.API]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleUploadImages: handleUploadImages,
    cleanFormState: cleanFormState,
    updateProduct: updateProduct,
    formState: formState,
    products: products
  })));
};

exports.BatchImageForm = BatchImageForm;
BatchImageForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before business promotion form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after business promotion form
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before business promotion form
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after business promotion form
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BatchImageForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};