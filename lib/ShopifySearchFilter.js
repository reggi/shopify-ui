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

var ShopifyFilterInput = function ShopifyFilterInput(props) {
  var formProps = (0, _helpersFilterProps2['default'])(props, 'form');
  var labelProps = (0, _helpersFilterProps2['default'])(props, 'label');
  var inputProps = (0, _helpersFilterProps2['default'])(props, 'input');
  if (!labelProps.htmlFor && inputProps.id) inputProps.id = labelProps.htmlFor;
  if (!inputProps.id && labelProps.htmlFor) labelProps.htmlFor = inputProps.id;
  return _react2['default'].createElement(
    'div',
    { className: 'next-card__section next-card__section--no-bottom-spacing', style: { backgroundColor: '#fff' } },
    _react2['default'].createElement(
      'div',
      { className: 'obj-filter hide-when-printing table-filter-container show-saved-search-actions' },
      _react2['default'].createElement(
        'div',
        { className: 'next-input-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'next-field__connected-wrapper' },
          _react2['default'].createElement(
            'form',
            _extends({ acceptCharset: 'UTF-8', className: 'next-form next-form--full-width' }, formProps),
            _react2['default'].createElement('label', _extends({ className: 'next-label helper--visually-hidden' }, labelProps)),
            _react2['default'].createElement(
              'div',
              { className: 'next-input--stylized next-field--connected' },
              _react2['default'].createElement('span', { className: 'next-input__add-on next-input__add-on--before' }),
              _react2['default'].createElement('input', _extends({ className: 'next-input next-input--invisible', type: 'text' }, inputProps))
            )
          )
        )
      )
    )
  );
};

exports['default'] = ShopifyFilterInput;
module.exports = exports['default'];