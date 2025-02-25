import { Server, Socket } from 'socket.io';
import { CHAT_EVENTS, USER_EVENTS } from '../types/events.enum';
export function setupUserHandlers(socket: Socket, io: Server) {
    socket.on(USER_EVENTS.USER_JOIN_REQUEST, (username: string) => {
        io.emit(CHAT_EVENTS.CHAT_MESSAGE_RECEIVED, {
            userId: socket.id, message: {
                sender: username,
                message: `${username} joined the chat`,
                timestamp: new Date().toISOString(),
                type: 'system'
            }
        });
    });

    socket.on(USER_EVENTS.USER_DISCONNECT, (username: string) => {
        io.emit(CHAT_EVENTS.CHAT_MESSAGE_RECEIVED, {
            userId: socket.id, message: {
                sender: username,
                message: `${username} left the chat`,
                timestamp: new Date().toISOString(),
                type: 'system'
            }
        });
    });
}