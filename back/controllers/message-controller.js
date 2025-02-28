// Daniel Cruz
import { request, response } from "express";
import { MessageConnection as Connection } from '../databases/message-connection/message-connection.js';
import { messages as msg } from "../helpers/messages-controllers.js";

const connection = new Connection();

export const messageController = {

    get: (req, res = response) => {
        connection.getMessages()
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.message.success.index,
                        'data': data
                    });
                } else {
                    res.status(203).json({
                        'msg': msg.message.error.notFound,
                        'data': data
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.message.error.index
                })
            })
    },

    getById: (req = request, res = response) => {

        const id = req.params.id;
        connection.getMessage(id)
            .then(data => {
                res.status(200).json({
                    'msg': msg.message.success.show,
                    'data': data
                });
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.message.error.show
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
                            subject: message.subject,
                            message: message.message,
                            createdAt: message.createdAt,
                            updatedAt: message.updatedAt,
                            deletedAt: message.deletedAt
                        };
                    });

                    res.status(200).json({
                        'msg': msg.message.success.index,
                        'data': {
                            user: userData,
                            messages: messages
                        }
                    });
                } else {
                    res.status(203).json({
                        'msg': msg.message.error.notFound,
                        'data': []
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    'msg': msg.message.error.index
                });
            });
    },

    insert: (req = request, res = response) => {
        const message = req.body;
        connection.insertMessage(message)
            .then(data => {
                res.status(201).json({
                    'msg': msg.message.success.create,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.message.error.create
                })
            })
    },

    delete: (req = request, res = response) => {
        const id = req.params.id;
        connection.deleteMessage(id)
            .then(data => {
                res.status(200).json({
                    'msg': msg.message.success.delete,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.message.error.delete
                })
            })
    }
}