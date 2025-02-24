/**Daniel */
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { messages as msg } from '../helpers/messages-controllers.js';

export const uploadFile = (img, validExtensions = ['png', 'jpg', 'jpeg'], folder = '') => {
    
    return new Promise( (resolve, reject ) => {
        const __dirname = dirname(fileURLToPath(import.meta.url));

        const splitFileName = img.name.split('.');
        const ext = splitFileName[splitFileName.length - 1];

        if (!validExtensions.includes( ext )) {
            return reject(`${msg.file.error.extension}`);
        }

        const tempName = uuidv4() + '.' + ext;

        const uploadPath = path.join( __dirname, '../uploads/', folder, tempName);

        img.mv(uploadPath, (err) => {
            if (err) {
                reject(err)
            }
            resolve( tempName )
        })
    })
}

export const deleteFile = (file, folder = 'profile-pictures') => {

    return new Promise( (resolve, reject ) => {

        const __dirname = dirname(fileURLToPath(import.meta.url));
        const filePath = path.join(__dirname, '../uploads', folder, file);

        if (fs.existsSync(filePath)) {
            fs.unlink(filePath, (err) => {
                if (err) {
                    return reject(`${msg.file.error.delete}`);
                }
                resolve(`${msg.file.success.delete}`);
            });
        } else {
            reject(`${msg.file.error.notFound}`);
        }
    })
}