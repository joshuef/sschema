"use strict";

var _resolveableMap = _interopRequireDefault(require("../src/resolveableMap.json"));

var _resolveableItem = _interopRequireDefault(require("../src/resolveableItem.json"));

var _filesMap = _interopRequireDefault(require("../src/filesMap.json"));

var _fileItem = _interopRequireDefault(require("../src/fileItem.json"));

var _safeId = _interopRequireDefault(require("../src/safeId.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  FileItem: _fileItem.default,
  FilesMap: _filesMap.default,
  ResolveableItem: _resolveableItem.default,
  ResolveableMap: _resolveableMap.default,
  SafeId: _safeId.default
};