import { userHandler } from '.';

const disconnectUser = (socket: SocketIO.Socket) => {
  const user = userHandler.getUser(socket.id);
  if (!user) {
    return;
  }
  const { name, room } = user;
  userHandler.removeUser(socket.id);
  socket.broadcast.to(room).emit('message', {
    name: 'System',
    text: `${name} disconnected from ${room}`,
  });
  socket.leave(room);
};

export default disconnectUser;
