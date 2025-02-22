import { Roles,Ability, AbilityRole} from '../../models/associations.js';

export class AbilityRoleConnection{


    addAbilitiesToRole = async (idRol, abilities) => {
      let result;
      
        try {
           
            abilities.forEach(async (element) => {
                const abilityRole=new AbilityRole()
                abilityRole.id_rol=idRol
                abilityRole.id_ability=element
                await abilityRole.save() 
               
            });
            result={"id_rol":idRol, "abilities":abilities}
           
        } catch (error) {
            result = error
            throw error;

        }
        return result;
    }
}