const { DataTypes } = require ("sequelize");
const sequelize =require('../config/database');

const users = sequelize.define('users',{
    document:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    document_type:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false

    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false
    }


});

module.exports = users;