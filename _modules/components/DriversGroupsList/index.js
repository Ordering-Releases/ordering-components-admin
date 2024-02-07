"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
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
var DriversGroupsList = function DriversGroupsList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    isDriversMangersRequired = props.isDriversMangersRequired,
    isHeaderComponent = props.isHeaderComponent,
    paginationSettings = props.paginationSettings;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      groups: [],
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    driversGroupsState = _useState2[0],
    setDriversGroupsState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      managers: [],
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    driversManagersList = _useState4[0],
    setDriversManagersList = _useState4[1];
  var _useState5 = (0, _react.useState)({
      businesses: [],
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    businessesList = _useState6[0],
    setBusinessesList = _useState6[1];
  var _useState7 = (0, _react.useState)({
      paymethods: [],
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    paymethodsList = _useState8[0],
    setPaymethodsList = _useState8[1];
  var _useState9 = (0, _react.useState)({
      drivers: [],
      loading: false,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    driversList = _useState10[0],
    setDriversList = _useState10[1];
  var _useState11 = (0, _react.useState)({
      companies: [],
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    driversCompanyList = _useState12[0],
    setDriversCompanyList = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    startSeveralDeleteStart = _useState14[0],
    setStartSeveralDeleteStart = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    actionState = _useState16[0],
    setActionState = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedGroupList = _useState18[0],
    setSelectedGroupList = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = _slicedToArray(_useState19, 2),
    actionDisabled = _useState20[0],
    setActionDisabled = _useState20[1];
  var _useState21 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    paginationProps = _useState22[0],
    setPaginationProps = _useState22[1];

  /**
  * Method to get the driver groups from API
  */
  var getHeaderDriversGroups = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var requestOptions, response, content, result, pagination, error, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
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
            return fetch("".concat(ordering.root, "/drivergroups?page=").concat(page, "&page_size=").concat(pageSize), requestOptions);
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            content = _context.sent;
            result = content.result, pagination = content.pagination, error = content.error;
            if (!error) {
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: result,
                loading: false
              }));
            } else {
              driversGroupsState.groups = result;
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                loading: false
              }));
              nextPageItems = 0;
              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - driversList.users.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                from: pagination.from,
                to: pagination.to,
                nextPageItems: nextPageItems
              }));
            }
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }));
    return function getHeaderDriversGroups(_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get the drivers groups from API
   */
  var getDriversGroups = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content, found;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
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
            return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            content = _context2.sent;
            if (!content.error) {
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: content.result,
                loading: false
              }));
              if ((user === null || user === void 0 ? void 0 : user.level) === 5) {
                found = content.result.find(function (group) {
                  return (group === null || group === void 0 ? void 0 : group.administrator_id) === (user === null || user === void 0 ? void 0 : user.id);
                });
                if (found) setActionDisabled(false);else setActionDisabled(true);
              } else {
                setActionDisabled(false);
              }
            }
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getDriversGroups() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to  get the driver managers from API
   */
  var getDriverManagers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
              loading: false
            }));
            _context3.next = 4;
            return ordering.setAccessToken(token).users().where([{
              attribute: 'level',
              value: 5
            }]).select(['name', 'email', 'photo']).get();
          case 4:
            _yield$ordering$setAc = _context3.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            if (!error) {
              setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
                loading: false,
                managers: result
              }));
            }
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            setDriversManagersList(_objectSpread(_objectSpread({}, driversManagersList), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function getDriverManagers() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses from API
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true
            }));
            _context4.next = 4;
            return ordering.setAccessToken(token).businesses().select(['name', 'logo']).asDashboard().get();
          case 4:
            _yield$ordering$setAc3 = _context4.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            if (!error) {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: result
              }));
            }
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return function getBusinesses() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _yield$ordering$setAc5, _yield$ordering$setAc6, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false
            }));
            _context5.next = 4;
            return ordering.setAccessToken(token).users().where([{
              attribute: 'level',
              value: 4
            }]).select(['name', 'lastname', 'email', 'photo']).get();
          case 4:
            _yield$ordering$setAc5 = _context5.sent;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            if (!error) {
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                drivers: result
              }));
            }
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    return function getDrivers() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to get the paymethods from API
   */
  var getPaymethods = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context6.next = 5;
            return fetch("".concat(ordering.root, "/paymethods?params=name,gateway&where={%22enabled%22:true}"), requestOptions);
          case 5:
            response = _context6.sent;
            _context6.next = 8;
            return response.json();
          case 8:
            content = _context6.sent;
            if (!content.error) {
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                paymethods: content.result,
                loading: false
              }));
            }
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function getPaymethods() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to get the drivers companies from API
   */
  var getDriversCompanies = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/driver_companies?params=name"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            content = _context7.sent;
            if (!content.error) {
              setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
                companies: content.result,
                loading: false
              }));
            }
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            setDriversCompanyList(_objectSpread(_objectSpread({}, driversCompanyList), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function getDriversCompanies() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to update selected drivers group from API
   * @param {Number} driverGroupId
   * @param {Object} changes
   */
  var handleUpdateDriversGroup = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(driverGroupId, changes) {
      var requestOptions, response, content, groups;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(driverGroupId), requestOptions);
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            content = _context8.sent;
            if (!content.error) {
              setActionState({
                error: null,
                loading: false
              });
              groups = driversGroupsState.groups.filter(function (group) {
                if (group.id === driverGroupId) {
                  Object.assign(group, content.result);
                }
                return true;
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_ToastContext.ToastType.Success, t('CHANGES_SAVED', 'Changes saved'));
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context8.next = 16;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            setActionState({
              loading: false,
              error: [_context8.t0.message]
            });
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function handleUpdateDriversGroup(_x4, _x5) {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the drivers group from API
   * @param {Number} driversGroupId
   */
  var handleDeleteDriversGroup = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(driversGroupId) {
      var requestOptions, response, content, groups, groupList;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context9.next = 6;
            return fetch("".concat(ordering.root, "/drivergroups/").concat(driversGroupId), requestOptions);
          case 6:
            response = _context9.sent;
            _context9.next = 9;
            return response.json();
          case 9:
            content = _context9.sent;
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              groups = driversGroupsState.groups.filter(function (group) {
                return group.id !== driversGroupId;
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: groups
              }));
              showToast(_ToastContext.ToastType.Success, t('DRIVER_GROUP_DELETED', 'Driver group deleted'));
              if (startSeveralDeleteStart) {
                groupList = _toConsumableArray(selectedGroupList);
                groupList.shift();
                if (groupList.length === 0) {
                  setStartSeveralDeleteStart(false);
                }
                setSelectedGroupList(groupList);
              }
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
              setStartSeveralDeleteStart(false);
            }
            _context9.next = 16;
            break;
          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            setActionState({
              loading: false,
              error: [_context9.t0.message]
            });
          case 16:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 13]]);
    }));
    return function handleDeleteDriversGroup(_x6) {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleSelectGroup = function handleSelectGroup(groupId) {
    var ids = [];
    if (selectedGroupList.includes(groupId)) {
      ids = selectedGroupList.filter(function (id) {
        return id !== groupId;
      });
    } else {
      ids = [].concat(_toConsumableArray(selectedGroupList), [groupId]);
    }
    setSelectedGroupList(ids);
  };
  var handleAllSelectGroup = function handleAllSelectGroup() {
    var _driversGroupsState$g;
    var allIds = (_driversGroupsState$g = driversGroupsState.groups) === null || _driversGroupsState$g === void 0 ? void 0 : _driversGroupsState$g.reduce(function (ids, group) {
      return [].concat(_toConsumableArray(ids), [group.id]);
    }, []);
    if (selectedGroupList.length === allIds.length) {
      setSelectedGroupList([]);
    } else {
      setSelectedGroupList(allIds);
    }
  };
  (0, _react.useEffect)(function () {
    if (!startSeveralDeleteStart || selectedGroupList.length === 0) return;
    handleDeleteDriversGroup(selectedGroupList[0]);
  }, [selectedGroupList, startSeveralDeleteStart]);
  (0, _react.useEffect)(function () {
    getHeaderDriversGroups(paginationProps.currentPage, paginationProps.pageSize);
    if (isHeaderComponent) return;
    getDriversGroups();
    if (isDriversMangersRequired) {
      getDriverManagers();
    }
    getDrivers();
    getBusinesses();
    getPaymethods();
    getDriversCompanies();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    driversManagersList: driversManagersList,
    businessesList: businessesList,
    paymethodsList: paymethodsList,
    driversList: driversList,
    driversCompanyList: driversCompanyList,
    actionState: actionState,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    handleDeleteSelectedGroups: function handleDeleteSelectedGroups() {
      return setStartSeveralDeleteStart(true);
    },
    selectedGroupList: selectedGroupList,
    handleSelectGroup: handleSelectGroup,
    handleAllSelectGroup: handleAllSelectGroup,
    actionDisabled: actionDisabled,
    getHeaderDriversGroups: getHeaderDriversGroups,
    pagination: paginationProps
  })));
};
exports.DriversGroupsList = DriversGroupsList;
DriversGroupsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after drivers groups list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after drivers groups list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversGroupsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};