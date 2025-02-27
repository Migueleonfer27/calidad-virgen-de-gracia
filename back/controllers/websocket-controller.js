// Daniel Cruz
export const socketController = (socket) => {
  
    console.log("Cliente conectado: ", socket.id); 

    socket.on('disconnect', () => {
        console.log("Cliente desconectado", socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        console.log('Payload recibido:',payload);

        // callback({msg: "Mensaje recibido", id:"1A", fecha: new Date().getTime()});
        callback({msg: "Mensaje recibido", payload: payload});

        socket.broadcast.emit('recibir-mensaje', payload);
    }); 

}


/*
   socket.to(destinatarioId).emit('mensaje-privado', {
        de: socket.id,
        mensaje
    });
*/