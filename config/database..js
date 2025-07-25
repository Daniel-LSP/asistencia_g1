const { Sequelize } = require('sequelize');
require("dotenv").config();//cargar las variables de entorno


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.HOST,
        dialect:'postgres'

    }
)

module.exports = sequelize;