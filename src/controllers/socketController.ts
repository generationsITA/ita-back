import { addUser, removeUser, getUser } from '../helpers/userHandler';

const socketController = (socket: SocketIO.Socket) => {
  socket.on('join', ({ name }, callback) => {
    const error = addUser(socket.id, name);

    if (error) {
      return callback({ error });
    }
    console.log(name);
    socket.join('general');

    callback();
  });

  socket.on('sendMessage', ({ message }) => {
    const { name } = getUser(socket.id);
    console.log(name);
    console.log(message);
    socket.broadcast.to('general').emit('message', { name, text: message });
  });

  socket.on('disconnect', () => {
    removeUser(socket.id);
  });
};
export default socketController;
