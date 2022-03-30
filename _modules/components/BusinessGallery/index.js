"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessGallery = void 0;

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

var BusinessGallery = function BusinessGallery(props) {
  var business = props.business,
      isVideoGallery = props.isVideoGallery,
      isImageGallery = props.isImageGallery,
      UIComponent = props.UIComponent,
      handleSucessAddBusinessGallery = props.handleSucessAddBusinessGallery,
      handleSucessDeleteBusinessGallery = props.handleSucessDeleteBusinessGallery;

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
    changes: {},
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      photos = _useState4[0],
      setPhotos = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      videos = _useState6[0],
      setVideos = _useState6[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };
  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */


  var handlechangeImage = function handlechangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          business_id: business.id,
          file: reader.result,
          type: 1
        })
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Update business video path
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeBusinessVideo = function handleChangeBusinessVideo(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        business_id: business === null || business === void 0 ? void 0 : business.id,
        type: 2,
        video: e.target.value
      })
    }));
  };
  /**
   * Method to update the business
   */


  var handleUpdateBusinessGallery = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(formState.changes)
              };
              _context.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/gallery"), requestOptions);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              content = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: content,
                loading: false
              }));

              if (!content.error) {
                if (isVideoGallery) {
                  showToast(_ToastContext.ToastType.Success, t('GALLERY_VIDEO_ADDED'));
                }

                if (isImageGallery) {
                  showToast(_ToastContext.ToastType.Success, t('GALLERY_IMAGE_ADDED'));
                }

                if (handleSucessAddBusinessGallery) {
                  handleSucessAddBusinessGallery(content.result);
                }
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function handleUpdateBusinessGallery() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the business gallery image
   */


  var handleDeleteBusinessGallery = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/gallery/").concat(id, "?business_id=").concat(business.id), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false
              }));

              if (!content.error) {
                showToast(_ToastContext.ToastType.Success, t('GALLERY_ITEM_DELETED'));
                handleSucessDeleteBusinessGallery && handleSucessDeleteBusinessGallery(id);
              }

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function handleDeleteBusinessGallery(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _business$gallery, _business$gallery2;

    var photos = business === null || business === void 0 ? void 0 : (_business$gallery = business.gallery) === null || _business$gallery === void 0 ? void 0 : _business$gallery.filter(function (item) {
      return item.file;
    });
    var videos = business === null || business === void 0 ? void 0 : (_business$gallery2 = business.gallery) === null || _business$gallery2 === void 0 ? void 0 : _business$gallery2.filter(function (item) {
      return item.video;
    });
    setPhotos(photos);
    setVideos(videos);
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessSchedule: (business === null || business === void 0 ? void 0 : business.schedule) || [],
    businessPhotos: photos || [],
    businessVideos: videos || [],
    formState: formState,
    handlechangeImage: handlechangeImage,
    cleanFormState: cleanFormState,
    handleChangeBusinessVideo: handleChangeBusinessVideo,
    handleUpdateBusinessGallery: handleUpdateBusinessGallery,
    handleDeleteBusinessGallery: handleDeleteBusinessGallery
  })));
};

exports.BusinessGallery = BusinessGallery;
BusinessGallery.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business, object with all data to render
   */
  business: _propTypes.default.object,

  /**
   * enable/disable business option of accordeon
   */
  optionToShow: _propTypes.default.string,

  /**
   * Components types before Business information
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Business information
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Business information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Business information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessGallery.defaultProps = {
  business: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};