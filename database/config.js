require('dotenv').config({ path: "../" })
module.exports = require("knex")(require("../knexfile")[process.env.NODE_ENV || "development"])