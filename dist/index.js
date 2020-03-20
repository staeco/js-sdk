'use strict';

exports.__esModule = true;
exports.createClient = undefined;

var _meta = require('./meta.json');

var _meta2 = _interopRequireDefault(_meta);

var _sutroClient = require('sutro-client');

var _sutroClient2 = _interopRequireDefault(_sutroClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createClient = function createClient() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var key = _ref.key,
      _ref$root = _ref.root,
      root = _ref$root === undefined ? 'https://municipal.systems/' : _ref$root,
      rest = _objectWithoutProperties(_ref, ['key', 'root']);

  if (typeof key !== 'string') throw new Error('Invalid key option!');
  if (typeof root !== 'string') throw new Error('Invalid base option!');
  var opts = Object.assign({}, rest, {
    root: root,
    rewriteLargeRequests: true,
    simple: true,
    options: Object.assign({ key: key }, rest.options)
  });
  return (0, _sutroClient2.default)(_meta2.default, opts);
};
exports.createClient = createClient;