'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShopifyTab = require('./ShopifyTab');

var _ShopifyTab2 = _interopRequireDefault(_ShopifyTab);

var ShopifyTabs = function ShopifyTabs(_ref) {
  var tabs = _ref.tabs;
  var children = _ref.children;

  var value = undefined;
  if (children) {
    value = children;
  } else if (tabs) {
    value = tabs.map(function (tab, index) {
      return _react2['default'].createElement(_ShopifyTab2['default'], _extends({}, tab, { key: index }));
    });
  }
  return _react2['default'].createElement(
    'ul',
    { className: 'next-tab__list' },
    value
  );
};

ShopifyTabs.propTypes = {
  tabs: _react.PropTypes.arrayOf(_react.PropTypes.shape(_ShopifyTab2['default'].propTypes)),
  children: _react.PropTypes.node
};

exports['default'] = ShopifyTabs;
module.exports = exports['default'];