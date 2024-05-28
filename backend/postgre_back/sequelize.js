function initializeSequelize() {
    const {Sequelize} = require('sequelize');
    const auth_employee = require('../../routes/postgresql_routes');
    const sequelize = new Sequelize('pet_project', auth_employee.auth_employee.login, auth_employee.auth_employee.password, {
        host: 'localhost',
        dialect: 'postgres',
    });
    return sequelize;
}

module.exports = initializeSequelize;