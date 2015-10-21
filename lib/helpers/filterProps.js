'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unprefixify = function unprefixify(prefix, key) {
  var stripped = key.replace(prefix, '');
  return stripped[0].toLowerCase() + stripped.slice(1);
};

var filtered = function filtered(props, prefix) {
  if (typeof prefix === 'string') prefix = new RegExp('^' + prefix);
  return Object.keys(props).filter(function (key) {
    return prefix.test(key);
  }).map(function (key) {
    return _defineProperty({}, unprefixify(prefix, key), props[key]);
  }).reduce(function (props, prop) {
    return _extends({}, props, prop);
  }, {});
};

exports['default'] = filtered;
module.exports = exports['default'];