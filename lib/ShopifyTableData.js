'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ShopifyTableData = function ShopifyTableData(props) {
  var text = props.text;
  var children = props.children;

  var tdProps = _extends({ text: text, children: children }, props);
  return _react2['default'].createElement(
    'td',
    tdProps,
    children || text || ''
  );
};

exports['default'] = ShopifyTableData;
module.exports = exports['default'];