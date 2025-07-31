const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database')
const courses = require ('../models/courses')
const users = require ('../models/users')

const Attendance = sequelize.define('Attendance', {
    id_user: {
        type:DataTypes.STRING,
        allowNull:false,
        references: {
            model: users,
            key: 'document'
        }
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    entry_time:{
        type:DataTypes.TIME,
        allowNull:false
    },
    departure_time:{
        type:DataTypes.TIME,
        allowNull:true
    },
    id_course:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: courses,
            key: 'id'
        }
    },


});

//asistencia
module.exports = Attendance;