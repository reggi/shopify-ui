'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ShopifyCheckbox = function ShopifyCheckbox(props) {
  return _react2['default'].createElement(
    'div',
    { style: { position: 'relative' } },
    _react2['default'].createElement('input', _extends({ className: 'next-checkbox', type: 'checkbox' }, props)),
    _react2['default'].createElement('span', { className: 'next-checkbox--styled' })
  );
};

exports['default'] = ShopifyCheckbox;
module.exports = exports['default'];