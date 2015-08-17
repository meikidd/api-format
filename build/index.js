'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SUCCESS = 200,
    ERROR = 500;

var ApiFormat = (function () {
  function ApiFormat() {
    _classCallCheck(this, ApiFormat);
  }

  _createClass(ApiFormat, null, [{
    key: 'success',
    value: function success() {
      var message = arguments[0] === undefined ? 'success' : arguments[0];
      var data = arguments[1] === undefined ? {} : arguments[1];

      return {
        status: SUCCESS,
        message: message,
        data: data
      };
    }
  }, {
    key: 'isSuccess',
    value: function isSuccess() {
      var json = arguments[0] === undefined ? {} : arguments[0];

      return json.status === SUCCESS ? true : false;
    }
  }, {
    key: 'error',
    value: function error() {
      var message = arguments[0] === undefined ? 'unkown error' : arguments[0];

      return {
        status: ERROR,
        message: message
      };
    }
  }, {
    key: 'isError',
    value: function isError() {
      var json = arguments[0] === undefined ? {} : arguments[0];

      return json.status === ERROR ? true : false;
    }
  }]);

  return ApiFormat;
})();

exports['default'] = ApiFormat;
module.exports = exports['default'];