//Gema

import { AbilityRoleConnection } from "../databases/abilities-role-connection/ability-role-connection.js";
import messages  from "../helpers/messages-middlewares.js"
const connection = new AbilityRoleConnection();

export const isRolValid = (permiso) => {
    return async (req, res, next) => {
      try {
        //0 no tiene token
        //1 no tiene las abilities adecuadas
        //2 problemas con la consulta de las abilities
        const rol = req.user.roles; 
      
        if (!rol) {
          return res.status(401).json({ cod: 0, msg: messages.abilitiesMiddleware.roleless});
        }
        const id_rol=await connection.getRoleByName(rol[0])
       
        
        const abilities = await connection.getAbilityRole(id_rol.id);
        console.log(abilities.abilities)
        console.log(permiso)
        const abilityRequired= abilities.abilities.filter(ability =>ability.dataValues.description == permiso) 
        console.log(abilityRequired)
        if (abilityRequired.length == 0) {
          return res.status(403).json({ cod:1, msg: messages.abilitiesMiddleware.unauthorized});
          
        }
        return next()
       
      } catch (error) {
        return res.status(500).json({ cod:2, err:error });
      }
    };
  };