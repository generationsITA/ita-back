import * as http from 'http';
import * as express from 'express';
import * as socketio from 'socket.io';
import socketController from './controllers/socketController';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', socket => {
  socketController(socket);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(5500, () => console.log('Server spinning'));
