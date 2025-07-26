const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database')

const Attendance = sequelize.define('Attendance', {
    id_user: {
        type:DataTypes.STRING,
        allowNull:false
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
        allowNull:false
    },


});


module.exports = Attendance;