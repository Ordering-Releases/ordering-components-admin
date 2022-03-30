"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageForm = void 0;

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

var PageForm = function PageForm(props) {
  var UIComponent = props.UIComponent,
      pageId = props.pageId,
      pageList = props.pageList,
      handleSuccessUpdate = props.handleSuccessUpdate,
      handleCancel = props.handleCancel;

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
    page: {},
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pageState = _useState2[0],
      setPageState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    images: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      imageListState = _useState4[0],
      setImageListState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    change: {},
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      insertImageState = _useState6[0],
      setInsertImageState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionState = _useState8[0],
      setActionState = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      formState = _useState10[0],
      setFormState = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedImageUrl = _useState12[0],
      setSelectedImageUrl = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      isAddMode = _useState14[0],
      setIsAddMode = _useState14[1];
  /**
   * Method to get the pages from API
   */


  var getPage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setPageState(_objectSpread(_objectSpread({}, pageState), {}, {
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
              return fetch("".concat(ordering.root, "/pages/").concat(pageId), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setPageState({
                  page: content.result,
                  loading: false
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setPageState(_objectSpread(_objectSpread({}, pageState), {}, {
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

    return function getPage() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get the image files from API
   */


  var getImages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setImageListState(_objectSpread(_objectSpread({}, imageListState), {}, {
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
              return fetch("".concat(ordering.root, "/files?where={%22type%22:1}"), requestOptions);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              content = _context2.sent;

              if (!content.error) {
                setImageListState({
                  images: content.result,
                  loading: false
                });
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setImageListState(_objectSpread(_objectSpread({}, imageListState), {}, {
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

    return function getImages() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to add new image to gallery
   */


  var handleAddImage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, response, content, _content$result, _images;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setInsertImageState(_objectSpread(_objectSpread({}, insertImageState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(insertImageState.change)
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/files"), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                setInsertImageState({
                  loading: false,
                  change: {},
                  error: null
                });
                _images = [].concat(_toConsumableArray(imageListState.images), [content.result]);
                setImageListState(_objectSpread(_objectSpread({}, imageListState), {}, {
                  images: _images
                }));
                showToast(_ToastContext.ToastType.Success, t('GALLERY_IMAGE_ADDED', 'Business gallery image added'));
                setSelectedImageUrl(content === null || content === void 0 ? void 0 : (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.source);
              } else {
                setInsertImageState(_objectSpread(_objectSpread({}, insertImageState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setInsertImageState(_objectSpread(_objectSpread({}, insertImageState), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleAddImage() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the image of gallery
   */


  var handleDeleteImage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(imageId) {
      var requestOptions, response, content, _images;

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
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/files/").concat(imageId), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                setActionState({
                  loading: false,
                  error: null
                });
                _images = imageListState.images.filter(function (image) {
                  return image.id !== imageId;
                });
                setImageListState(_objectSpread(_objectSpread({}, imageListState), {}, {
                  images: _images
                }));
                showToast(_ToastContext.ToastType.Success, t('FILE_DELETED', 'File deleted'));
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

    return function handleDeleteImage(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to save the page from API
   */


  var handleSavePage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var _changes, changes, key, requestOptions, response, content, updatedPages;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _changes = _objectSpread({}, formState.changes);
              changes = {};

              for (key in _changes) {
                if (_changes[key] !== '') {
                  changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
                }
              }

              if (!(Object.keys(changes).length === 0)) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return");

            case 6:
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context5.next = 11;
              return fetch("".concat(ordering.root, "/pages/").concat(pageId), requestOptions);

            case 11:
              response = _context5.sent;
              _context5.next = 14;
              return response.json();

            case 14:
              content = _context5.sent;

              if (!content.error) {
                if (handleSuccessUpdate) {
                  updatedPages = pageList.filter(function (page) {
                    if (page.id === pageId) {
                      var _formState$changes, _formState$changes2, _formState$changes$en, _formState$changes3;

                      page.name = (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.name ? (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name : page === null || page === void 0 ? void 0 : page.name;
                      page.enabled = (_formState$changes$en = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.enabled) !== null && _formState$changes$en !== void 0 ? _formState$changes$en : page === null || page === void 0 ? void 0 : page.enabled;
                    }

                    return page;
                  });
                  handleSuccessUpdate(updatedPages);
                }

                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: {},
                  loading: false,
                  error: null
                }));
                showToast(_ToastContext.ToastType.Success, t('PAGE_SAVED', 'Page Saved'));
              } else {
                setFormState({
                  loading: false,
                  error: content.result
                });
              }

              _context5.next = 21;
              break;

            case 18:
              _context5.prev = 18;
              _context5.t0 = _context5["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 18]]);
    }));

    return function handleSavePage() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to add new page from API
   */


  var handleAddPage = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var _changes2, _changes, changes, key, requestOptions, response, content, updatedPages;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _changes = _objectSpread({}, formState.changes);
              changes = {};

              for (key in _changes) {
                if (_changes[key] !== '') {
                  changes = _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, key, _changes[key]));
                }
              }

              if (!(Object.keys(changes).length === 0)) {
                _context6.next = 6;
                break;
              }

              return _context6.abrupt("return");

            case 6:
              changes.enabled = true;

              if (!((_changes2 = changes) !== null && _changes2 !== void 0 && _changes2.body)) {
                changes.body = '<p><br></p>';
              }

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
                body: JSON.stringify(changes)
              };
              _context6.next = 13;
              return fetch("".concat(ordering.root, "/pages"), requestOptions);

            case 13:
              response = _context6.sent;
              _context6.next = 16;
              return response.json();

            case 16:
              content = _context6.sent;

              if (!content.error) {
                if (handleSuccessUpdate) {
                  updatedPages = [].concat(_toConsumableArray(pageList), [content.result]);
                  handleSuccessUpdate(updatedPages);
                }

                handleCancel && handleCancel();
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: {},
                  loading: false,
                  error: null
                }));
                showToast(_ToastContext.ToastType.Success, t('PAGE_ADDED', 'Page Added'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context6.next = 23;
              break;

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context6.t0.message]
              }));

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 20]]);
    }));

    return function handleAddPage() {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleInsertImage = function handleInsertImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setInsertImageState(_objectSpread(_objectSpread({}, insertImageState), {}, {
        change: {
          source: reader.result,
          type: 1
        }
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  var handleChangeFormState = function handleChangeFormState(field, value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, field, value))
    }));
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(insertImageState.change).length === 0) return;
    handleAddImage();
  }, [insertImageState.change]);
  (0, _react.useEffect)(function () {
    getImages();

    if (pageId) {
      getPage();
      setIsAddMode(false);
    } else {
      setIsAddMode(true);
    }
  }, [pageId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: isAddMode,
    pageState: pageState,
    imageListState: imageListState,
    insertImageState: insertImageState,
    formState: formState,
    selectedImageUrl: selectedImageUrl,
    setSelectedImageUrl: setSelectedImageUrl,
    handleInsertImage: handleInsertImage,
    handleDeleteImage: handleDeleteImage,
    handleChangeFormState: handleChangeFormState,
    handleSavePage: handleSavePage,
    handleAddPage: handleAddPage
  })));
};

exports.PageForm = PageForm;
PageForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before page form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after page form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before page form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after page form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PageForm.defaultProps = {
  propsToFetch: ['name', 'enabled'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};