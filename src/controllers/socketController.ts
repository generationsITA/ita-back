import { userHandler } from '../helpers';

interface RequestMessage {
  id?: string;
  text: string;
}

const socketController = (socket: SocketIO.Socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const error = userHandler.addUser(socket.id, name, room);

    if (error) {
      return callback({ error });
    }
    console.log(name);
    socket.join(room);

    callback();
  });

  socket.on('sendMessage', ({ text }: RequestMessage) => {
    // const address =
    // socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
    const { name } = userHandler.getUser(socket.id);

    socket.broadcast.to('general').emit('message', { name, text });
    console.log(`${name}: ${text}`);
  });

  socket.on('disconnect', () => {
    userHandler.removeUser(socket.id);
  });
};
export default socketController;
