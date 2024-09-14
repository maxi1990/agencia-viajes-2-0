import Sequelize from 'sequelize';
// AQUI ESTA EL IMPORT (1)
import dotenv from 'dotenv'
// Y EL CONFIG (2)
dotenv.config()


// Y REESCRIBIMOS LOS DATOS CON PROCESS.ENV (3)
const db = new Sequelize(process.env.DATABASE_URL,{
     define:{
        timestamps: false
     },
     pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
     },
     operatorAliases: false
})

export default db;