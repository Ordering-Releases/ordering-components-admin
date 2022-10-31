"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategoyDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _ToastContext = require("../../contexts/ToastContext");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

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
 * Component to manage BusinessProductsCategoyDetails behavior without UI component
 */
var BusinessProductsCategoyDetails = function BusinessProductsCategoyDetails(props) {
  var UIComponent = props.UIComponent,
      businessState = props.businessState,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      category = props.category,
      categoryId = props.categoryId,
      onClose = props.onClose,
      categorySelected = props.categorySelected,
      setCategorySelected = props.setCategorySelected;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      loading = _useSession2[0].loading;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {
      enabled: true,
      enabledParent: false
    },
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      parentCategories = _useState4[0],
      setParentCategories = _useState4[1];

  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: category || {}
    }));
  }, [category]);
  /**
  * Update form input data
  * @param {EventTarget} e Related HTML event
  */

  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _defineProperty({}, e.target.name, e.target.value);

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
  * Update credential data
  * @param {Object} isChecked checkbox status
  */


  var handleChangeCheckBox = function handleChangeCheckBox(isChecked) {
    var currentChanges = null;

    if (isChecked.enabled !== undefined) {
      currentChanges = {
        enabled: isChecked.enabled
      };
    }

    if (isChecked.enabledParent) {
      currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
        parent_category_id: categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id
      });
    } else {
      currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, {
        parent_category_id: null
      });
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Update form item
   */


  var handleChangeItem = function handleChangeItem(change) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), change)
    }));
  };
  /**
   * Update ribbon data
   * @param {Object} changes Related HTML event
   */


  var handleChangeRibbon = function handleChangeRibbon(changes) {
    var _formState$changes, _formState$changes2;

    var ribbonChanges = formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.ribbon ? _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.ribbon), changes) : _objectSpread({}, changes);

    var currentChanges = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
      ribbon: ribbonChanges
    });

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: currentChanges
    }));
  };
  /**
  * Update business photo data
  * @param {File} file Image to change business photo
  */


  var handlechangeImage = function handlechangeImage(file, name) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, name, reader.result))
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  var businessUpdate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(content) {
      var _categories, _business;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _categories = _toConsumableArray(businessState.business.categories);

              _categories.forEach(function iterate(category, index, object) {
                var _content$result2, _content$result3;

                if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                  if (Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories)) {
                    var found = category.subcategories.find(function (subCategory) {
                      var _content$result;

                      return (subCategory === null || subCategory === void 0 ? void 0 : subCategory.id) === (content === null || content === void 0 ? void 0 : (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.id);
                    });

                    if (!found) {
                      category.subcategories.push(content === null || content === void 0 ? void 0 : content.result);
                    }
                  }
                }

                var categoryKeyOptions = ['name', 'enabled', 'header', 'description', 'ribbon', 'image', 'slug', 'seo_image', 'seo_title', 'seo_description'];

                if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 ? void 0 : (_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.id) && category.parent_category_id === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                  Object.keys(category).forEach(function (key) {
                    if (categoryKeyOptions.includes(key) && content.result[key] !== undefined) {
                      category[key] = content === null || content === void 0 ? void 0 : content.result[key];
                    }
                  });
                }

                if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 ? void 0 : (_content$result3 = content.result) === null || _content$result3 === void 0 ? void 0 : _content$result3.id) && category.parent_category_id !== (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                  object.splice(index, 1);
                }

                Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
              });

              _business = _objectSpread(_objectSpread({}, businessState.business), {}, {
                categories: _categories
              });
              return _context.abrupt("return", _business);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function businessUpdate(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
  * Default fuction for business profile workflow
  */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var id, _businessState$busine, changes, key, _yield$ordering$busin, content, _formState$changes3, _formState$changes3$r, _formState$changes4, _formState$changes4$r, _content$result4, _content$result4$ribb, _businessState$busine2, updatedChanges, _yield$ordering$busin2, _content, updatedBusiness, _updatedBusiness;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!category) {
                _context2.next = 47;
                break;
              }

              id = (category === null || category === void 0 ? void 0 : category.id) || categoryId;

              if (!loading) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              _context2.prev = 4;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = _objectSpread({}, formState.changes);

              for (key in changes) {
                if (changes[key] === null) {
                  delete changes[key];
                }
              }

              _context2.next = 11;
              return ordering.businesses(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.id).categories(parseInt(id)).save(changes);

            case 11:
              _yield$ordering$busin = _context2.sent;
              content = _yield$ordering$busin.content;

              if (content.error) {
                _context2.next = 39;
                break;
              }

              if (!(typeof ((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : (_formState$changes3$r = _formState$changes3.ribbon) === null || _formState$changes3$r === void 0 ? void 0 : _formState$changes3$r.enabled) !== 'undefined' && !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && (_formState$changes4$r = _formState$changes4.ribbon) !== null && _formState$changes4$r !== void 0 && _formState$changes4$r.enabled) && content !== null && content !== void 0 && (_content$result4 = content.result) !== null && _content$result4 !== void 0 && (_content$result4$ribb = _content$result4.ribbon) !== null && _content$result4$ribb !== void 0 && _content$result4$ribb.enabled)) {
                _context2.next = 29;
                break;
              }

              updatedChanges = {
                ribbon: {
                  enabled: false
                }
              };
              _context2.next = 18;
              return ordering.businesses(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id).categories(parseInt(id)).save(updatedChanges);

            case 18:
              _yield$ordering$busin2 = _context2.sent;
              _content = _yield$ordering$busin2.content;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: _content.result,
                result: {
                  error: false,
                  result: _content.result
                },
                loading: false
              }));
              setCategorySelected(_content.result);

              if (!handleUpdateBusinessState) {
                _context2.next = 27;
                break;
              }

              _context2.next = 25;
              return businessUpdate(_content);

            case 25:
              updatedBusiness = _context2.sent;
              handleUpdateBusinessState(updatedBusiness);

            case 27:
              _context2.next = 36;
              break;

            case 29:
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: content.result,
                result: {
                  error: false,
                  result: content.result
                },
                loading: false
              }));
              setCategorySelected(content.result);

              if (!handleUpdateBusinessState) {
                _context2.next = 36;
                break;
              }

              _context2.next = 34;
              return businessUpdate(content);

            case 34:
              _updatedBusiness = _context2.sent;
              handleUpdateBusinessState(_updatedBusiness);

            case 36:
              showToast(_ToastContext.ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'));
              _context2.next = 40;
              break;

            case 39:
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: formState.changes,
                result: content,
                loading: false
              }));

            case 40:
              _context2.next = 45;
              break;

            case 42:
              _context2.prev = 42;
              _context2.t0 = _context2["catch"](4);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: [_context2.t0.message]
                },
                loading: false
              }));

            case 45:
              _context2.next = 48;
              break;

            case 47:
              createBusinessCategory();

            case 48:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 42]]);
    }));

    return function handleUpdateClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var createBusinessCategory = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _formState$changes5, _changes$ribbon, _businessState$busine3, changes, _yield$ordering$busin3, content, _content$result5, newCategory, _businessState$busine4, _categories;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!loading) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
                slug: (0, _utils.stringToSlug)((formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name) || '')
              });
              if (typeof (changes === null || changes === void 0 ? void 0 : changes.ribbon) !== 'undefined' && !(changes !== null && changes !== void 0 && (_changes$ribbon = changes.ribbon) !== null && _changes$ribbon !== void 0 && _changes$ribbon.enabled)) delete changes.ribbon;
              _context3.next = 9;
              return ordering.businesses(parseInt(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id)).categories().save(changes);

            case 9:
              _yield$ordering$busin3 = _context3.sent;
              content = _yield$ordering$busin3.content;

              if (!content.error) {
                newCategory = _objectSpread({}, content.result);
                newCategory.parent_category_id = ((_content$result5 = content.result) === null || _content$result5 === void 0 ? void 0 : _content$result5.parent_category_id) || null;
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  category: {},
                  result: {
                    error: false,
                    result: newCategory
                  },
                  loading: false
                }));

                if (handleUpdateBusinessState) {
                  _categories = ((_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.categories) || [];

                  if (content !== null && content !== void 0 && content.result.parent_category_id) {
                    _categories.forEach(function iterate(category) {
                      if ((category === null || category === void 0 ? void 0 : category.id) === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                        category.subcategories.push(_objectSpread(_objectSpread({}, newCategory), {}, {
                          products: [],
                          subcategories: []
                        }));
                      }

                      Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                    });
                  } else {
                    _categories.push(_objectSpread(_objectSpread({}, newCategory), {}, {
                      products: [],
                      subcategories: []
                    }));
                  }

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, businessState.business), {}, {
                    categories: _categories
                  }));
                }

                showToast(_ToastContext.ToastType.Success, t('CATEOGORY_CREATED', 'Category created'));
                onClose && onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: formState.changes,
                  result: content,
                  loading: false
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context3.t0.message
                },
                loading: false
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 14]]);
    }));

    return function createBusinessCategory() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
  * Method to edit a category
  */


  var handleDeleteCategory = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _businessState$busine5, _yield$ordering$busin4, _yield$ordering$busin5, error, result, _categories;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!loading) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              _context4.prev = 2;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context4.next = 7;
              return ordering.businesses(parseInt((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id)).categories(parseInt(category === null || category === void 0 ? void 0 : category.id)).delete();

            case 7:
              _yield$ordering$busin4 = _context4.sent;
              _yield$ordering$busin5 = _yield$ordering$busin4.content;
              error = _yield$ordering$busin5.error;
              result = _yield$ordering$busin5.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: false,
                    result: result
                  }
                }));

                if (handleUpdateBusinessState) {
                  _categories = _toConsumableArray(businessState.business.categories);

                  _categories.forEach(function iterate(_category, index, object) {
                    if ((_category === null || _category === void 0 ? void 0 : _category.id) === (category === null || category === void 0 ? void 0 : category.id)) {
                      object.splice(index, 1);
                    }

                    Array.isArray(_category === null || _category === void 0 ? void 0 : _category.subcategories) && _category.subcategories.forEach(iterate);
                  });

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, businessState.business), {}, {
                    categories: _categories
                  }));
                  if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) setCategorySelected(_categories[0]);
                }

                showToast(_ToastContext.ToastType.Success, t('CATEOGORY_DELETED', 'Category deleted'));
                props.onClose && props.onClose(category === null || category === void 0 ? void 0 : category.id);
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context4.t0
                }
              }));

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 14]]);
    }));

    return function handleDeleteCategory() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (businessState.loading || !categorySelected) return;

    var getParentCategories = function getParentCategories(category, id) {
      var path;
      var item = {
        id: category === null || category === void 0 ? void 0 : category.id,
        name: category.name
      };
      if (!category || _typeof(category) !== 'object') return;

      if ((category === null || category === void 0 ? void 0 : category.id) === id) {
        return [];
      }

      ((category === null || category === void 0 ? void 0 : category.subcategories) || []).some(function (child) {
        return path = getParentCategories(child, id);
      });
      return path && [item].concat(_toConsumableArray(path));
    };

    businessState.business.categories.forEach(function (category) {
      var _parentCategories = getParentCategories(category, categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id);

      if (_parentCategories) {
        setParentCategories(_parentCategories);
      }
    });
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.loading, categorySelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: !category,
    formState: formState,
    setFormState: setFormState,
    parentCategories: parentCategories,
    handlechangeImage: handlechangeImage,
    handleChangeInput: handleChangeInput,
    handleChangeCheckBox: handleChangeCheckBox,
    handleChangeItem: handleChangeItem,
    handleUpdateClick: handleUpdateClick,
    handleDeleteCategory: handleDeleteCategory,
    handleChangeRibbon: handleChangeRibbon
  })));
};

exports.BusinessProductsCategoyDetails = BusinessProductsCategoyDetails;
BusinessProductsCategoyDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Object for a business
   */
  businessState: _propTypes.default.object,

  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: _propTypes.default.func,

  /**
   * Function to set product creation mode
   */
  setIsAddProduct: _propTypes.default.func,

  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessProductsCategoyDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};