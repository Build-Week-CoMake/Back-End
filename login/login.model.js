const knex = require("../database/config")

module.exports = {
    get,
    add
}

function get(username = "%") {
    return knex("users")
        .select("*")
        .where("username", "like", username)
}

function add(obj) {
    return knex("users")
        .insert(obj)
}