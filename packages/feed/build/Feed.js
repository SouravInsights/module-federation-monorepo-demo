"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

var _theme = _interopRequireDefault(require("@chakra-ui/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Feed = function Feed() {
  return /*#__PURE__*/_react["default"].createElement(_core.ChakraProvider, {
    theme: _theme["default"],
    resetCSS: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, null, /*#__PURE__*/_react["default"].createElement(_core.Text, {
    color: "black",
    fontSize: "xl",
    fontWeight: "extrabold"
  }, "This is the Feed component.")));
};

var _default = Feed;
exports["default"] = _default;