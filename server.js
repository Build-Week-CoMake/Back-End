const express = require("express")
const server = express()
const helmet = require("helmet")
var cors = require('cors')
const login_route = require("./login/login.route")
const auth_route = require("./auth/auth.route")

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use("/login", login_route)
server.use("/auth", auth_route)

module.exports = server