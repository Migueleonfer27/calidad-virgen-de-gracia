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
        console.log('Mensaje recibido del frontend:', payload);
        const savedMessage = await connection.insertMessage(payload);
        console.log('Mensaje guardado en BD:', savedMessage.toJSON());
        socket.broadcast.emit('recibir-mensaje', savedMessage);
    
      } catch (error) {
        console.error('Error al guardar mensaje:', error);
      }
    });

    socket.on('cargar-mensajes', async (userId, callback) => {
      try {
        const mensajes = await connection.getUserMessages(userId);
        console.log('Mensajes cargados para el usuario con id:', userId);
        callback({ status: 'success', mensajes });
      } catch (error) {
        console.error('Error al cargar mensajes:', error);
        callback({ status: 'error', message: 'No se pudieron cargar los mensajes' });
      }
    });

    socket.on('marcar-mensaje-leido', async (messageId, callback) => {
      try {
        console.log('Marcando mensaje como leído:', messageId);
        const updatedMessage = await connection.deleteMessage(messageId);
        console.log('Mensaje marcado como leído:', updatedMessage.toJSON());
    
        // Notificar a todos los clientes que el mensaje ha sido marcado como leído
        socket.broadcast.emit('mensaje-marcado-leido', updatedMessage);
    
        // Responder al cliente que solicitó la acción
        if (typeof callback === 'function') {
          callback({ status: 'success', message: updatedMessage });
        }
      } catch (error) {
        console.error('Error al marcar el mensaje como leído:', error);
    
        // Responder con un error
        if (typeof callback === 'function') {
          callback({ status: 'error', error: error.message });
        }
      }
    });
}