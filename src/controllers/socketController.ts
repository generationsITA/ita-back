import { addHistory } from '../services';
import { userHandler, disconnectUser } from '../helpers';

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
      socket.broadcast.to(room).emit('message', {
        name: 'System',
        text: `${name} joined ${room}`,
      });
      socket.emit('message', {
        name: 'System',
        text: `You joined ${room}`,
      });

      callback();
    }
  );

  socket.on('sendMessage', ({ text }: RequestMessage) => {
    const adress: string =
      socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;

    const user = userHandler.getUser(socket.id);
    if (!user) {
      return;
    }
    const { name, room } = user;

    const sendingDate = new Date();

    addHistory({ name, message: text, room, date: sendingDate, adress });

    socket.broadcast.to(room).emit('message', { name, text });

    console.log(`${name}: ${text}`);
  });
  socket.on('leaveRoom', () => {
    disconnectUser(socket);
  });

  socket.on('disconnect', () => {
    disconnectUser(socket);
  });
};

export default socketController;
