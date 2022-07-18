"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
//En BD la tabla se llama usuarios.
//Sí se crea 'Usuario' con mayúscula en db.define('Usuario', ...) sale error. Se supone que no debería.
const Usuario = connection_1.default.define('usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map