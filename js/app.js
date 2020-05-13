"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const socketController_1 = require("./controllers/socketController");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connect', socketController_1.default);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
server.listen(5500, () => console.log('Server spinning'));
