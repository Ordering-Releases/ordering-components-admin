"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtras = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage product extras behavior without UI component
 */
var ProductExtras = function ProductExtras(props) {
  var business = props.business,
    UIComponent = props.UIComponent,
    product = props.product,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    propsToFetch = props.propsToFetch;
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
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    dragoverExtaId = _useState10[0],
    setdragOverExtaId = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isExtrasBottom = _useState12[0],
    setIsExtrasBottom = _useState12[1];

  /**
   * Method to get business extras from API
   */
  var getBusinessExtras = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requestOptions, response, _yield$response$json, error, result, updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
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
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras?mode=dashboard&params=").concat(propsToFetch.toString()), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              if (handleUpdateBusinessState) {
                updatedBusiness = _objectSpread(_objectSpread({}, business), {}, {
                  extras: result
                });
                handleUpdateBusinessState(updatedBusiness);
              }
            } else {
              setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function getBusinessExtras() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to save the new ingredient from API
   * @param {Array} extraIds
   */
  var handleProductExtraState = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(extraIds) {
      var changes, requestOptions, response, content, _productState$product, extrasFromProductState, extras, combinedExtras, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
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
            _context2.next = 7;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/categories/").concat(product === null || product === void 0 ? void 0 : product.category_id, "/products/").concat(product.id), requestOptions);
          case 7:
            response = _context2.sent;
            _context2.next = 10;
            return response.json();
          case 10:
            content = _context2.sent;
            if (!content.error) {
              extrasFromProductState = productState === null || productState === void 0 ? void 0 : (_productState$product = productState.product) === null || _productState$product === void 0 ? void 0 : _productState$product.extras.filter(function (extra) {
                return extraIds.includes(extra.id);
              });
              extras = extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras.filter(function (extra) {
                return extraIds.includes(extra.id);
              });
              combinedExtras = extras.map(function (extra) {
                var extraFromProduct = extrasFromProductState.find(function (ep) {
                  return ep.id === extra.id;
                });
                if (extraFromProduct) {
                  return _objectSpread(_objectSpread({}, extraFromProduct), extra);
                }
                return extra;
              });
              updatedProduct = _objectSpread(_objectSpread({}, productState.product), {}, {
                extras: combinedExtras
              });
              setProductState(_objectSpread(_objectSpread({}, productState), {}, {
                loading: false,
                product: updatedProduct
              }));
              handleSuccessUpdate && handleSuccessUpdate(updatedProduct);
              // updateBusinessState(updatedProduct, business)
              showToast(_ToastContext.ToastType.Success, t('EXTRA_SAVED', 'Extra saved'));
            }
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function handleProductExtraState(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to save the new ingredient from API
   * @param {Number} extraId
   * @param {Object} params updated parameters
   */
  var handleUpdateExtraState = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(extraId, params) {
      var requestOptions, response, content, extras, productExtras, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
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
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleUpdateExtraState(_x3, _x4) {
      return _ref3.apply(this, arguments);
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(extraId) {
      var requestOptions, response, content, extras, productExtras, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
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
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(extraId), requestOptions);
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            content = _context4.sent;
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
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: false,
              error: _context4.t0.message
            }));
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function handleDeteteExtra(_x5) {
      return _ref4.apply(this, arguments);
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(payload) {
      var changes, requestOptions, response, content, extras, updatedBusiness;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(!payload && Object.keys(changesState).length === 0)) {
              _context5.next = 3;
              break;
            }
            setIsAddMode(false);
            return _context5.abrupt("return");
          case 3:
            _context5.prev = 3;
            changes = payload ? _objectSpread({
              business_id: business === null || business === void 0 ? void 0 : business.id
            }, payload) : _objectSpread({
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
            _context5.next = 10;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras"), requestOptions);
          case 10:
            response = _context5.sent;
            _context5.next = 13;
            return response.json();
          case 13:
            content = _context5.sent;
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
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](3);
            setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
              loading: false,
              error: _context5.t0.message
            }));
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[3, 17]]);
    }));
    return function handleAddExtra(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to handle extra drag start
   */
  var handleDragStart = function handleDragStart(event, extra) {
    event.dataTransfer.setData('transferExtraId', extra.id);
    var ghostElement = document.createElement('div');
    ghostElement.classList.add('ghostDragging');
    ghostElement.innerHTML = extra.name;
    document.body.appendChild(ghostElement);
    event.dataTransfer.setDragImage(ghostElement, 0, 0);
    setIsExtrasBottom(false);
  };

  /**
   * Method to handle extra drag over
   */
  var hanldeDragOver = function hanldeDragOver(event, extra, isLastExtra) {
    event.preventDefault();
    var element = event.target.closest('.draggable-extra');
    if (element) {
      if (!isLastExtra) {
        setdragOverExtaId(extra.id);
      } else {
        var middlePositionY = window.scrollY + event.target.getBoundingClientRect().top + event.target.offsetHeight / 2;
        var dragPositionY = event.clientY;
        if (dragPositionY > middlePositionY) {
          setIsExtrasBottom(true);
          setdragOverExtaId(null);
        } else {
          setIsExtrasBottom(false);
          setdragOverExtaId(extra.id);
        }
      }
    }
  };

  /**
   * Method to handle extra drop
   */
  var handleDrop = function handleDrop(event, extra) {
    event.preventDefault();
    var transferExtraId = parseInt(event.dataTransfer.getData('transferExtraId'));
    if (extra.id === transferExtraId) return;
    var dropExtraRank;
    if (isExtrasBottom) {
      dropExtraRank = (extra === null || extra === void 0 ? void 0 : extra.rank) + 1;
    } else {
      dropExtraRank = extra === null || extra === void 0 ? void 0 : extra.rank;
    }
    setIsExtrasBottom(false);
    handleChangeExtraRank(transferExtraId, {
      rank: dropExtraRank
    });
  };

  /**
   * Method to handle exrta drag end
   */
  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    setdragOverExtaId(null);
  };

  /**
   * Method to change the rank of extra
   */
  var handleChangeExtraRank = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(transferExtraId, params) {
      var requestOptions, response, content, extras, productExtras, updatedProduct;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
              loading: true
            }));
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(params)
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/business/").concat(business.id, "/extras/").concat(transferExtraId), requestOptions);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
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
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setProductState(_objectSpread(_objectSpread({}, productState), {}, {
              loading: false,
              error: _context6.t0.message
            }));
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleChangeExtraRank(_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    setProductState(_objectSpread(_objectSpread({}, productState), {}, {
      product: product
    }));
  }, [product]);
  (0, _react.useEffect)(function () {
    if (business !== null && business !== void 0 && business.extras) {
      setExtrasState(_objectSpread(_objectSpread({}, extrasState), {}, {
        loading: false,
        extras: business === null || business === void 0 ? void 0 : business.extras
      }));
    } else {
      getBusinessExtras();
    }
  }, [business === null || business === void 0 ? void 0 : business.extras]);
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
    handleProductExtraState: handleProductExtraState,
    dragoverExtaId: dragoverExtaId,
    isExtrasBottom: isExtrasBottom,
    handleDragStart: handleDragStart,
    hanldeDragOver: hanldeDragOver,
    handleDrop: handleDrop,
    handleDragEnd: handleDragEnd,
    handleUpdateExtraState: handleUpdateExtraState,
    setExtrasState: setExtrasState
  })));
};
exports.ProductExtras = ProductExtras;
ProductExtras.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of extra props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
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
  afterElements: [],
  propsToFetch: ['id', 'extras', 'business_id', 'name', 'description', 'enabled', 'external_id', 'rank', 'metafields']
};