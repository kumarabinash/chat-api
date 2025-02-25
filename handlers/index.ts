import { Server, Socket } from 'socket.io';
import { setupChatHandlers } from './chatHandlers';
import { setupUserHandlers } from './userHandlers';

export function setupSocketHandlers(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);

    setupChatHandlers(socket, io);
    setupUserHandlers(socket, io);
  });
}