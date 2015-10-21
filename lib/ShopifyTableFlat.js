'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var ShopifyTableFlat = function ShopifyTableFlat(_ref) {
  var headings = _ref.headings;
  var rows = _ref.rows;
  return _react2['default'].createElement(
    _index.ShopifyTable,
    { rootStyle: { backgroundColor: '#fff' } },
    _react2['default'].createElement(
      _index.ShopifyTableHead,
      null,
      _react2['default'].createElement(
        _index.ShopifyTableHeading,
        null,
        _react2['default'].createElement(_index.ShopifyCheckbox, null)
      ),
      headings.map(function (heading, index) {
        return _react2['default'].createElement(
          _index.ShopifyTableHeading,
          { status: heading.status, key: index },
          heading.text
        );
      })
    ),
    _react2['default'].createElement(
      _index.ShopifyTableBody,
      null,
      rows.map(function (row, index) {
        return _react2['default'].createElement(
          _index.ShopifyTableRow,
          { key: index },
          _react2['default'].createElement(
            _index.ShopifyTableData,
            null,
            _react2['default'].createElement(_index.ShopifyCheckbox, null)
          ),
          headings.map(function (heading, index) {
            return _react2['default'].createElement(
              _index.ShopifyTableData,
              { key: index },
              row[heading.prop]
            );
          })
        );
      })
    )
  );
};

exports['default'] = ShopifyTableFlat;
module.exports = exports['default'];