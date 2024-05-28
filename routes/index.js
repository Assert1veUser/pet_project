const postgresqlRoutes = require('./postgresql_routes')
const mongodbRoutes = require('./mongodb_routes')
module.exports = function(app, db) {
    postgresqlRoutes(app, db);
    mongodbRoutes(app, db);
};