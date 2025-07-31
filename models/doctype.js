const { DataTypes } = require('sequelize');
const sequelize =require('../config/database')


const doctype = sequelize.define('doctype',{
    type:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
});








module.exports = doctype;