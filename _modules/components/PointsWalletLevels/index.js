"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletLevels = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _ToastContext = require("../../contexts/ToastContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PointsWalletLevels = function PointsWalletLevels(props) {
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
    loading: false,
    levels: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      levelList = _useState2[0],
      setLevelList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null,
    changes: {}
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      editFormState = _useState6[0],
      setEditFormState = _useState6[1];
  /**
   * Update level data
   * @param {EventTarget} evt Related HTML event
   */


  var handleChangeInput = function handleChangeInput(evt) {
    var changes = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, _defineProperty({}, evt.target.name, evt.target.value));

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: changes
    }));
  };
  /**
   * Add a level
   * @param {Object || Array} level data of level
   */


  var handleAddLevelList = function handleAddLevelList(level) {
    var levels = _toConsumableArray(levelList.levels);

    levels.push(level);
    setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
      levels: levels
    }));
  };
  /**
   * Update a level
   * @param {Object || Array} result data of level
   */


  var handleUpdateLevelList = function handleUpdateLevelList(result) {
    var updatedLevels = levelList === null || levelList === void 0 ? void 0 : levelList.levels.map(function (level) {
      if (level.id === result.id) return result;else return level;
    });
    setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
      levels: updatedLevels
    }));
  };
  /**
   * Delete a level
   * @param {Object || Array} level data of level
   */


  var handleDeleteLevelList = function handleDeleteLevelList(level) {
    var _levelList$levels;

    var levels = levelList === null || levelList === void 0 ? void 0 : (_levelList$levels = levelList.levels) === null || _levelList$levels === void 0 ? void 0 : _levelList$levels.filter(function (item) {
      return item.id !== level.id;
    });
    setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
      levels: levels
    }));
  };
  /**
   * Update a level
   * @param {EventTarget} evt Related HTML event
   * @param {Number} levelId id of level
   */


  var handleUpdateLevel = function handleUpdateLevel(evt, levelId) {
    var _editFormState$change, _ref;

    var changes = levelId === (editFormState === null || editFormState === void 0 ? void 0 : (_editFormState$change = editFormState.changes) === null || _editFormState$change === void 0 ? void 0 : _editFormState$change.id) ? _objectSpread(_objectSpread({}, editFormState === null || editFormState === void 0 ? void 0 : editFormState.changes), {}, _defineProperty({}, evt.target.name, evt.target.value)) : (_ref = {}, _defineProperty(_ref, evt.target.name, evt.target.value), _defineProperty(_ref, "id", levelId), _ref);
    setEditFormState(_objectSpread(_objectSpread({}, editFormState), {}, {
      changes: changes
    }));
  };

  var handleUpdateBtnClick = function handleUpdateBtnClick() {
    var _editFormState$change2;

    updateLevel(editFormState === null || editFormState === void 0 ? void 0 : editFormState.changes, editFormState === null || editFormState === void 0 ? void 0 : (_editFormState$change2 = editFormState.changes) === null || _editFormState$change2 === void 0 ? void 0 : _editFormState$change2.id);
  };
  /**
   * Default fuction to add a level
   */


  var handleUpdateAddClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, fetchEndpoint, response, _yield$response$json, error, result;

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
              fetchEndpoint = "".concat(ordering.root, "/loyalty_levels");
              _context.next = 7;
              return fetch(fetchEndpoint, requestOptions);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('LEVEL_ADDED', 'Level added'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));
                handleAddLevelList(result);
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function handleUpdateAddClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Default fuction to delete a level
   */


  var handleUpdateDeleteClick = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
      var requestOptions, fetchEndpoint, response, _yield$response$json2, error, result;

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
              fetchEndpoint = "".concat(ordering.root, "/loyalty_levels/").concat(id);
              _context2.next = 7;
              return fetch(fetchEndpoint, requestOptions);

            case 7:
              response = _context2.sent;
              _context2.next = 10;
              return response.json();

            case 10:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                showToast(_ToastContext.ToastType.Success, t('LEVEL_DELETED', 'Level deleted'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));
                handleDeleteLevelList(result);
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function handleUpdateDeleteClick(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get level list from API
   */


  var getLevelList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, fetchEndpoint, response, _yield$response$json3, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              fetchEndpoint = "".concat(ordering.root, "/loyalty_levels");
              _context3.next = 6;
              return fetch(fetchEndpoint, requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              _yield$response$json3 = _context3.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
                  loading: false,
                  error: null,
                  levels: result
                }));
              } else {
                setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context3.next = 18;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              setLevelList(_objectSpread(_objectSpread({}, levelList), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15]]);
    }));

    return function getLevelList() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Function to update a webhook
   */


  var updateLevel = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(changes, id) {
      var requestOptions, response, _yield$response$json4, error, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setEditFormState(_objectSpread(_objectSpread({}, editFormState), {}, {
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
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/loyalty_levels/").concat(id), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              _yield$response$json4 = _context4.sent;
              error = _yield$response$json4.error;
              result = _yield$response$json4.result;

              if (!error) {
                setEditFormState({
                  changes: {},
                  loading: false,
                  error: null
                });
                handleUpdateLevelList(result);
                showToast(_ToastContext.ToastType.Success, t('LEVEL_UPDATED', 'Level updated'));
              } else {
                setEditFormState(_objectSpread(_objectSpread({}, editFormState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context4.next = 18;
              break;

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              setEditFormState(_objectSpread(_objectSpread({}, editFormState), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 15]]);
    }));

    return function updateLevel(_x2, _x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getLevelList();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    levelList: levelList,
    formState: formState,
    editFormState: editFormState,
    handleChangeInput: handleChangeInput,
    handleUpdateAddClick: handleUpdateAddClick,
    handleUpdateDeleteClick: handleUpdateDeleteClick,
    handleUpdateLevel: handleUpdateLevel,
    handleUpdateBtnClick: handleUpdateBtnClick
  })));
};

exports.PointsWalletLevels = PointsWalletLevels;
PointsWalletLevels.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PointsWalletLevels.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};