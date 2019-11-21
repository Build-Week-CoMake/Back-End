const knex = require("../database/config")
module.exports = {
    get,
    add,
    edit,
    del
}

async function get(obj = {}) {
    let len = Object.keys(obj).length

    let issues = {}
    let votes = {}

    if (!len) {
        issues = await knex("issues")
            .select("*")
    } else {
        issues = await knex("issues")
            .select("*")
            .where(obj)
    }

    votes = await knex("upvotes")
        .select("*")

    let reduced = votes.reduce((acc, val) => {
        let exists = acc[val.issue_id]
        return {
            ...acc,
            [val.issue_id]: (exists) ? acc[val.issue_id] + 1 : 1
        }
    }, {})

    let joined = issues.map(v => {
        return {
            ...v,
            count: reduced[v.id] || 0
        }
    })

    return joined
}

function add(obj) {
    return knex("issues").insert(obj)
}

function edit(id, obj, user_id) {
    return knex("issues")
        .where({
            id,
            user_id
        })
        .update(obj)
}

function del(obj) {
    return knex("issues").where(obj).del()
}