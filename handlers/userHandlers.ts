import { Server, Socket } from 'socket.io';
import { USER_EVENTS } from '../types/events.enum';
export function setupUserHandlers(socket: Socket, io: Server) {
    socket.on(USER_EVENTS.USER_JOIN_REQUEST, (username: string) => {
        io.emit(USER_EVENTS.USER_JOINED, { userId: socket.id, username });
    });

    socket.on(USER_EVENTS.USER_DISCONNECT, () => {
        io.emit(USER_EVENTS.USER_LEFT, { userId: socket.id });
    });
}