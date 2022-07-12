import { Sequelize } from 'sequelize'

const db = new Sequelize('bd_node_ts', 'machuca', 'machuca', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false,
})

export default db
