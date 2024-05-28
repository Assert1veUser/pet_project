const { DataTypes } = require('sequelize');
const initializeSequelize = require('./sequelize');


const Task = initializeSequelize().define('task', {
    task: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.INTEGER
    },
    id_employee: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'task',
    timestamps: false
});

module.exports = Task;

