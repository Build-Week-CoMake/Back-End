const knex = require("../database/config")
module.exports = {
    get,
    add,
    edit,
    del
}

function get(obj) {
    if (obj) {
        return knex("issues")
            .select("*")
            .where(obj)
    }
    else {
        return knex("issues")
            .select("*")
    }
}

function add(obj) {
    return knex("issues").insert(obj)
}

function edit(id, obj) {
    return knex("issues")
        .where("id", "=", id)
        .update(obj)
}

function del(obj) {
    return knex("issues").where(obj).del()
}