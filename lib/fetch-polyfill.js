"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
if (!globalThis.fetch) {
  globalThis.fetch = _nodeFetch["default"];
  global.fetch = _nodeFetch["default"];
}