"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// conexion a la base de datos

var sequelize = new _sequelize["default"]("railway", "postgres", "TsoAlHjkN19m3GzkBT3j", {
  host: "containers-us-west-202.railway.app",
  logging: false,
  dialect: "postgres",
  port: 7479
});
exports.sequelize = sequelize;