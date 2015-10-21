'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpersFilterProps = require('./helpers/filterProps');

var _helpersFilterProps2 = _interopRequireDefault(_helpersFilterProps);

var ShopifyTable = function ShopifyTable(props) {
  var rootProps = (0, _helpersFilterProps2['default'])(props, 'root');
  var tableProps = (0, _helpersFilterProps2['default'])(props, 'table');
  return _react2['default'].createElement(
    'div',
    _extends({ className: 'next-card__section custom-bg-white' }, rootProps),
    _react2['default'].createElement(
      'div',
      { className: 'table-wrapper' },
      _react2['default'].createElement(
        'table',
        _extends({ className: 'table-hover expanded' }, tableProps),
        props.children
      )
    )
  );
};

ShopifyTable.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports['default'] = ShopifyTable;
module.exports = exports['default'];