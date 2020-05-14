import { userHandler } from '../helpers';

interface RequestMessage {
  id?: string;
  text: string;
}

interface chatAuth {
  name: string;
  room: string;
}

const socketController = (socket: SocketIO.Socket) => {
  socket.on(
    'join',
    ({ name, room }: chatAuth, callback: (error?: object) => void) => {
      const error = userHandler.addUser(socket.id, name, room);

      if (error) {
        return callback({ error });
      }
      console.log(name);
      socket.join(room);

      callback();
    }
  );

  socket.on('sendMessage', ({ text }: RequestMessage, callback: () => void) => {
    // const address =
    // socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
    const { name, room } = userHandler.getUser(socket.id);

    socket.broadcast.to(room).emit('message', { name, text });
    console.log(`${name}: ${text}`);
    callback();
  });

  socket.on('disconnect', () => {
    userHandler.removeUser(socket.id);
  });
};
export default socketController;
