'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ShopifyContainer = function ShopifyContainer(_ref) {
  var children = _ref.children;
  return _react2['default'].createElement(
    'div',
    { className: 'next-grid next-grid--outer-grid' },
    _react2['default'].createElement(
      'div',
      { className: 'next-grid__cell' },
      children
    )
  );
};

ShopifyContainer.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports['default'] = ShopifyContainer;
module.exports = exports['default'];