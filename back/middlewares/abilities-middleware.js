//Gema

import { getAbilities } from "../helpers/db-validator.js";
import messages  from "../helpers/messages-middlewares.js"


export const isRolValid = (permiso) => {
    return async (req, res, next) => {
      try {
       
        //0 no tiene las abilities adecuadas
        //2 problemas con la consulta de las abilities
        const rol = req.user.roles; 
        
        if (!rol) {
          return res.status(401).json({ cod: 0, msg: messages.abilitiesMiddleware.roleless});
        }
        let allAbilities=[]
        for (const element of rol) {
          const abilities = await getAbilities(element.role_id);
          allAbilities.push(abilities.abilities);
        }
        
        const abilityRequired= allAbilities.flat().filter(ability =>ability.description == permiso)
      
        /*Comentar y descomentar si Jaime arregla el token
        const abilities= await getAbilities(rol[0].role_id)
       
        const abilityRequired= abilities.abilities.filter(ability =>ability.dataValues.description == permiso) 
      */
        if (abilityRequired.length > 0) {
        
          return next()
        }
        return res.status(403).json({ cod:0, msg: messages.abilitiesMiddleware.unauthorized});
       
       
      } catch (error) {
        console.log(error)
        return res.status(500).json({ cod:2, err:error });
      }
    };
  };