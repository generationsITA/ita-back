"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userHandler_1 = require("../helpers/userHandler");
const socketController = (socket) => {
    socket.on('join', ({ name }, callback) => {
        const error = userHandler_1.addUser(socket.id, name);
        if (error) {
            return callback({ error });
        }
        socket.join('general');
        console.log(name);
        callback();
    });
    socket.on('sendMessage', (message, callback) => {
        const { name } = userHandler_1.getUser(socket.id);
        console.log(message);
        socket.broadcast.to('general').emit('message', { name, text: message });
        callback();
    });
    socket.on('disconnect', () => {
        userHandler_1.removeUser(socket.id);
    });
};
exports.default = socketController;
