"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToSlug = exports.randomString = exports.deepEqual = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  var charactersLength = alphabet.length;

  for (var i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

exports.randomString = randomString;

var deepEqual = function deepEqual(object1, object2) {
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var _i = 0, _keys = keys1; _i < _keys.length; _i++) {
    var key = _keys[_i];
    var val1 = object1[key];
    var val2 = object2[key];
    var areObjects = isObject(val1) && isObject(val2);

    if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
};

exports.deepEqual = deepEqual;

var isObject = function isObject(object) {
  return object != null && _typeof(object) === 'object';
};

var stringToSlug = function stringToSlug(str) {
  var _str;

  str = str.replace(/^\s+|\s+$/g, ''); // trim

  str = (_str = str) === null || _str === void 0 ? void 0 : _str.toLowerCase(); // remove accents, swap ñ for n, etc

  var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaaaeeeeiiiioooouuuunc------';

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '_') // collapse whitespace and replace by _
  .replace(/-+/g, '_') // collapse dashes
  .replace(/^-+/, '') // trim - from start of text
  .replace(/-+$/, ''); // trim - from end of text

  return str;
};

exports.stringToSlug = stringToSlug;