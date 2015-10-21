'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ShopifyTableHeading = function ShopifyTableHeading(props) {
  var text = props.text;
  var children = props.children;

  var thProps = _extends({ text: text, children: children }, props);
  return _react2['default'].createElement(
    'th',
    thProps,
    children || text || ''
  );
};

exports['default'] = ShopifyTableHeading;
module.exports = exports['default'];