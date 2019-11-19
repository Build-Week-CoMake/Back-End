const express = require('express');
const server = express();
const helmet = require('helmet');
var cors = require('cors');
const login_route = require('./login/login.route');
const upvote_route = require('./upvote/upvote.route');
const issues_route = require("./issues/issues.route")

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/login', login_route);
server.use('/upvote', upvote_route);
server.use('/issues', issues_route);

module.exports = server;
