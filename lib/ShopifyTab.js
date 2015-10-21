'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ShopifyTab = function ShopifyTab(props) {
  var className = props.className;
  var children = props.children;
  var active = props.active;
  var text = props.text;
  var href = props.href;

  className += ' next-tab';
  if (active) className += ' next-tab--is-active';
  var aProps = _extends({ className: className, children: children, active: active, text: text, href: href }, props);
  return _react2['default'].createElement(
    'li',
    null,
    _react2['default'].createElement(
      'a',
      _extends({ className: className }, aProps),
      children || text
    )
  );
};

ShopifyTab.propTypes = {
  active: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  text: _react.PropTypes.string,
  children: _react.PropTypes.node
};

exports['default'] = ShopifyTab;
module.exports = exports['default'];