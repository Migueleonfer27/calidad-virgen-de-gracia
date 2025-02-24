/**Gema */

import { AbilityRoleConnection } from "../databases/abilities-role-connection/ability-role-connection.js";
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

   export const getAbilities = async (rol) => {
    const connection = new AbilityRoleConnection();
    const id_rol=await connection.getRoleByName(rol[0])
    const abilities = await connection.getAbilityRole(id_rol.id);
    return abilities
   }

   