const {MongoClient: MongoClient} = require('mongodb')
const { ObjectId } = require('mongodb');
const initializeSequelize = require('../backend/postgre_back/sequelize')
const {QueryTypes} = require("sequelize");

const select_server = async () =>{
    try {
        const auth = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth.auth.login}:${auth.auth.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('shop')
            .collection('server')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_server = async () =>{
    try {
        const data = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.data.login}:${data.data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        let par_upt = JSON.parse(JSON.stringify(data.data));;
        delete par_upt["login"];
        delete par_upt["password"];
        par_upt.id_cpu = new ObjectId(data.data.id_cpu);
        par_upt.id_ram = new ObjectId(data.data.id_ram);
        par_upt.id_drive = new ObjectId(data.data.id_drive);
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('server')
            .insertOne(par_upt)]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_server = async () =>{
    try {
        const {id_delete_server, data} = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.login}:${data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('server').deleteOne({ '_id': new ObjectId(id_delete_server)})]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}




const select_cpu = async () =>{
    try {
        const auth = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth.auth.login}:${auth.auth.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('shop')
            .collection('cpu')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_cpu = async () =>{
    try {
        const data = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.data.login}:${data.data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        let par_upt = JSON.parse(JSON.stringify(data.data));;
        delete par_upt["login"];
        delete par_upt["password"];
        console.log(par_upt)
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('cpu')
            .insertOne(par_upt)]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_cpu = async () =>{
    try {
        const {id_delete_cpu, data} = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.login}:${data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('cpu').deleteOne({ '_id': new ObjectId(id_delete_cpu)})]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}




const select_ram = async () =>{
    try {
        const auth = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth.auth.login}:${auth.auth.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('shop')
            .collection('ram')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_ram = async () =>{
    try {
        const data = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.data.login}:${data.data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        let par_upt = JSON.parse(JSON.stringify(data.data));;
        delete par_upt["login"];
        delete par_upt["password"];
        console.log(par_upt)
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('ram')
            .insertOne(par_upt)]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_ram = async () =>{
    try {
        const {id_delete_ram, data} = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.login}:${data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('ram').deleteOne({ '_id': new ObjectId(id_delete_ram)})]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}




const select_drive = async () =>{
    try {
        const auth = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth.auth.login}:${auth.auth.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('shop')
            .collection('drive')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_drive = async () =>{
    try {
        const data = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.data.login}:${data.data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        let par_upt = JSON.parse(JSON.stringify(data.data));;
        delete par_upt["login"];
        delete par_upt["password"];
        console.log(par_upt)
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('drive')
            .insertOne(par_upt)]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_drive = async () =>{
    try {
        const {id_delete_drive, data} = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.login}:${data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('drive').deleteOne({ '_id': new ObjectId(id_delete_drive)})]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}


const select_client = async () =>{
    try {
        const auth = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth.auth.login}:${auth.auth.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('shop')
            .collection('client')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_client = async () =>{
    try {
        const data = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.data.login}:${data.data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        let par_upt = JSON.parse(JSON.stringify(data.data));;
        delete par_upt["login"];
        delete par_upt["password"];
        console.log(par_upt)
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('client')
            .insertOne(par_upt)]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_client = async () =>{
    try {
        const {id_delete_clint, data} = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.login}:${data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('client').deleteOne({ '_id': new ObjectId(id_delete_clint)})]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}





const select_check = async () =>{
    try {
        const auth = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth.auth.login}:${auth.auth.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('shop')
            .collection('check')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

const add_check = async () =>{
    try {
        const data = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.data.login}:${data.data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        let par_upt = JSON.parse(JSON.stringify(data.data));;
        delete par_upt["login"];
        delete par_upt["password"];
        console.log(par_upt)
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('check')
            .insertOne({id_client: new ObjectId(par_upt.id_client), price: par_upt.price, date: new Date(),
                id_server: new ObjectId(par_upt.id_server)})]);
        await MongoDBclient.close()
        return "Данные добавлены"
    } catch (e) {
        console.log(e)
    }
}
const delete_check = async () =>{
    try {
        const {id_delete_check, data} = require('../routes/mongodb_routes')
        const MongoDBclient = new MongoClient(`mongodb://${data.login}:${data.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await Promise.all([MongoDBclient
            .db('shop')
            .collection('check').deleteOne({ '_id': new ObjectId(id_delete_check)})]);
        await MongoDBclient.close()
        return "Данные удалены"
    } catch (e) {
        console.log(e)
    }
}

const add_role = async () =>{
    try {
        const auth_employee = require('../routes/postgresql_routes')
        const MongoDBclient = new MongoClient(`mongodb://${auth_employee.auth_employee.login}:${auth_employee.auth_employee.password}@127.0.0.1:27017/shop`)
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        if (auth_employee.auth_employee.type === "admin"){
            const result = await Promise.all([MongoDBclient
                .db('shop').command({
                    createUser: auth_employee.auth_employee.login_new,
                    pwd: auth_employee.auth_employee.password_new,
                    roles: [
                        { role: "dbOwner", db: "shop" }
                    ]
                })
            ]);
            await MongoDBclient.close();
        }else {
            const result = await Promise.all([MongoDBclient
                .db('shop').command({
                    createUser: auth_employee.auth_employee.login_new,
                    pwd: auth_employee.auth_employee.password_new,
                    roles: [
                        {role: auth_employee.auth_employee.type, db: "shop"}
                    ]
                })
            ]);
            await MongoDBclient.close();
        }
        initializeSequelize().query('SELECT add_role(?, ?, ?, ?);', {
            replacements: [auth_employee.auth_employee.login_new, auth_employee.auth_employee.password_new, auth_employee.auth_employee.type, auth_employee.auth_employee.id_employee],
            type: QueryTypes.SELECT
        })
            .then(results => {
                console.log(results);
            })
            .catch(error => {
                console.error('Error executing custom query:', error);
            });
        return "Роль создана"
    } catch (e) {
        console.log(e)
    }
}

module.exports = {select_server, add_server, delete_server, select_cpu, add_cpu, delete_cpu, select_ram, add_ram,
    delete_ram, select_drive, add_drive, delete_drive, select_client, add_client, delete_client, select_check,
    add_check, delete_check, add_role};