// Daniel Cruz
import { request, response } from "express";
import { messages as msg } from '../helpers/messages-controllers.js';
import { DocumentConnection as Connection } from '../databases/documents/documents-connection.js'

const connection = new Connection();

export const documentController = {
    get: (req, res = response) => {
        connection.getDocuments()
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.document.success.index,
                        'data': data
                    });
                } else {
                    res.status(203).json({
                        'msg': msg.document.error.notFound,
                        'data': data
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.index
                })
            })
    }
}