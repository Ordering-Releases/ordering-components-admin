"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetatils = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage product details edit form behavior without UI component
 */
var ProductDetatils = function ProductDetatils(props) {
  var business = props.business,
    UIComponent = props.UIComponent,
    productId = props.productId,
    categoryId = props.categoryId,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    categoryState = props.categoryState,
    handleUpdateCategoryState = props.handleUpdateCategoryState;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      loading: false,
      product: null,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    productState = _useState2[0],
    setProductState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      ingredients: {},
      options: {}
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    productCart = _useState6[0],
    setProductCart = _useState6[1];

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };

  /**
   * Method to get the product from API
   */
  var getProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var params, _yield$ordering$busin, _yield$ordering$busin2, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: true
            }));
            params = {
              version: 'v2'
            };
            _context.next = 5;
            return ordering.businesses(business.id).categories(categoryId).products(productId).parameters(params).get();
          case 5:
            _yield$ordering$busin = _context.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              setProductState({
                loading: false,
                product: result,
                error: null
              });
            } else {
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function getProduct() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to update the product details from API
   */
  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var _productState$product, _productState$product2, changes, originalChanges, _yield$ordering$busin3, _yield$ordering$busin4, error, result, _originalChanges$ribb, _originalChanges$ribb2, _result$ribbon, _productState$product3, _productState$product4, updatedChanges, _yield$ordering$busin5, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            changes = params ? _objectSpread({}, params) : _objectSpread({}, formState.changes);
            originalChanges = params ? _objectSpread({}, params) : _objectSpread({}, formState.changes);
            _context2.next = 7;
            return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(productState === null || productState === void 0 ? void 0 : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.category_id).products(productState === null || productState === void 0 ? void 0 : (_productState$product2 = productState.product) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.id).save(changes, {
              accessToken: session.token
            });
          case 7:
            _yield$ordering$busin3 = _context2.sent;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            error = _yield$ordering$busin4.error;
            result = _yield$ordering$busin4.result;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: error ? formState.changes : {},
              result: {
                error: error,
                result: result
              },
              loading: false
            }));
            if (error) {
              _context2.next = 24;
              break;
            }
            if (!(typeof (originalChanges === null || originalChanges === void 0 ? void 0 : (_originalChanges$ribb = originalChanges.ribbon) === null || _originalChanges$ribb === void 0 ? void 0 : _originalChanges$ribb.enabled) !== 'undefined' && !(originalChanges !== null && originalChanges !== void 0 && (_originalChanges$ribb2 = originalChanges.ribbon) !== null && _originalChanges$ribb2 !== void 0 && _originalChanges$ribb2.enabled) && result !== null && result !== void 0 && (_result$ribbon = result.ribbon) !== null && _result$ribbon !== void 0 && _result$ribbon.enabled)) {
              _context2.next = 22;
              break;
            }
            updatedChanges = {
              ribbon: {
                enabled: false
              }
            };
            _context2.next = 17;
            return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(productState === null || productState === void 0 ? void 0 : (_productState$product3 = productState.product) === null || _productState$product3 === void 0 ? void 0 : _productState$product3.category_id).products(productState === null || productState === void 0 ? void 0 : (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.id).save(updatedChanges, {
              accessToken: session.token
            });
          case 17:
            _yield$ordering$busin5 = _context2.sent;
            content = _yield$ordering$busin5.content;
            handleSuccessUpdate(content === null || content === void 0 ? void 0 : content.result);
            _context2.next = 23;
            break;
          case 22:
            handleSuccessUpdate(result);
          case 23:
            showToast(_ToastContext.ToastType.Success, t('PRODUCT_SAVED', 'Product saved'));
          case 24:
            _context2.next = 29;
            break;
          case 26:
            _context2.prev = 26;
            _context2.t0 = _context2["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context2.t0.message
              },
              loading: false
            }));
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 26]]);
    }));
    return function handleUpdateClick(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
  * Method to edit a product
  */
  var handleDeleteProduct = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _productState$product5, _productState$product6, _yield$ordering$busin6, _yield$ordering$busin7, error, result, _categoryState$produc, updatedProducts, _categories, updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context3.next = 5;
            return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(parseInt((_productState$product5 = productState.product) === null || _productState$product5 === void 0 ? void 0 : _productState$product5.category_id)).products((_productState$product6 = productState.product) === null || _productState$product6 === void 0 ? void 0 : _productState$product6.id).delete();
          case 5:
            _yield$ordering$busin6 = _context3.sent;
            _yield$ordering$busin7 = _yield$ordering$busin6.content;
            error = _yield$ordering$busin7.error;
            result = _yield$ordering$busin7.result;
            if (!error) {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: false,
                  result: result
                }
              }));
              if (handleUpdateCategoryState) {
                updatedProducts = categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.filter(function (item) {
                  return item.id !== productState.product.id;
                });
                handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                  products: updatedProducts
                }));
              }
              if (handleUpdateBusinessState) {
                _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);
                _categories.forEach(function iterate(category) {
                  var _productState$product7;
                  if (category.id === ((_productState$product7 = productState.product) === null || _productState$product7 === void 0 ? void 0 : _productState$product7.category_id)) {
                    var _products = category.products.filter(function (_product) {
                      return _product.id !== productState.product.id;
                    });
                    category.products = _toConsumableArray(_products);
                  }
                  Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                });
                updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                  categories: _categories
                });
                handleUpdateBusinessState(updatedBusiness);
              }
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_DELETED', 'Product deleted'));
              props.onClose && props.onClose();
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
            }
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              result: {
                error: true,
                result: _context3.t0
              }
            }));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 12]]);
    }));
    return function handleDeleteProduct() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to change the product enabled state
   */
  var handleChangeProductActiveState = function handleChangeProductActiveState() {
    var _productState$product8;
    var params = {
      enabled: !(productState !== null && productState !== void 0 && (_productState$product8 = productState.product) !== null && _productState$product8 !== void 0 && _productState$product8.enabled)
    };
    handleUpdateClick(params);
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };

  /**
   * Update credential data
   * @param {Object} changes Related HTML event
   */
  var handleChangeFormState = function handleChangeFormState(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
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
  var handlechangeImage = function handlechangeImage(file, isSeo) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, isSeo ? 'seo_image' : 'images', reader.result))
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */
  var initProductCart = function initProductCart(product) {
    var _props$productCart, _props$productCart2, _props$productCart3, _props$productCart4;
    var ingredients = {};
    for (var key in product.ingredients) {
      var ingredient = product.ingredients[key];
      ingredients["id:".concat(ingredient.id)] = {
        selected: true
      };
    }
    var newProductCart = _objectSpread(_objectSpread({}, props.productCart), {}, {
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: ((_props$productCart = props.productCart) === null || _props$productCart === void 0 ? void 0 : _props$productCart.ingredients) || ingredients,
      options: ((_props$productCart2 = props.productCart) === null || _props$productCart2 === void 0 ? void 0 : _props$productCart2.options) || {},
      comment: ((_props$productCart3 = props.productCart) === null || _props$productCart3 === void 0 ? void 0 : _props$productCart3.comment) || null,
      quantity: ((_props$productCart4 = props.productCart) === null || _props$productCart4 === void 0 ? void 0 : _props$productCart4.quantity) || 1
    });
    newProductCart.unitTotal = getUnitTotal(newProductCart);
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
    setProductCart(newProductCart);
  };

  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */
  var getUnitTotal = function getUnitTotal(productCart) {
    var _props$product3;
    var subtotal = 0;
    for (var i = 0; i < ((_props$product = props.product) === null || _props$product === void 0 ? void 0 : (_props$product$extras = _props$product.extras) === null || _props$product$extras === void 0 ? void 0 : _props$product$extras.length); i++) {
      var _props$product, _props$product$extras, _props$product2;
      var extra = (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.extras[i];
      for (var j = 0; j < ((_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.length); j++) {
        var _extra$options;
        var option = extra.options[j];
        for (var k = 0; k < ((_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length); k++) {
          var _option$suboptions, _productCart$options, _productCart$options$;
          var suboption = option.suboptions[k];
          if ((_productCart$options = productCart.options["id:".concat(option.id)]) !== null && _productCart$options !== void 0 && (_productCart$options$ = _productCart$options.suboptions["id:".concat(suboption.id)]) !== null && _productCart$options$ !== void 0 && _productCart$options$.selected) {
            var suboptionState = productCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
            var quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1;
            var price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price;
            subtotal += price * quantity;
          }
        }
      }
    }
    return ((_props$product3 = props.product) === null || _props$product3 === void 0 ? void 0 : _props$product3.price) + subtotal;
  };

  /**
   * Check if option must show
   * @param {object} option Option to check
   */
  var showProductOption = function showProductOption(option) {
    var showOption = true;
    if (option.respect_to) {
      showOption = false;
      if (productCart.options) {
        var options = productCart.options;
        for (var key in options) {
          var _option$suboptions2;
          var _option = options[key];
          if ((_option$suboptions2 = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions2 !== void 0 && _option$suboptions2.selected) {
            showOption = true;
            break;
          }
        }
      }
    }
    return showOption;
  };

  /**
   * Function to update the product state
   */
  var handleSuccessUpdate = function handleSuccessUpdate(updatedProduct) {
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: _objectSpread(_objectSpread({}, productState.product), updatedProduct)
    }));
    if (handleUpdateBusinessState) {
      var _categories = _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories);
      _categories.forEach(function iterate(category) {
        var _productState$product9;
        if (category.id === ((_productState$product9 = productState.product) === null || _productState$product9 === void 0 ? void 0 : _productState$product9.category_id)) {
          var _products = category.products.map(function (_product) {
            if (_product.id === productState.product.id) {
              return _objectSpread(_objectSpread({}, _product), updatedProduct);
            }
            return _product;
          });
          category.products = _toConsumableArray(_products);
        }
        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });
      var updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
        categories: _categories
      });
      handleUpdateBusinessState(updatedBusiness);
    }
    if (handleUpdateCategoryState) {
      var _categoryState$produc2;
      var updatedProducts = categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.map(function (item) {
        var _productState$product10;
        if ((item === null || item === void 0 ? void 0 : item.id) === (productState === null || productState === void 0 ? void 0 : (_productState$product10 = productState.product) === null || _productState$product10 === void 0 ? void 0 : _productState$product10.id)) {
          return _objectSpread(_objectSpread({}, productState.product), updatedProduct);
        }
        return item;
      });
      handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
        products: updatedProducts
      }));
    }
  };

  /**
   * Method to duplicate product from API
   */
  var handleDuplicateProduct = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                copy_options: 'ingredients,gallery,tags,extras,metafields'
              })
            };
            _context4.next = 5;
            return fetch("".concat(ordering.root, "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/categories/").concat(categoryId, "/products/").concat(productId, "/duplicate"), requestOptions);
          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();
          case 8:
            content = _context4.sent;
            if (!content.error) {
              if (handleUpdateCategoryState) {
                handleUpdateCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                  products: [].concat(_toConsumableArray(categoryState === null || categoryState === void 0 ? void 0 : categoryState.products), [content.result])
                }));
              }
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_DUPLICATED', 'Product duplicated'));
            }
            _context4.next = 15;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context4.t0.message);
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 12]]);
    }));
    return function handleDuplicateProduct() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _props$product4;
    if (props !== null && props !== void 0 && props.product && props !== null && props !== void 0 && (_props$product4 = props.product) !== null && _props$product4 !== void 0 && _props$product4.extras) {
      setProductState(_objectSpread(_objectSpread({}, productState), {}, {
        product: props.product
      }));
      initProductCart(props.product);
    } else {
      if (productId && categoryId) {
        getProduct();
      }
    }
  }, [props.product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productState: productState,
    productCart: productCart,
    formState: formState,
    cleanFormState: cleanFormState,
    handleChangeRibbon: handleChangeRibbon,
    handleChangeProductActiveState: handleChangeProductActiveState,
    handleChangeInput: handleChangeInput,
    handlechangeImage: handlechangeImage,
    handleUpdateClick: handleUpdateClick,
    handleDeleteProduct: handleDeleteProduct,
    showProductOption: showProductOption,
    handleChangeFormState: handleChangeFormState,
    handleSuccessUpdate: handleSuccessUpdate,
    handleDuplicateProduct: handleDuplicateProduct,
    getProduct: getProduct
  })));
};
exports.ProductDetatils = ProductDetatils;
ProductDetatils.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before product details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after product details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after product details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductDetatils.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};