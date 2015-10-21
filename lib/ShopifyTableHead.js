'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpersFilterProps = require('./helpers/filterProps');

var _helpersFilterProps2 = _interopRequireDefault(_helpersFilterProps);

var ShopifyTableHead = function ShopifyTableHead(props) {
  return _react2['default'].createElement(
    'thead',
    (0, _helpersFilterProps2['default'])(props, 'thead'),
    _react2['default'].createElement(
      'tr',
      (0, _helpersFilterProps2['default'])(props, 'tr'),
      props.children || props.text || ''
    )
  );
};

ShopifyTableHead.propTypes = {
  children: _react.PropTypes.node,
  text: _react.PropTypes.string
};

exports['default'] = ShopifyTableHead;
module.exports = exports['default'];