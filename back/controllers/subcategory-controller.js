// Gema Rubio y Daniel Cruz
import { response, request } from 'express';
import { SubcategoryConnection as Connection } from '../databases/categories-connection/subcategory-connection.js';
import { messages as msg } from '../helpers/messages-controllers.js';

const connection = new Connection();

export const subcategoryController = {

    get: (req = request, res = response) => {
        connection.getSubcategories()
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.subcategory.success.index,
                        'data': data
                    });
                } else {
                    res.status(404).json({
                        'msg': msg.subcategory.error.notMatch
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.subcategory.error.index
                })
            })
    }
}