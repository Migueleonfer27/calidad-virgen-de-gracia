import { Roles, Ability, AbilityRole, Users } from "../../models/associations.js";

export class AbilityRoleConnection {
    // Miguel
    getAbilityRole = async (idRole) => {
        try {
            return await Roles.findOne({
                where: { id: idRole },
                attributes: ['id', 'position'],
                include: [
                    {
                        model: Ability,
                        as: "abilities",
                        attributes: ['id', 'description'],
                        through: { attributes: [] }
                    }
                ]
            });
        } catch (error) {
            throw error;
        }
    };

    // Miguel
    getAbilityByUserRol = async (idUser, idRole) => {
        try {
            return await Users.findOne({
                where: { id: idUser },
                attributes: ['id', 'first_name'],
                include: [
                    {
                        model: Roles,
                        where: { id: idRole },
                        attributes: ['id', 'position'],
                        through: { attributes: [] },
                        include: [
                            {
                                model: Ability,
                                as: "abilities",
                                attributes: ['id', 'description'],
                                through: { attributes: [] }
                            }
                        ]
                    }
                ]
            });
        } catch (error) {
            throw error;
        }
    };    

    // Gema
    addAbilitiesToRole = async (idRol, abilities) => {
        let result;
        
        try {
            await this.resetRole(idRol)
            abilities.forEach(async (element) => {
                const abilityRole = new AbilityRole();
                abilityRole.id_rol = idRol;
                abilityRole.id_ability = element;
                await abilityRole.save();
            });
            result = { id_rol: idRol, abilities: abilities };
        } catch (error) {
            result = error;
            throw error;
        }
        return result;
    };

    resetRole = async (idRol)=>{
        let result;
        
        try {
            const abilitiesOfRol=await AbilityRole.findAll({
                where: { id_rol: idRol}
            })
            abilitiesOfRol.forEach(async(element) => {
                result=await element.destroy()
            });
           
        } catch (error) {
            result = error;
            throw error;
        }
        return result
    }
}
