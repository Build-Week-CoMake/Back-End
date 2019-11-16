const express = require("express")
const server = express()
const helmet = require("helmet")
const login_route = require("./login/login.route")
const auth_route = require("./auth/auth.route")

server.use(helmet())
server.use(express.json())
server.use("/login", login_route)
server.use("/auth", auth_route)

module.exports = server