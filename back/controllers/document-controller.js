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
    },

    getById: (req = request, res = response) => {
        const id = req.params.id;
        connection.getDocumentById(id)
            .then(data => {
                res.status(200).json({
                    'msg': msg.document.success.show,
                    'data': data
                });
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.show
                })
            })
    },

    getByName: (req = request, res = response) => {
        const name = req.params.name;
        connection.getDocumentByName(name)
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.document.success.show,
                        'data': data
                    })
                } else {
                    res.status(203).json({
                        'msg': msg.document.error.notFound,
                        'data': data
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.show
                })
            })
    },

    getBySubcategoryId: (req = request, res = response) => {
        const subcategoryId = req.params.id;
        connection.getDocumentsFromSubcategory(subcategoryId)
            .then( data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.document.success.index,
                        'data': data
                    })
                } else {
                    res.status(203).json({
                        'msg': msg.document.error.notFound,
                        'data': data
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.show
                })
            })
    },

    insert: (req = request, res = response) => {
        const document = req.body;
        connection.insertDocument(document)
            .then(data => {
                res.status(201).json({
                    'msg': msg.document.success.create,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.create
                })
            })
    },

    delete: (req = request, res = response) => {
        const id = req.params.id;
        connection.deleteDocument(id)
            .then(data => {
                res.status(200).json({
                    'msg': msg.document.success.delete,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.delete
                })
            })
    },

    update: (req = request, res = response) => {
        const document = req.body;
        connection.updateDocument(document)
            .then(data => {
                res.status(200).json({
                    'msg': msg.document.success.update,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.document.error.update
                })
            })
    }
}