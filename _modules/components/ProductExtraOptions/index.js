"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptions = void 0;

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

/**
 * Component to manage product extras behavior without UI component
 */
var ProductExtraOptions = function ProductExtraOptions(props) {
  var UIComponent = props.UIComponent,
      business = props.business,
      extra = props.extra,
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
    extra: extra,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      extraState = _useState2[0],
      setExtraState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    changes: {},
    result: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      changesState = _useState4[0],
      setChangesState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      editOptionId = _useState6[0],
      setEditOptionId = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      editErrors = _useState8[0],
      setEditErrors = _useState8[1];

  var _useState9 = (0, _react.useState)({
    conditioned: false,
    enabled: true,
    min: 1,
    max: 1
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      addChangesState = _useState10[0],
      setAddChangesState = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      curOption = _useState12[0],
      setCurOption = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      openModal = _useState14[0],
      setOpenModal = _useState14[1];
  /**
   * Clean changesState
   */


  var cleanChangesState = function cleanChangesState(values) {
    return setChangesState(_objectSpread({}, values));
  };
  /**
   * Method to open the modal
   */


  var handleOpenModal = function handleOpenModal(option, name) {
    cleanChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: {}
    }));
    setCurOption(option);
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, _defineProperty({}, name, true)));
  };
  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   * @param {Number} optionId
   */


  var handleChangeInput = function handleChangeInput(e, optionId) {
    if (optionId === editOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    } else {
      setEditOptionId(optionId);
      setChangesState({
        result: {},
        changes: _defineProperty({}, e.target.name, e.target.value)
      });
    }
  };
  /**
   * Method to change the option enabled state
   * @param {Boolean} enabled
   */


  var handleChangeOptionEnable = function handleChangeOptionEnable(enabled, optionId) {
    if (optionId === editOptionId) {
      setChangesState({
        result: {},
        changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
          enabled: enabled
        })
      });
    } else {
      setEditOptionId(optionId);
      setChangesState({
        result: {},
        changes: {
          enabled: enabled
        }
      });
    }
  };
  /**
   * Method to change the option input
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeAddOption = function handleChangeAddOption(e) {
    setAddChangesState(_objectSpread(_objectSpread({}, addChangesState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */


  var handleChangeImage = function handleChangeImage(file, optionId) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    if (optionId === editOptionId) {
      reader.onload = function () {
        setChangesState({
          result: {},
          changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
            image: reader.result
          })
        });
      };
    } else {
      setEditOptionId(optionId);

      reader.onload = function () {
        setChangesState({
          result: {},
          changes: {
            image: reader.result
          }
        });
      };
    }

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Method to change the add option enabled state
   * @param {Boolean} enabled
   */


  var handleChangeAddOptionEnable = function handleChangeAddOptionEnable(enabled) {
    setAddChangesState(_objectSpread(_objectSpread({}, addChangesState), {}, {
      enabled: enabled
    }));
  };

  var handleSuccessUpdateBusiness = function handleSuccessUpdateBusiness(updatedExtra) {
    if (handleUpdateBusinessState) {
      var updatedExtras = business.extras.filter(function (extra) {
        if (extra.id === updatedExtra.id) {
          Object.assign(extra, updatedExtra);
        }

        return true;
      });

      var businessState = _objectSpread(_objectSpread({}, business), {}, {
        extras: updatedExtras
      });

      var categories = businessState.categories.map(function (item) {
        var _products = item.products.map(function (prod) {
          var _extras = prod.extras.filter(function (extra) {
            if (extra.id === updatedExtra.id) {
              Object.assign(extra, updatedExtra);
            }

            return true;
          });

          return _objectSpread(_objectSpread({}, prod), {}, {
            extras: _extras
          });
        });

        var _item = _objectSpread(_objectSpread({}, item), {}, {
          products: _products
        });

        return _item;
      });

      var updatedBusiness = _objectSpread(_objectSpread({}, businessState), {}, {
        categories: categories
      });

      handleUpdateBusinessState(updatedBusiness);
    }
  };
  /**
   * Method to update the option from API
   */


  var handleUpdateOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content, options, updatedExtra;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changesState === null || changesState === void 0 ? void 0 : changesState.changes)
              };
              _context.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(editOptionId), requestOptions);

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              content = _context.sent;

              if (!content.error) {
                setChangesState({
                  changes: content.error ? changesState.changes : {},
                  result: content.result
                });
                options = extraState.extra.options.filter(function (option) {
                  if (option.id === content.result.id) {
                    Object.assign(option, content.result);
                  }

                  return true;
                });
                updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                  options: options
                });
                setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                  loading: false,
                  extra: updatedExtra
                }));
                handleSuccessUpdateBusiness(updatedExtra);
                showToast(_ToastContext.ToastType.Success, t('OPTION_SAVED', 'Option saved'));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function handleUpdateOption() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to save the new product extra option from API
   */


  var handleAddOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, response, content, options, updatedExtra;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(addChangesState)
              };
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options"), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              content = _context2.sent;

              if (!content.error) {
                setAddChangesState({
                  conditioned: false,
                  enabled: true,
                  min: 1,
                  max: 1
                });
                if (extraState.extra.options) options = [].concat(_toConsumableArray(extraState.extra.options), [_objectSpread(_objectSpread({}, content.result), {}, {
                  suboptions: []
                })]);else options = [_objectSpread(_objectSpread({}, content.result), {}, {
                  suboptions: []
                })];
                updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                  options: options
                });
                setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                  loading: false,
                  extra: updatedExtra
                }));
                handleSuccessUpdateBusiness(updatedExtra);
                showToast(_ToastContext.ToastType.Success, t('OPTION_ADDED', 'Option added'));
                handleOpenModal(_objectSpread(_objectSpread({}, content.result), {}, {
                  suboptions: []
                }), 'edit');
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
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

    return function handleAddOption() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the extra
   * @param {Number} optionId
   */


  var handleDeteteOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(optionId) {
      var requestOptions, response, content, options, updatedExtra;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
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
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id, "/options/").concat(optionId), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                options = extraState.extra.options.filter(function (option) {
                  return option.id !== optionId;
                });
                updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
                  options: options
                });
                setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                  loading: false,
                  extra: updatedExtra
                }));
                handleSuccessUpdateBusiness(updatedExtra);
                showToast(_ToastContext.ToastType.Success, t('OPTION_DELETED', 'Option deleted'));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
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

    return function handleDeteteOption(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete the extra
   */


  var handleDeleteExtra = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var requestOptions, response, content, extras, businessState, categories, updatedBusiness;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
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
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extra.id), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                extras = business.extras.filter(function (_extra) {
                  return _extra.id !== extra.id;
                });

                if (handleUpdateBusinessState) {
                  businessState = _objectSpread(_objectSpread({}, business), {}, {
                    extras: extras
                  });
                  categories = businessState.categories.map(function (item) {
                    var _products = item.products.map(function (prod) {
                      var _extras = prod.extras.filter(function (_extra) {
                        return _extra.id !== extra.id;
                      });

                      return _objectSpread(_objectSpread({}, prod), {}, {
                        extras: _extras
                      });
                    });

                    var _item = _objectSpread(_objectSpread({}, item), {}, {
                      products: _products
                    });

                    return _item;
                  });
                  updatedBusiness = _objectSpread(_objectSpread({}, businessState), {}, {
                    categories: categories
                  });
                  handleUpdateBusinessState(updatedBusiness);
                }

                showToast(_ToastContext.ToastType.Success, t('EXTRA_DELETED', 'Extra deleted'));
                props.onClose && props.onClose();
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleDeleteExtra() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleSucccessDeleteOption = function handleSucccessDeleteOption(optionId) {
    var options = extraState.extra.options.filter(function (option) {
      return option.id !== optionId;
    });

    var updatedExtra = _objectSpread(_objectSpread({}, extraState.extra), {}, {
      options: options
    });

    setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
      loading: false,
      extra: updatedExtra
    }));
    handleSuccessUpdateBusiness(updatedExtra);
  };

  (0, _react.useEffect)(function () {
    var _changesState$changes, _changesState$changes2, _changesState$changes3;

    if (!Object.keys(changesState.changes).length) return;

    if ((changesState === null || changesState === void 0 ? void 0 : (_changesState$changes = changesState.changes) === null || _changesState$changes === void 0 ? void 0 : _changesState$changes.name) === '' || (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.min) === '' || (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes3 = changesState.changes) === null || _changesState$changes3 === void 0 ? void 0 : _changesState$changes3.max) === '') {
      var _changesState$changes4, _changesState$changes5;

      setEditErrors({
        name: (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.name) === '',
        min: (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes5 = changesState.changes) === null || _changesState$changes5 === void 0 ? void 0 : _changesState$changes5.min) === '',
        max: (changesState === null || changesState === void 0 ? void 0 : changesState.changes.max) === ''
      });
    } else {
      handleUpdateOption();
    }
  }, [changesState]);
  (0, _react.useEffect)(function () {
    setChangesState({
      changes: {},
      result: {}
    });
    setExtraState(_objectSpread(_objectSpread({}, extraState), {}, {
      extra: extra
    }));
  }, [extra]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    editErrors: editErrors,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    extraState: extraState,
    editOptionId: editOptionId,
    addChangesState: addChangesState,
    cleanEditErrors: function cleanEditErrors() {
      return setEditErrors({});
    },
    handleChangeImage: handleChangeImage,
    handleChangeInput: handleChangeInput,
    handleChangeOptionEnable: handleChangeOptionEnable,
    handleAddOption: handleAddOption,
    handleChangeAddOption: handleChangeAddOption,
    handleChangeAddOptionEnable: handleChangeAddOptionEnable,
    handleDeteteOption: handleDeteteOption,
    handleDeleteExtra: handleDeleteExtra,
    handleSucccessDeleteOption: handleSucccessDeleteOption,
    curOption: curOption,
    openModal: openModal,
    setCurOption: setCurOption,
    setOpenModal: setOpenModal,
    handleOpenModal: handleOpenModal
  })));
};

exports.ProductExtraOptions = ProductExtraOptions;
ProductExtraOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before product extra options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after product extra options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after product extra options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductExtraOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};