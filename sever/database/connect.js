import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise'
import {Users, Storys, Donations} from '../model/index.js'


const db = {} 
const dbTemplate = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CharitiApp'
}


try {
    const connection = await mysql.createConnection({
        host: dbTemplate.host,
        user: dbTemplate.user,
        password: dbTemplate.password
    })

    await connection.query('CREATE DATABASE IF NOT EXISTS ' + dbTemplate.database)

    const sequelize = new Sequelize(dbTemplate.database, dbTemplate.user, dbTemplate.password, { dialect: 'mysql'})



    db.Users = Users(sequelize)
    db.Storys = Storys(sequelize)
    db.Donations = Donations(sequelize)

    db.Users.hasMany(db.Storys)
    db.Storys.belongsTo(db.Users)

    db.Storys.hasMany(db.Donations)
    db.Donations.belongsTo(db.Storys)



//     db.Saloons.hasOne(db.Workers)
// db.Workers.belongsTo(db.Saloons)

// db.Saloons.hasMany(db.Services)
// db.Services.belongsTo(db.Saloons)

    await sequelize.sync({ alter: true })
    
} catch (error) {

    console.log(error)
    console.log('Nepavyko prisijungti prie duomenų bazės');
}

export default db