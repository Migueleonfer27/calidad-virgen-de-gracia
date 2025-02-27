// Daniel Cruz
import { request, response } from "express";
import { MessageConnection as Connection } from '../databases/message-connection/message-connection.js';

const connection = new Connection();

export const messageController = {

    get: (req, res = response) => {
        connection.getMessages()
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': 'Mensajes obtenidos correctamente',
                        'data': data
                    });
                } else {
                    res.status(203).json({
                        'msg': 'No se encontraron mensajes.',
                        'data': data
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': 'Error al obtener los mensajes.'
                })
            })
    },

    getById: (req = request, res = response) => {

        const id = req.params.id;
        connection.getMessage(id)
            .then(data => {
                res.status(200).json({
                    'msg': 'Mensaje obtenido correctamente.',
                    'data': data
                });
            })
            .catch( err => {
                res.status(500).json({
                    'msg': 'Error al obtener el mensaje.'
                })
            })
    },

    getUserMessages: (req = request, res = response) => {
        const idUser = req.params.id;
        connection.getUserMessages(idUser)
            .then(data => {
                if (data.length > 0) {

                    const userData = data[0].user;

                    const messages = data.map(message => {
                        return {
                            id: message.id,
                            message: message.message,
                            createdAt: message.createdAt,
                            updatedAt: message.updatedAt,
                            deletedAt: message.deletedAt
                        };
                    });

                    res.status(200).json({
                        'msg': 'Mensajes obtenidos correctamente.',
                        'data': {
                            user: userData,
                            messages: messages
                        }
                    });
                } else {
                    res.status(203).json({
                        'msg': 'No se encontraron mensajes para este usuario.',
                        'data': []
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    'msg': 'Error al obtener los mensajes.'
                });
            });
    },

    insert: (req = request, res = response) => {
        const message = req.body;
        connection.insertMessage(message)
            .then(data => {
                res.status(201).json({
                    'msg': 'Mensaje insertado correctamente.',
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': 'Error al insertar el mensaje.'
                })
            })
    },

    delete: (req = request, res = response) => {
        const id = req.params.id;
        connection.deleteMessage(id)
            .then(data => {
                res.status(200).json({
                    'msg': 'Mensaje borrado correctamente.',
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': 'Error al borrar el mensaje.'
                })
            })
    }
}