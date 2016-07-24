'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RabbitModulesSizeAnalyzer = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); // -*- mode: js -*-

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _lodash = require('lodash.includes');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var red = _chalk2.default.red;
var yellow = _chalk2.default.yellow;
var green = _chalk2.default.green;
var cyan = _chalk2.default.cyan;
var bold = _chalk2.default.bold;
var gray = _chalk2.default.gray;

var defaultOptions = {
  threshold: 2000,
  range: 1000
};

var fmtSize = function fmtSize(size) {
  if (size < 2048) return size + gray(' B');
  size /= 1024;
  if (size < 2048) return size + gray(' KB');
  size /= 1024;
  return Math.round(size) + gray(' MB');
};

var sizeRating = function sizeRating(threshold, size) {
  if (size > threshold) return red(size);
  return green(size);
};

var shortWithSize = function shortWithSize(a, b) {
  return b.size - a.size;
};

var logChunksData = function logChunksData(chunk) {
  console.log(bold(chunk.size) + ' ' + chunk.files[0]);
  return chunk;
};

var logModulesData = function logModulesData(threshold) {
  return function (module) {
    console.log(' |- ' + sizeRating(threshold, module.size) + ' ' + module.name);
    return module;
  };
};

function analysis(stats) {
  var st = stats.toJson();

  var logModules = logModulesData(this.threshold);

  st.chunks.forEach(function (c) {
    logChunksData(c);
    st.modules.filter(function (m) {
      return (0, _lodash2.default)(m.chunks, c.id);
    }).sort(shortWithSize).forEach(function (m) {
      return logModules(m);
    });
    console.log('');
  });
}

var RabbitModulesSizeAnalyzer = exports.RabbitModulesSizeAnalyzer = function () {
  function RabbitModulesSizeAnalyzer(opts) {
    _classCallCheck(this, RabbitModulesSizeAnalyzer);

    var _Object$assign = Object.assign({}, defaultOptions, opts);

    var threshold = _Object$assign.threshold;

    this.threshold = threshold;
  }

  _createClass(RabbitModulesSizeAnalyzer, [{
    key: 'apply',
    value: function apply(compiler) {
      compiler.plugin('done', analysis.bind(this));
    }
  }]);

  return RabbitModulesSizeAnalyzer;
}();