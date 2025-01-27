import {CategoryConnection} from '../databases/categories-connection/category-connection.js'

export const categoryExist = (id) => {
    return new Promise((resolve, reject) => {
      const conx = new CategoryConnection();
      conx.categoryExist(id)
        .then(msg => {
          console.log('Existe');
          resolve(true);
        })
        .catch(err => {
          console.log('No existe');
          reject(new Error('Categoria no existe'));
        });
    });
   };