import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('e-commerce-ts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })

  export default sequelize;