"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuOptions = void 0;

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var BusinessMenuOptions = function BusinessMenuOptions(props) {
  var business = props.business,
      menu = props.menu,
      UIComponent = props.UIComponent,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      isSelectedSharedMenus = props.isSelectedSharedMenus,
      sitesState = props.sitesState;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    loading: false,
    error: null,
    menu: menu || {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessMenuState = _useState2[0],
      setBusinessMenuState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      orderTypeState = _useState6[0],
      setOrderTypeSate = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedProductsIds = _useState8[0],
      setSelectedProductsIds = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedProducts = _useState10[0],
      setSelectedProducts = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      subCategoriesList = _useState12[0],
      setSubCategoriesList = _useState12[1];
  /**
   * Update business menu name and comment
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _defineProperty({}, e.target.name, e.target.value);

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Method to contol order type selection
   * @param {String} orderType params key of order type
   */


  var handleCheckOrderType = function handleCheckOrderType(orderType) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, orderType, !orderTypeState[orderType]))
    }));
    setOrderTypeSate(_objectSpread(_objectSpread({}, orderTypeState), {}, _defineProperty({}, orderType, !orderTypeState[orderType])));
  };
  /**
   * Method to update the busienss menu option from API
   */


  var handleUpdateBusinessMenuOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var changes, key, requestOptions, response, content, _business;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                result: {
                  error: false
                }
              }));
              changes = _objectSpread({}, formState.changes);

              for (key in changes) {
                if (_typeof(changes[key]) === 'object' && changes[key] !== null || Array.isArray(changes[key])) {
                  changes[key] = JSON.stringify(changes[key]);
                }
              }

              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 8;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menu === null || menu === void 0 ? void 0 : menu.id), requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              content = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: {
                  error: content.error,
                  result: content.result
                },
                loading: false
              }));

              if (!content.error) {
                _business = _objectSpread({}, business);

                _business.menus.filter(function (menu) {
                  if (menu.id === content.result.id) {
                    Object.assign(menu, content.result);
                    var isUpdatedProducts = typeof (changes === null || changes === void 0 ? void 0 : changes.products) !== 'undefined';

                    if (isUpdatedProducts) {
                      menu.products = _toConsumableArray(selectedProducts);
                    }
                  }

                  return true;
                });

                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('MENU_SAVED', 'Products catalog saved'));
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context.t0.message
                }
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function handleUpdateBusinessMenuOption() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to add the busienss menu option from API
   */


  var handleAddBusinessMenuOption = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var changes, schedule, i, requestOptions, response, content, _business, _menu, allProducts, products;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                result: {
                  error: false
                }
              }));
              changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);

              if (changes !== null && changes !== void 0 && changes.products) {
                changes.products = JSON.stringify(changes === null || changes === void 0 ? void 0 : changes.products);
              }

              if (changes !== null && changes !== void 0 && changes.schedule) {
                changes.schedule = JSON.stringify(changes === null || changes === void 0 ? void 0 : changes.schedule);
              } else {
                schedule = [];

                for (i = 0; i < 7; i++) {
                  schedule.push({
                    enabled: true,
                    lapses: [{
                      open: {
                        hour: 0,
                        minute: 0
                      },
                      close: {
                        hour: 23,
                        minute: 45
                      }
                    }]
                  });
                }

                changes.schedule = JSON.stringify(schedule);
              }

              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 9;
              return fetch("".concat(ordering.root, "/business/").concat(business.id, "/menus"), requestOptions);

            case 9:
              response = _context2.sent;
              _context2.next = 12;
              return response.json();

            case 12:
              content = _context2.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.error ? formState.changes : {},
                result: {
                  error: content.error,
                  result: content.result
                },
                loading: false
              }));

              if (!content.error) {
                _business = _objectSpread({}, business);
                _menu = _objectSpread(_objectSpread({}, content.result), {}, {
                  enabled: true
                });
                allProducts = [];
                business.categories.forEach(function iterate(category) {
                  allProducts = [].concat(_toConsumableArray(allProducts), _toConsumableArray(category.products));
                  Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                });
                products = [];

                if (changes !== null && changes !== void 0 && changes.all_products) {
                  products = _toConsumableArray(allProducts);
                } else {
                  products = allProducts.filter(function (product) {
                    return _menu.products.includes(product.id);
                  });
                }

                _menu = _objectSpread(_objectSpread({}, _menu), {}, {
                  products: products
                });

                _business.menus.push(_menu);

                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('MENU_ADDED', 'Products catalog added'));
                props.onClose() && props.onClose();
              }

              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context2.t0.message
                }
              }));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 17]]);
    }));

    return function handleAddBusinessMenuOption() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDeleteMenu = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, endPoint, response, content, _business, menusShared, menus;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
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
              endPoint = isSelectedSharedMenus ? "".concat(ordering.root, "/business/").concat(business.id, "/menus_shared/").concat(menu.id) : "".concat(ordering.root, "/business/").concat(business.id, "/menus/").concat(menu.id);
              _context3.next = 7;
              return fetch(endPoint, requestOptions);

            case 7:
              response = _context3.sent;
              _context3.next = 10;
              return response.json();

            case 10:
              content = _context3.sent;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null
                }));
                _business = null;

                if (isSelectedSharedMenus) {
                  menusShared = business.menus_shared.filter(function (_menu) {
                    return _menu.id !== menu.id;
                  });
                  _business = _objectSpread(_objectSpread({}, business), {}, {
                    menus_shared: menusShared
                  });
                } else {
                  menus = business.menus.filter(function (_menu) {
                    return _menu.id !== menu.id;
                  });
                  _business = _objectSpread(_objectSpread({}, business), {}, {
                    menus: menus
                  });
                }

                handleUpdateBusinessState && handleUpdateBusinessState(_business);
                showToast(_ToastContext.ToastType.Success, t('MENU_DELETED', 'Products catalog deleted'));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context3.t0
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function handleDeleteMenu() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChangeScheduleState = function handleChangeScheduleState(scheduleChanges) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        schedule: scheduleChanges
      })
    }));
  };

  var handleChangeMenuSite = function handleChangeMenuSite(site) {
    var _menu$sites;

    var sites = [].concat(_toConsumableArray(menu === null || menu === void 0 ? void 0 : (_menu$sites = menu.sites) === null || _menu$sites === void 0 ? void 0 : _menu$sites.map(function (s) {
      return s.id;
    }).filter(function (s) {
      var _formState$changes$si;

      return formState.changes.sites ? (_formState$changes$si = formState.changes.sites) === null || _formState$changes$si === void 0 ? void 0 : _formState$changes$si.includes(s) : true;
    })), _toConsumableArray(formState.changes.sites || []));
    var isRemove = sites.includes(site);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        sites: isRemove ? sites.filter(function (s) {
          return s !== site;
        }) : [].concat(_toConsumableArray(sites), [site])
      })
    }));
  };

  var handleSelectAllChannels = function handleSelectAllChannels() {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        sites: sitesState === null || sitesState === void 0 ? void 0 : sitesState.sites.map(function (s) {
          return s.id;
        })
      })
    }));
  };

  var handleSelectNoneChannels = function handleSelectNoneChannels() {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        sites: []
      })
    }));
  };

  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        products: selectedProductsIds
      })
    }));
  }, [selectedProductsIds]);
  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
    setBusinessMenuState(_objectSpread(_objectSpread({}, businessMenuState), {}, {
      menu: menu || {}
    }));
    setOrderTypeSate({
      delivery: menu === null || menu === void 0 ? void 0 : menu.delivery,
      pickup: menu === null || menu === void 0 ? void 0 : menu.pickup,
      eatin: menu === null || menu === void 0 ? void 0 : menu.eatin,
      curbside: menu === null || menu === void 0 ? void 0 : menu.curbside,
      driver_thru: menu === null || menu === void 0 ? void 0 : menu.driver_thru
    });
    var _selectedProductsIds = [];

    if (Object.keys(menu).length) {
      _selectedProductsIds = menu.products.reduce(function (ids, product) {
        return [].concat(_toConsumableArray(ids), [product.id]);
      }, []);
      setSelectedProductsIds(_selectedProductsIds);
      setSelectedProducts(menu.products);
    } else {
      setSelectedProductsIds([]);
      setSelectedProducts([]);
      setOrderTypeSate({
        delivery: true,
        pickup: true,
        eatin: false,
        curbside: false,
        driver_thru: false
      });
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          delivery: true,
          pickup: true
        }
      }));
    }

    handleSetSubCategoryList(_selectedProductsIds);
  }, [menu]);

  var handleSetSubCategoryList = function handleSetSubCategoryList(_selectedProductsIds) {
    if (business !== null && business !== void 0 && business.categories.length) {
      var _subCategoriesList = [];

      var iterateCategories = function iterateCategories(categories) {
        return (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && (categories === null || categories === void 0 ? void 0 : categories.forEach(function (category) {
          var _category$subcategori;

          var productIds = [];

          var _productIds = category.products.reduce(function (ids, product) {
            return [].concat(_toConsumableArray(ids), [product.id]);
          }, []);

          productIds = [].concat(_toConsumableArray(productIds), _toConsumableArray(_productIds));

          if (category !== null && category !== void 0 && (_category$subcategori = category.subcategories) !== null && _category$subcategori !== void 0 && _category$subcategori.length) {
            category.subcategories.forEach(function iterate(category) {
              var _productIds = category.products.reduce(function (ids, product) {
                return [].concat(_toConsumableArray(ids), [product.id]);
              }, []);

              productIds = [].concat(_toConsumableArray(productIds), _toConsumableArray(_productIds));
              Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
            });
          }

          _subCategoriesList.push({
            id: category.id,
            name: category.name,
            productIds: productIds,
            isChecked: productIds.length === 0 ? false : productIds.every(function (id) {
              return _selectedProductsIds.includes(id);
            })
          });

          iterateCategories(category.subcategories);
        }));
      };

      setSubCategoriesList(_subCategoriesList);
      iterateCategories(business === null || business === void 0 ? void 0 : business.categories);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessMenuState: businessMenuState,
    formState: formState,
    selectedProductsIds: selectedProductsIds,
    setSelectedProductsIds: setSelectedProductsIds,
    selectedProducts: selectedProducts,
    setSelectedProducts: setSelectedProducts,
    handleChangeInput: handleChangeInput,
    handleCheckOrderType: handleCheckOrderType,
    handleUpdateBusinessMenuOption: handleUpdateBusinessMenuOption,
    handleAddBusinessMenuOption: handleAddBusinessMenuOption,
    handleChangeScheduleState: handleChangeScheduleState,
    handleDeleteMenu: handleDeleteMenu,
    handleChangeMenuSite: handleChangeMenuSite,
    handleSelectAllChannels: handleSelectAllChannels,
    handleSelectNoneChannels: handleSelectNoneChannels,
    subCategoriesList: subCategoriesList
  })));
};

exports.BusinessMenuOptions = BusinessMenuOptions;
BusinessMenuOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * Business, this must be contains an object with all business info
  */
  business: _propTypes.default.object,

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
BusinessMenuOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};