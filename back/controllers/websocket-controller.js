// Daniel Cruz
import { MessageConnection as Connection } from "../databases/message-connection/message-connection.js";

const connection = new Connection();

export const socketController = (socket) => {
  
    console.log("Cliente conectado: ", socket.id); 

    socket.on('disconnect', () => {
        console.log("Cliente desconectado", socket.id);
    });

    socket.on('enviar-mensaje', async (payload) => {
      try {
        const savedMessage = await connection.insertMessage(payload);

        socket.broadcast.emit('recibir-mensaje', savedMessage);
    
      } catch (error) {
        console.error('Error al guardar mensaje:', error);
      }
    });

    socket.on('cargar-mensajes', async (userId, callback) => {
      try {
        const mensajes = await connection.getUserMessages(userId);
        callback({ status: 'success', mensajes });
      } catch (error) {
        console.error('Error al cargar mensajes:', error);
        callback({ status: 'error', message: 'No se pudieron cargar los mensajes' });
      }
    });

    socket.on('marcar-mensaje-leido', async (messageId, callback) => {
      try {
        const updatedMessage = await connection.deleteMessage(messageId);

        socket.broadcast.emit('mensaje-marcado-leido', updatedMessage);

        if (typeof callback === 'function') {
          callback({ status: 'success', message: updatedMessage });
        }
      } catch (error) {
        console.error('Error al marcar el mensaje como leído:', error);

        if (typeof callback === 'function') {
          callback({ status: 'error', error: error.message });
        }
      }
    });
}