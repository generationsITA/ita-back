import { userHandler } from '../helpers';

const socketController = (socket: SocketIO.Socket) => {
  socket.on('join', ({ name }, callback) => {
    const error = userHandler.addUser(socket.id, name);

    if (error) {
      return callback({ error });
    }
    console.log(name);
    socket.join('general');

    callback();
  });

  socket.on('sendMessage', ({ message }) => {
    // const address =
    // socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
    const { name } = userHandler.getUser(socket.id);
    socket.broadcast.to('general').emit('message', { name, text: message });
  });

  socket.on('disconnect', () => {
    userHandler.removeUser(socket.id);
  });
};
export default socketController;
