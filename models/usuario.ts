import { DataTypes } from 'sequelize'
import db from '../db/connection'

//En BD la tabla se llama usuarios.
//Sí se crea 'Usuario' con mayúscula en db.define('Usuario', ...) sale error. Se supone que no debería.
const Usuario = db.define('usuario', {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
})

export default Usuario
