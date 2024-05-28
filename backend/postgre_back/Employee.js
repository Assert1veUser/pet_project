const { DataTypes } = require('sequelize');
const initializeSequelize = require('./sequelize');


const Employee = initializeSequelize().define('employee', {
    full_name: {
        type: DataTypes.STRING
    },
    job_title: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    },
    experience: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.INTEGER
    },
    id_room: {
        type: DataTypes.INTEGER
    },
    age: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true,
    tableName: 'employee',
    timestamps: false
});

module.exports = Employee;

