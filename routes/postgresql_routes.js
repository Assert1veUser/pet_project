const initializeSequelize = require('../backend/postgre_back/sequelize')
const {QueryTypes} = require("sequelize");
const {add_role} = require("../backend/mongo_back");
module.exports = function(app, db) {
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.post('/authentication', (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        initializeSequelize().authenticate()
            .then(r => res.send('Authentication successful') && res.status(200))
            .catch(err => { console.error('Unable to connect to the database:', err) &&
            res.send('Unable to connect to the database:', err) && res.status(400);});;
    });
    app.get('/employee', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        const Employee = require("../backend/postgre_back/Employee")
        const data = await Employee.findAll();
        res.status(200)
        res.send(data)
    });
    app.put('/employee', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let id = auth_employee.id
        let par_upt = JSON.parse(JSON.stringify(auth_employee));;
        delete par_upt["login"];
        delete par_upt["password"];
        delete par_upt["id"];
        const Employee = require("../backend/postgre_back/Employee")
        Employee.update(par_upt, {
            where: {
                id : id
            }
        }).then((result) => {
            console.log(result);
            res.status(200)
            res.send('The data has been added successfully')
        }).catch(err => {
            res.status(400)
            res.send('error updating data')
        });

    });
    app.post('/employee', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let par_upt = JSON.parse(JSON.stringify(auth_employee));
        delete par_upt["login"];
        delete par_upt["password"];
        const Employee = require("../backend/postgre_back/Employee")
        try {
            const employee = await Employee.create(par_upt);
            res.status(200);
            res.json(employee);
        } catch (error) {
            console.log(error)
            res.status(400).json('error inserting data');
        }
    });
    app.delete('/employee/:id', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let par_upt = JSON.parse(JSON.stringify(auth_employee));
        delete par_upt["login"];
        delete par_upt["password"];
        const Employee = require("../backend/postgre_back/Employee")
        try {
            const deleted = await Employee.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(200).send();
                res.send('The user has been successfully deleted');
            } else {
                res.status(404).json({ error: 'The user does not exist' });
            }
        } catch (error) {
            console.log(error)
            res.status(400).json('error deleting data');
        }
    });





    app.get('/room', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        const Room = require("../backend/postgre_back/room")
        const data = await Room.findAll();
        res.status(200)
        res.send(data)
    });
    app.put('/room', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let id = auth_employee.id
        let par_upt = JSON.parse(JSON.stringify(auth_employee));;
        delete par_upt["login"];
        delete par_upt["password"];
        delete par_upt["id"];
        const Room = require("../backend/postgre_back/room")
        Room.update(par_upt, {
            where: {
                id : id
            }
        }).then((result) => {
            console.log(result);
            res.status(200)
            res.send('The data has been added successfully')
        }).catch(err => {
            res.status(400)
            res.send('error updating data')
        });

    });
    app.post('/room', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let par_upt = JSON.parse(JSON.stringify(auth_employee));
        delete par_upt["login"];
        delete par_upt["password"];
        const Room = require("../backend/postgre_back/room")
        try {
            const room = await Room.create(par_upt);
            res.status(200);
            res.json(room);
        } catch (error) {
            console.log(error)
            res.status(400).json('error inserting data');
        }
    });
    app.delete('/room/:id', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let par_upt = JSON.parse(JSON.stringify(auth_employee));
        delete par_upt["login"];
        delete par_upt["password"];
        const Room = require("../backend/postgre_back/room")
        try {
            const deleted = await Room.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
                res.send('The user has been successfully deleted')
            } else {
                res.status(404).json({ error: 'The user does not exist' });
            }
        } catch (error) {
            console.log(error)
            res.status(400).json('error deleting data');
        }
    });




    app.get('/task', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        const Task = require("../backend/postgre_back/task")
        const data = await Task.findAll();
        res.status(200)
        res.send(data)
    });
    app.put('/task', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let id = auth_employee.id
        let par_upt = JSON.parse(JSON.stringify(auth_employee));;
        delete par_upt["login"];
        delete par_upt["password"];
        delete par_upt["id"];
        const Task = require("../backend/postgre_back/task")
        Task.update(par_upt, {
            where: {
                id : id
            }
        }).then((result) => {
            console.log(result);
            res.status(200)
            res.send('The data has been added successfully')
        }).catch(err => {
            res.status(400)
            res.send('error updating data')
        });

    });
    app.post('/task', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let par_upt = JSON.parse(JSON.stringify(auth_employee));
        delete par_upt["login"];
        delete par_upt["password"];
        const Task = require("../backend/postgre_back/task")
        try {
            const room = await Task.create(par_upt);
            res.status(200);
            res.json(room);
        } catch (error) {
            console.log(error)
            res.status(400).json('error inserting data');
        }
    });
    app.delete('/task/:id', async (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee};
        let par_upt = JSON.parse(JSON.stringify(auth_employee));
        delete par_upt["login"];
        delete par_upt["password"];
        const Task = require("../backend/postgre_back/task")
        try {
            const deleted = await Task.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(200);
                res.send('The user has been successfully deleted')
            } else {
                res.status(404).json({ error: 'The user does not exist' });
            }
        } catch (error) {
            console.log(error)
            res.status(400).json('error deleting data');
        }
    });

    app.post('/add_role', (req, res) => {
        const auth_employee = req.body;
        module.exports = {auth_employee}
        add_role().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });

    // app.post('/add_role_postgres', async (req, res) => {
    //     const auth_employee = req.body;
    //     module.exports = {auth_employee};
    //     initializeSequelize().query('SELECT add_role(?, ?, ?, ?);', {
    //         replacements: [auth_employee.login_new, auth_employee.password_new, auth_employee.type, auth_employee.id_employee],
    //         type: QueryTypes.SELECT
    //     })
    //         .then(results => {
    //             console.log(results);
    //             res.status(200)
    //             res.send('The role has been added successfully')
    //         })
    //         .catch(error => {
    //             console.error('Error executing custom query:', error);
    //             res.status(400)
    //             res.send('error added role')
    //         });
    // });

};