import http from 'http';
import dotenv from 'dotenv';
import logger from 'morgan';
import express from 'express';
import socketio from 'socket.io';
import errorhandler from 'errorhandler';

import router from './routes';
import { port } from './configs/general';
import initMongoDB from './configs/mongodb';
import socketController from './controllers/socketController';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

dotenv.config();

initMongoDB();

app.use(logger(process.env.NODE_ENV));

app.use('/api', router);

io.on('connect', socket => {
  socketController(socket);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(errorhandler());

server.listen(port, () => console.log(`Server spinning on port ${port}`));
