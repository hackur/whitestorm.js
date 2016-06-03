'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _Light2 = require('../core/Light');

var _Light3 = _interopRequireDefault(_Light2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmbientLight = function (_Light) {
  (0, _inherits3.default)(AmbientLight, _Light);

  function AmbientLight() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, AmbientLight);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AmbientLight).call(this, params, 'ambientlight'));

    _this.build(params);

    (0, _get3.default)((0, _getPrototypeOf2.default)(AmbientLight.prototype), 'wrap', _this).call(_this, 'noshadows');
    return _this;
  }

  (0, _createClass3.default)(AmbientLight, [{
    key: 'build',
    value: function build() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _scope = this;

      return new _promise2.default(function (resolve) {
        _scope.setNative(new THREE.AmbientLight(params.light.color, params.light.intensity));

        resolve();
      });
    }
  }]);
  return AmbientLight;
}(_Light3.default);

exports.default = AmbientLight;
//# sourceMappingURL=AmbientLight.js.map