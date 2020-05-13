"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
exports.addUser = (id, name) => {
    name = name.trim().toLowerCase();
    const isUserExist = users.find(user => user.name === name);
    if (!name) {
        return 'Name are required!';
    }
    if (isUserExist) {
        return 'This name is taken';
    }
    const user = { id, name };
    users.push(user);
    return null;
};
exports.getUser = (id) => users.find(user => user.id === id);
exports.removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1)[0];
    }
};
