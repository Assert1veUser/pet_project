const {select_server, add_server, delete_server, select_cpu, add_cpu, delete_cpu, select_ram, add_ram, delete_ram,
    select_drive, add_drive, delete_drive, select_client, add_client, delete_client, select_check, add_check,
    delete_check, add_role} = require("../backend/mongo_back");
module.exports = function(app, db) {
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.get('/server', (req, res) => {
        const auth = req.body;
        module.exports = {auth};
        select_server().then(AllDocuments => {
            console.log(AllDocuments)
            res.status(200)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/server', (req, res) => {
        const data = req.body;
        module.exports = {data}
        add_server().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/server/:id', function(req, res) {
        const data = req.body;
        const id_delete_server = req.params.id;
        module.exports = {id_delete_server, data};
        delete_server().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.get('/cpu', (req, res) => {
        const auth = req.body;
        module.exports = {auth};
        select_cpu().then(AllDocuments => {
            console.log(AllDocuments)
            res.status(200)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/cpu', (req, res) => {
        const data = req.body;
        module.exports = {data}
        add_cpu().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/cpu/:id', function(req, res) {
        const data = req.body;
        const id_delete_cpu = req.params.id;
        module.exports = {id_delete_cpu, data};
        delete_cpu().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.get('/ram', (req, res) => {
        const auth = req.body;
        module.exports = {auth};
        select_ram().then(AllDocuments => {
            console.log(AllDocuments)
            res.status(200)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/ram', (req, res) => {
        const data = req.body;
        module.exports = {data}
        add_ram().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/ram/:id', function(req, res) {
        const data = req.body;
        const id_delete_ram = req.params.id;
        module.exports = {id_delete_ram, data};
        delete_ram().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.get('/drive', (req, res) => {
        const auth = req.body;
        module.exports = {auth};
        select_drive().then(AllDocuments => {
            console.log(AllDocuments)
            res.status(200)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/drive', (req, res) => {
        const data = req.body;
        module.exports = {data}
        add_drive().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/drive/:id', function(req, res) {
        const data = req.body;
        const id_delete_drive = req.params.id;
        module.exports = {id_delete_drive, data};
        delete_drive().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.get('/client', (req, res) => {
        const auth = req.body;
        module.exports = {auth};
        select_client().then(AllDocuments => {
            console.log(AllDocuments)
            res.status(200)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/client', (req, res) => {
        const data = req.body;
        module.exports = {data}
        add_client().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/client/:id', function(req, res) {
        const data = req.body;
        const id_delete_clint = req.params.id;
        module.exports = {id_delete_clint, data};
        delete_client().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.get('/check', (req, res) => {
        const auth = req.body;
        module.exports = {auth};
        select_check().then(AllDocuments => {
            console.log(AllDocuments)
            res.status(200)
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.post('/check', (req, res) => {
        const data = req.body;
        module.exports = {data}
        add_check().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });
    app.delete('/check/:id', function(req, res) {
        const data = req.body;
        const id_delete_check = req.params.id;
        module.exports = {id_delete_check, data};
        delete_check().then(AllDocuments => {
            res.status(200);
            res.send(AllDocuments)
        }).catch(err => {
            console.error('Ошибка при подключении к базе данных:', err);
            res.status(500).send('Ошибка при подключении к базе данных');
        });
    });



};