const { DataTypes } = require('sequelize');
const initializeSequelize = require('./sequelize');


const Room = initializeSequelize().define('room', {
    address: {
        type: DataTypes.STRING
    },
    postcode: {
        type: DataTypes.INTEGER
    },
    phone_number: {
        type: DataTypes.STRING
    },
    number_of_employee: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    tableName: 'room',
    timestamps: false
});

module.exports = Room;

