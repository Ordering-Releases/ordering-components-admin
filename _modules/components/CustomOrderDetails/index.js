"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomOrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
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
 * Component to manage custom order details behavior without UI component
 */
var CustomOrderDetails = function CustomOrderDetails(props) {
  var _orderState$options4, _orderState$options5, _orderState$options5$;
  var UIComponent = props.UIComponent,
    businessPropsToFetch = props.businessPropsToFetch,
    onClose = props.onClose,
    handleOpenOrderDetail = props.handleOpenOrderDetail;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    _useOrder2$ = _useOrder2[1],
    updateProduct = _useOrder2$.updateProduct,
    handleDisableToast = _useOrder2$.handleDisableToast;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedUser = _useState2[0],
    setSelectedUser = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusiness = _useState4[0],
    setSelectedBusiness = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    phone = _useState6[0],
    setPhone = _useState6[1];
  var _useState7 = (0, _react.useState)({
      users: [],
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    customersPhones = _useState8[0],
    setCustomersPhones = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      businesses: [],
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    businessList = _useState10[0],
    setBusinessList = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      products: [],
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    productList = _useState12[0],
    setProductList = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    extraFields = _useState14[0],
    setExtraFields = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    actionState = _useState16[0],
    setActionState = _useState16[1];
  var cart = (0, _react.useMemo)(function () {
    if (!(orderState !== null && orderState !== void 0 && orderState.carts) || !(selectedBusiness !== null && selectedBusiness !== void 0 && selectedBusiness.id)) return null;
    return orderState === null || orderState === void 0 ? void 0 : orderState.carts["businessId:".concat(selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id)];
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.carts, selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id]);
  var customerAddress = (0, _react.useMemo)(function () {
    var address = null;
    if (selectedUser !== null && selectedUser !== void 0 && selectedUser.addresses) {
      address = selectedUser.addresses.find(function (address) {
        return address === null || address === void 0 ? void 0 : address.default;
      });
    }
    return address;
  }, [selectedUser]);

  /**
   * Get users from API
   */
  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var conditions, _yield$ordering$setAc, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: true
            }));
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: encodeURI(true)
              }, {
                conector: 'OR',
                conditions: [{
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(phone, "%"))
                  }
                }, {
                  attribute: 'phone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(phone, "%"))
                  }
                }]
              }]
            };
            _context.prev = 2;
            _context.next = 5;
            return ordering.setAccessToken(token).users().where(conditions).get();
          case 5:
            _yield$ordering$setAc = _context.sent;
            result = _yield$ordering$setAc.content.result;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              users: result,
              loading: false
            }));
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: false,
              error: _context.t0.message
            }));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 10]]);
    }));
    return function getUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get business list from API
   */
  var getBusinessList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(location) {
      var _orderState$options, parameters, conditions, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, availableBusinesses;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            parameters = {
              location: "".concat(location.lat, ",").concat(location.lng),
              type: ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1
            };
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: encodeURI(true)
              }]
            };
            fetchEndpoint = ordering.businesses().select(businessPropsToFetch).where(conditions).parameters(parameters);
            _context2.next = 7;
            return fetchEndpoint.get();
          case 7:
            _yield$fetchEndpoint$ = _context2.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            if (!error) {
              availableBusinesses = result.filter(function (business) {
                return business === null || business === void 0 ? void 0 : business.open;
              });
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                businesses: availableBusinesses
              }));
            } else {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: false,
              error: [_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message]
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function getBusinessList(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get products list from API
   */
  var getProducts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(searchValue) {
      var _orderState$options2, where, searchConditions, parameters, _yield$ordering$busin, _yield$ordering$busin2, error, result, newProducts;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setProductList(_objectSpread(_objectSpread({}, productList), {}, {
              loading: true
            }));
            where = null;
            searchConditions = [];
            parameters = {
              type: ((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) || 1
            };
            if (searchValue) {
              searchConditions.push({
                attribute: 'name',
                value: {
                  condition: 'ilike',
                  value: encodeURI("%".concat(searchValue, "%"))
                }
              });
            }
            where = {
              conditions: searchConditions,
              conector: 'OR'
            };
            _context3.next = 9;
            return ordering.businesses(selectedBusiness.id).products().parameters(parameters).where(where).get();
          case 9:
            _yield$ordering$busin = _context3.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (error) {
              _context3.next = 21;
              break;
            }
            if (!searchValue) {
              _context3.next = 18;
              break;
            }
            newProducts = result.filter(function (newProduct) {
              return !productList.products.some(function (existingProduct) {
                return existingProduct.id === newProduct.id;
              });
            });
            setProductList(function (prevProductList) {
              return _objectSpread(_objectSpread({}, prevProductList), {}, {
                loading: false,
                products: [].concat(_toConsumableArray(prevProductList.products), _toConsumableArray(newProducts))
              });
            });
            return _context3.abrupt("return");
          case 18:
            setProductList(_objectSpread(_objectSpread({}, productList), {}, {
              loading: false,
              products: result
            }));
            _context3.next = 22;
            break;
          case 21:
            setProductList(_objectSpread(_objectSpread({}, productList), {}, {
              loading: false,
              error: result
            }));
          case 22:
            _context3.next = 27;
            break;
          case 24:
            _context3.prev = 24;
            _context3.t0 = _context3["catch"](0);
            setProductList(_objectSpread(_objectSpread({}, productList), {}, {
              loading: false,
              error: [_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message]
            }));
          case 27:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 24]]);
    }));
    return function getProducts(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to update product cart
   */
  var handeUpdateProductCart = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(product, increament) {
      var successful, cartProduct;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            successful = true;
            cartProduct = _objectSpread(_objectSpread({}, product), {}, {
              quantity: increament ? product.quantity + 1 : product.quantity - 1
            });
            _context4.next = 5;
            return updateProduct(cartProduct, selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.id, selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id);
          case 5:
            successful = _context4.sent;
            if (successful) {
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_UPDATE', 'Product updated'));
            }
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handeUpdateProductCart(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handlePlaceOrderByTotal = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _orderState$options3;
      var customer, changes, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            customer = _objectSpread(_objectSpread(_objectSpread({
              name: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name,
              cellphone: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.cellphone,
              address: customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address
            }, (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.phone) && {
              phone: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.phone
            }), (customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address_notes) && {
              address_notes: customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address_notes
            }), {}, {
              location: JSON.stringify(customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location)
            });
            changes = _objectSpread({
              paymethod: 'cash',
              business_id: selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id,
              delivery_type: ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) || 1,
              customer: JSON.stringify(customer)
            }, extraFields);
            _context5.prev = 2;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
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
            _context5.next = 8;
            return fetch("".concat(ordering.root, "/orders/custom"), requestOptions);
          case 8:
            response = _context5.sent;
            _context5.next = 11;
            return response.json();
          case 11:
            content = _context5.sent;
            if (!content.error) {
              showToast(_ToastContext.ToastType.Success, t('CUSTOM_ORDER_CREATED', 'Custom order created'));
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: null
              }));
              onClose && onClose();
              handleOpenOrderDetail && handleOpenOrderDetail(content.result);
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context5.next = 18;
            break;
          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](2);
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 18:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[2, 15]]);
    }));
    return function handlePlaceOrderByTotal() {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!(customerAddress !== null && customerAddress !== void 0 && customerAddress.location) || orderState !== null && orderState !== void 0 && orderState.loading) return;
    getBusinessList(customerAddress.location);
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location, orderState]);
  (0, _react.useEffect)(function () {
    if (phone && phone.length >= 7) {
      getUsers();
    }
    if (phone && phone.length < 7 || !phone) {
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: []
      }));
    }
  }, [phone]);
  (0, _react.useEffect)(function () {
    if (orderState !== null && orderState !== void 0 && orderState.loading) return;
    if (selectedBusiness !== null && selectedBusiness !== void 0 && selectedBusiness.id) {
      getProducts();
    } else {
      setProductList({
        loading: false,
        products: [],
        error: null
      });
    }
  }, [selectedBusiness, orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type, orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : _orderState$options5$.location, orderState === null || orderState === void 0 ? void 0 : orderState.loading]);
  (0, _react.useEffect)(function () {
    if (selectedUser) {
      handleDisableToast(false);
    } else {
      handleDisableToast(true);
    }
  }, [selectedUser]);
  (0, _react.useEffect)(function () {
    return function () {
      return handleDisableToast(true);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    selectedUser: selectedUser,
    setSelectedUser: setSelectedUser,
    selectedBusiness: selectedBusiness,
    setSelectedBusiness: setSelectedBusiness,
    phone: phone,
    onChangeNumber: function onChangeNumber(val) {
      return setPhone(val);
    },
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    businessList: businessList,
    getBusinessList: getBusinessList,
    productList: productList,
    getProducts: getProducts,
    handeUpdateProductCart: handeUpdateProductCart,
    cart: cart,
    handlePlaceOrderByTotal: handlePlaceOrderByTotal,
    setExtraFields: setExtraFields,
    extraFields: extraFields,
    actionState: actionState,
    customerAddress: customerAddress
  })));
};
exports.CustomOrderDetails = CustomOrderDetails;
CustomOrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
CustomOrderDetails.defaultProps = {
  businessPropsToFetch: ['id', 'name', 'location', 'logo', 'slug', 'zones', 'open', 'timezone', 'schedule', 'slug']
};