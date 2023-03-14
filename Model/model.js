let knex = require("../db/connection")



async function getdata(params) {
    let user = await knex("fetcheapi").where("id", params.id).catch((err) => {
        return false
    })
    return user
}

async function adddata(params) {
    let add = await knex("fetchapi").insert(params).catch((err) => {
        return err.sqlMessage
    })
    return add
}

module.exports = {
    getdata, adddata
}