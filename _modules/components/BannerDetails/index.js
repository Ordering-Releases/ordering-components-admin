"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
 * Component to manage banner behavior without UI component
 */
var BannerDetails = function BannerDetails(props) {
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    banner = props.banner,
    sitesState = props.sitesState,
    defaultPosition = props.defaultPosition,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessAdd = props.handleSuccessAdd,
    handleSuccessDelete = props.handleSuccessDelete;
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
      banner: banner,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    bannerState = _useState2[0],
    setBannerState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAddMode = _useState4[0],
    setIsAddMode = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      items: [],
      images: [],
      videos: [],
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    bannerItemsState = _useState6[0],
    setBannerItemsState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      changes: {},
      itemId: null,
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    changesState = _useState8[0],
    setChangesState = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedSitesIds = _useState10[0],
    setSelectedSitesIds = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    actionState = _useState12[0],
    setActionState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      businesses: [],
      result: {
        error: null
      }
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    businessList = _useState14[0],
    setBusinessList = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedBusinessIds = _useState16[0],
    setSelectedBusinessIds = _useState16[1];

  /**
   * Method to change the option state
   */
  var handleChangeItem = function handleChangeItem(changes, id) {
    setChangesState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        changes: _objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : prevState.changes), changes)
      }, id && {
        itemId: id
      });
    });
  };

  /**
   * Method to change the sites
   */
  var handleSelectSite = function handleSelectSite(checked, siteId) {
    var _changesState$changes;
    var sites = [];
    if ((_changesState$changes = changesState.changes) !== null && _changesState$changes !== void 0 && _changesState$changes.sites) {
      var _changesState$changes2;
      sites = _toConsumableArray((_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.sites);
    } else {
      if (banner !== null && banner !== void 0 && banner.sites) {
        var _banner$sites;
        sites = banner === null || banner === void 0 ? void 0 : (_banner$sites = banner.sites) === null || _banner$sites === void 0 ? void 0 : _banner$sites.reduce(function (ids, site) {
          return [].concat(_toConsumableArray(ids), [site.id]);
        }, []);
      }
    }
    if (checked) {
      sites.push(siteId);
    } else {
      sites = sites.filter(function (id) {
        return id !== siteId;
      });
    }
    setSelectedSitesIds(sites);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
        sites: sites
      })
    }));
  };
  var handleSelectAllSites = function handleSelectAllSites(isAll) {
    var _sitesState$sites;
    var sitesIds = (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.reduce(function (ids, site) {
      return [].concat(_toConsumableArray(ids), [site.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(sitesIds);
    } else {
      filteredIds = [];
    }
    setSelectedSitesIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: _objectSpread(_objectSpread({}, changesState.changes), {}, {
        sites: filteredIds
      })
    }));
  };

  /**
   * Method to add new banner item from API
   * @param {Object} params
   */
  var handleAddBannerItem = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
      var isReturn,
        requestOptions,
        response,
        content,
        _content$result,
        _content$result2,
        items,
        updatedBanner,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isReturn = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            _context.prev = 1;
            setChangesState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                loading: true
              });
            });
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(params)
            };
            _context.next = 7;
            return fetch("".concat(ordering.root, "/banners/").concat(banner.id, "/items"), requestOptions);
          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();
          case 10:
            content = _context.sent;
            if (!content.error) {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                changes: {}
              }));
              showToast(_ToastContext.ToastType.Success, t('BANNER_ITEM_ADDED', 'Banner item added'));
              items = [].concat(_toConsumableArray(bannerItemsState.items), [content.result]);
              if (((_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.type) === 'image') {
                setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
                  items: items,
                  images: [].concat(_toConsumableArray(bannerItemsState.images), [content.result])
                }));
              }
              if (((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.type) === 'video') {
                setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
                  items: items,
                  videos: [].concat(_toConsumableArray(bannerItemsState.videos), [content.result])
                }));
              }
              updatedBanner = _objectSpread(_objectSpread({}, banner), {}, {
                items: items
              });
              handleSuccessUpdate && handleSuccessUpdate(updatedBanner);
            } else {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                error: content.result
              }));
            }
            if (!isReturn) {
              _context.next = 14;
              break;
            }
            return _context.abrupt("return", content);
          case 14:
            _context.next = 21;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
            if (!isReturn) {
              _context.next = 21;
              break;
            }
            return _context.abrupt("return", {
              error: true,
              result: _context.t0
            });
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 16]]);
    }));
    return function handleAddBannerItem(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the banner item from API
   * @param {Object} params
   */
  var handleDeleteBannerItem = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(itemId) {
      var requestOptions, response, content, _content$result3, _content$result4, items, updatedBanner;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setChangesState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                loading: true
              });
            });
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context2.next = 6;
            return fetch("".concat(ordering.root, "/banners/").concat(banner.id, "/items/").concat(itemId), requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            content = _context2.sent;
            if (!content.error) {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                changes: {}
              }));
              showToast(_ToastContext.ToastType.Success, t('BANNER_ITEM_DELETED', 'Banner item deleted'));
              items = bannerItemsState.items.filter(function (item) {
                return item.id !== itemId;
              });
              if (((_content$result3 = content.result) === null || _content$result3 === void 0 ? void 0 : _content$result3.type) === 'image') {
                setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
                  items: items,
                  images: bannerItemsState.images.filter(function (item) {
                    return item.id !== itemId;
                  })
                }));
              }
              if (((_content$result4 = content.result) === null || _content$result4 === void 0 ? void 0 : _content$result4.type) === 'video') {
                setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
                  items: items,
                  videos: bannerItemsState.videos.filter(function (item) {
                    return item.id !== itemId;
                  })
                }));
              }
              updatedBanner = _objectSpread(_objectSpread({}, banner), {}, {
                items: items
              });
              handleSuccessUpdate && handleSuccessUpdate(updatedBanner);
            } else {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function handleDeleteBannerItem(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Medthod to update the banner item from API
   */
  var handleUpdateBannerItem = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(payload, itemId) {
      var isReturn,
        requestOptions,
        response,
        content,
        _content$result5,
        _content$result6,
        items,
        images,
        videos,
        updatedBanner,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            isReturn = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
            _context3.prev = 1;
            setChangesState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                loading: true
              });
            });
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(payload)
            };
            _context3.next = 7;
            return fetch("".concat(ordering.root, "/banners/").concat(banner.id, "/items/").concat(itemId), requestOptions);
          case 7:
            response = _context3.sent;
            _context3.next = 10;
            return response.json();
          case 10:
            content = _context3.sent;
            if (!content.error) {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                changes: {}
              }));
              items = bannerItemsState.items.filter(function (item) {
                if (item.id === content.result.id) {
                  Object.assign(item, content.result);
                }
                return true;
              });
              if (((_content$result5 = content.result) === null || _content$result5 === void 0 ? void 0 : _content$result5.type) === 'image') {
                images = bannerItemsState.images.filter(function (item) {
                  if (item.id === content.result.id) {
                    Object.assign(item, content.result);
                  }
                  return true;
                });
                setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
                  items: items,
                  images: images
                }));
              }
              if (((_content$result6 = content.result) === null || _content$result6 === void 0 ? void 0 : _content$result6.type) === 'video') {
                videos = bannerItemsState.videos.filter(function (item) {
                  if (item.id === content.result.id) {
                    Object.assign(item, content.result);
                  }
                  return true;
                });
                setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
                  items: items,
                  videos: videos
                }));
              }
              updatedBanner = _objectSpread(_objectSpread({}, banner), {}, {
                items: items
              });
              handleSuccessUpdate && handleSuccessUpdate(updatedBanner);
              showToast(_ToastContext.ToastType.Success, t('BANNER_ITEM_SAVED', 'Banner item saved'));
            } else {
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                loading: false,
                error: content.result
              }));
            }
            if (!isReturn) {
              _context3.next = 14;
              break;
            }
            return _context3.abrupt("return", content);
          case 14:
            _context3.next = 21;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](1);
            setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
            if (!isReturn) {
              _context3.next = 21;
              break;
            }
            return _context3.abrupt("return", {
              error: true,
              result: _context3.t0
            });
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 16]]);
    }));
    return function handleUpdateBannerItem(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to update the banner from API
   */
  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(payload) {
      var _banner$id, _bannerState$banner, changes, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState({
              loading: true,
              error: null
            });
            changes = payload ? _objectSpread({}, payload) : _objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.changes);
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context4.next = 7;
            return fetch("".concat(ordering.root, "/banners/").concat((_banner$id = banner.id) !== null && _banner$id !== void 0 ? _banner$id : (_bannerState$banner = bannerState.banner) === null || _bannerState$banner === void 0 ? void 0 : _bannerState$banner.id), requestOptions);
          case 7:
            response = _context4.sent;
            _context4.next = 10;
            return response.json();
          case 10:
            content = _context4.sent;
            if (!content.error) {
              setBannerState(_objectSpread(_objectSpread({}, bannerState), {}, {
                banner: content.result
              }));
              setActionState({
                loading: false,
                error: null
              });
              if (handleSuccessUpdate) {
                handleSuccessUpdate(content.result);
              }
              setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
                changes: {}
              }));
              showToast(_ToastContext.ToastType.Success, t('BANNER_SAVED', 'Banner saved'));
            } else {
              setActionState({
                loading: false,
                error: content.result
              });
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            setActionState({
              loading: false,
              error: _context4.t0.message
            });
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function handleUpdateClick(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to update the banner from API
   */
  var handleAddBanner = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var changes, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState({
              loading: true,
              error: null
            });
            changes = _objectSpread(_objectSpread({}, changesState === null || changesState === void 0 ? void 0 : changesState.changes), {}, {
              position: defaultPosition
            });
            if (defaultPosition === 'web_business_page' || defaultPosition === 'app_business_page') {
              if (selectedBusinessIds.length) {
                changes.businesses = selectedBusinessIds;
              }
            }
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(changes)
            };
            _context5.next = 8;
            return fetch("".concat(ordering.root, "/banners"), requestOptions);
          case 8:
            response = _context5.sent;
            _context5.next = 11;
            return response.json();
          case 11:
            content = _context5.sent;
            if (!content.error) {
              setActionState({
                loading: false,
                error: null
              });
              handleSuccessAdd && handleSuccessAdd(_objectSpread(_objectSpread({}, content.result), {}, {
                enabled: true
              }));
              props.onClose && props.onClose();
              showToast(_ToastContext.ToastType.Success, t('BANNER_ADDED', 'Banner added'));
            } else {
              setActionState({
                loading: false,
                error: content.result
              });
            }
            _context5.next = 18;
            break;
          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            setActionState({
              loading: false,
              error: _context5.t0.message
            });
          case 18:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 15]]);
    }));
    return function handleAddBanner() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delete the banner from API
   */
  var handleDeleteBanner = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionState({
              loading: true,
              error: null
            });
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/banners/").concat(banner.id), requestOptions);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
            if (!content.error) {
              setActionState({
                loading: false,
                error: null
              });
              handleSuccessDelete && handleSuccessDelete(banner.id);
              props.onClose && props.onClose();
              showToast(_ToastContext.ToastType.Success, t('BANNER_DELETED', 'Banner deleted'));
            } else {
              setActionState({
                loading: false,
                error: content.result
              });
            }
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            setActionState({
              loading: false,
              error: _context6.t0.message
            });
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleDeleteBanner() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to get business list from API
   */
  var getBusinessList = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var where, conditions, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'enabled',
              value: true
            });
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            fetchEndpoint = where ? ordering.businesses().asDashboard().select(propsToFetch).where(where) : ordering.businesses().asDashboard().select(propsToFetch);
            _context7.next = 9;
            return fetchEndpoint.get();
          case 9:
            _yield$fetchEndpoint$ = _context7.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            pagination = _yield$fetchEndpoint$2.pagination;
            if (!error) {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                businesses: result,
                pagination: pagination
              }));
            } else {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: result
              }));
            }
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: false,
              error: [_context7.t0 || (_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.toString()) || (_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message)]
            }));
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 17]]);
    }));
    return function getBusinessList() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleSelectBusiness = function handleSelectBusiness(businessId, checked) {
    var businessIds = _toConsumableArray(selectedBusinessIds);
    var filteredIds = [];
    if (checked) {
      filteredIds = [].concat(_toConsumableArray(businessIds), [businessId]);
    } else {
      filteredIds = businessIds.filter(function (id) {
        return id !== businessId;
      });
    }
    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };
  var handleSelectAllBusiness = function handleSelectAllBusiness(isAll) {
    var _businessList$busines;
    var businessIds = businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.reduce(function (ids, business) {
      return [].concat(_toConsumableArray(ids), [business.id]);
    }, []);
    var filteredIds = [];
    if (isAll) {
      filteredIds = _toConsumableArray(businessIds);
    } else {
      filteredIds = [];
    }
    setSelectedBusinessIds(filteredIds);
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      business: JSON.stringify(filteredIds)
    }));
  };
  var handleSuccessBannerItemAdd = function handleSuccessBannerItemAdd(newItem) {
    var items = [].concat(_toConsumableArray(bannerItemsState.items), [newItem]);
    if ((newItem === null || newItem === void 0 ? void 0 : newItem.type) === 'image') {
      setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
        items: items,
        images: [].concat(_toConsumableArray(bannerItemsState.images), [newItem])
      }));
    }
    if ((newItem === null || newItem === void 0 ? void 0 : newItem.type) === 'video') {
      setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
        items: items,
        videos: [].concat(_toConsumableArray(bannerItemsState.videos), [newItem])
      }));
    }
    var updatedBanner = _objectSpread(_objectSpread({}, banner), {}, {
      items: items
    });
    handleSuccessUpdate && handleSuccessUpdate(updatedBanner);
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(banner).length === 0) {
      setIsAddMode(true);
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        changes: {}
      }));
      setSelectedSitesIds([]);
      setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
        loading: false,
        items: [],
        images: [],
        videos: []
      }));
    } else {
      var _banner$sites2, _banner$business;
      setIsAddMode(false);
      setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        changes: {}
      }));
      var images = banner === null || banner === void 0 ? void 0 : banner.items.filter(function (item) {
        return item.type === 'image';
      });
      var videos = banner === null || banner === void 0 ? void 0 : banner.items.filter(function (item) {
        return item.type === 'video';
      });
      setBannerItemsState(_objectSpread(_objectSpread({}, bannerItemsState), {}, {
        loading: false,
        items: banner.items,
        images: images,
        videos: videos
      }));
      var sitesIds = banner === null || banner === void 0 ? void 0 : (_banner$sites2 = banner.sites) === null || _banner$sites2 === void 0 ? void 0 : _banner$sites2.reduce(function (ids, site) {
        return [].concat(_toConsumableArray(ids), [site.id]);
      }, []);
      setSelectedSitesIds(sitesIds || []);
      setBannerState(_objectSpread(_objectSpread({}, bannerState), {}, {
        banner: banner
      }));
      var businessIds = banner === null || banner === void 0 ? void 0 : (_banner$business = banner.business) === null || _banner$business === void 0 ? void 0 : _banner$business.reduce(function (ids, business) {
        return [].concat(_toConsumableArray(ids), [business.id]);
      }, []);
      setSelectedBusinessIds(businessIds);
    }
  }, [banner]);
  (0, _react.useEffect)(function () {
    getBusinessList();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    bannerState: bannerState,
    bannerItemsState: bannerItemsState,
    changesState: changesState,
    actionState: actionState,
    isAddMode: isAddMode,
    handleChangeItem: handleChangeItem,
    handleAddBannerItem: handleAddBannerItem,
    handleUpdateBannerItem: handleUpdateBannerItem,
    selectedSitesIds: selectedSitesIds,
    handleSelectSite: handleSelectSite,
    handleSelectAllSites: handleSelectAllSites,
    handleUpdateClick: handleUpdateClick,
    handleAddBanner: handleAddBanner,
    handleDeleteBanner: handleDeleteBanner,
    handleDeleteBannerItem: handleDeleteBannerItem,
    handleSuccessBannerItemAdd: handleSuccessBannerItemAdd,
    businessList: businessList,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness
  })));
};
exports.BannerDetails = BannerDetails;
BannerDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string)
};
BannerDetails.defaultProps = {
  propsToFetch: ['id', 'name', 'logo', 'slug']
};