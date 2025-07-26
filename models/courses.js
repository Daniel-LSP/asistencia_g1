const { DataTypes} = require('sequelize');
const sequelize =require('../config/database');

const courses =sequelize.define('courses',{

    
    name_course:{
        type:DataTypes.STRING,
        allowNull:false
     },
    area:{
        type:DataTypes.STRING,
        allowNull:false,  
     },
    group:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    duration:{
         type:DataTypes.STRING,
         allowNull:false,
     },
    quotas:{
        type:DataTypes.INTEGER,
        allowNull:false
     }

});

module.exports = courses;

