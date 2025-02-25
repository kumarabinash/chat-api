import { Server, Socket } from 'socket.io';
import { CHAT_EVENTS } from '../types/events.enum';

export function setupChatHandlers(socket: Socket, io: Server) {

    socket.on(CHAT_EVENTS.CHAT_MESSAGE, (message: string) => {
        io.emit(CHAT_EVENTS.CHAT_MESSAGE_RECEIVED, { userId: socket.id, message });
    });
}