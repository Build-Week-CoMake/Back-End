require('dotenv').config()

let env = (process.env.NODE_ENV == "test") ? "development" : process.env.NODE_ENV
module.exports = require("knex")(require("../knexfile")[env])