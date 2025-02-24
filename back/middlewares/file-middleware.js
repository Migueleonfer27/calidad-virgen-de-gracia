/**Daniel */
import messages from "../helpers/messages-middlewares.js";
import { request, response } from "express";

export const fileValidator = (req = request, res = response, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.img) {
        return res.status(404).json({
            'msg': messages.fileMiddleware.error.notFound
        })
    }

    next();
}