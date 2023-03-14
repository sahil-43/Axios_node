let config = require('../config/config')

let knex = require("knex")({
    client: "mysql2",
    connection: {
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database,
    }
})

knex.raw('select 1').then(() => {
    console.log("connected to database")
}).catch((error) => {
    console.log("Not connected to database", error)
})

module.exports = knex 