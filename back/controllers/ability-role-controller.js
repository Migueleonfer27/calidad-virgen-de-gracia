import { response, request } from 'express';
import { AbilityRoleConnection } from '../databases/abilities-role-connection/ability-role-connection.js';

const connection=new AbilityRoleConnection()
export const abilitiesController = {
    addAbilities:(req = request, res = response) => {
        let result
        connection.addAbilitiesToRole(req.body.id_rol,req.body.abilities)
            .then(data => {
                result = 1
                
                console.log('Abilities insertada correctamente!');
                res.status(201).json({
                    cod: result,
                    data: data
                });
            })
            .catch(err => {
               console.log(err);
                result = 0
                res.status(203).json({
                    cod: result,
                    error: err
                });
            });
}


}