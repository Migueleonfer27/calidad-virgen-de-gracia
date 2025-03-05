import {
  Roles,
  Ability,
  AbilityRole,
  Users,
} from "../../models/associations.js";

export class AbilityRoleConnection {
  // Miguel
  indexAbilities = async () => {
    try {
      return await Ability.findAll({
        attributes: ["id", "description"],
      });
    } catch (error) {
      throw error;
    }
  };

  // Miguel
  getAbilityRole = async (idRole) => {
    try {
      return await Roles.findOne({
        attributes: ["id", "position"],
        where: { id: idRole },
        include: [
          {
            model: Ability,
            as: "abilities",
            attributes: ["id", "description"],
          },
        ],
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
        attributes: ["id", "first_name"],
        include: [
          {
            model: Roles,
            where: { id: idRole },
            attributes: ["id", "position"],
            through: { attributes: [] },
            include: [
              {
                model: Ability,
                as: "abilities",
                attributes: ["id", "description"],
                through: { attributes: [] },
              },
            ],
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  };

  // Gema y Miguel
  addAbilitiesToRole = async (idRol, abilities) => {
    let result;
    try {
      const currentAbilities = await AbilityRole.findAll({
        where: { id_rol: idRol },
      });

      const currentAbilityIds = currentAbilities.map(
        (ability) => ability.id_ability
      );

      const newAbilitiesToAdd = abilities.filter(
        (abilityId) => !currentAbilityIds.includes(abilityId)
      );

      if (newAbilitiesToAdd.length > 0) {
        const abilityRoles = newAbilitiesToAdd.map((abilityId) => ({
          id_rol: idRol,
          id_ability: abilityId,
        }));
        await AbilityRole.bulkCreate(abilityRoles);
      }

      result = { id_rol: idRol, abilities: abilities };
    } catch (error) {
      result = error;
      throw error;
    }
    return result;
  };

  getRoleByName = async (name) => {
    let result;

    try {
      result = await Roles.findOne({
        where: { position: name },
      });
    } catch (error) {
      result = error;
      throw error;
    }
    return result;
  };

  // Gema y Miguel
  resetRole = async (idRol, newAbilities) => {
    let result;
    try {
      const abilitiesOfRol = await AbilityRole.findAll({
        where: { id_rol: idRol },
      });

      const currentAbilityIds = abilitiesOfRol.map(
        (ability) => ability.id_ability
      );

      const abilitiesToDelete = currentAbilityIds.filter(
        (abilityId) => !newAbilities.includes(abilityId)
      );

      if (abilitiesToDelete.length > 0) {
        await AbilityRole.destroy({
          where: {
            id_rol: idRol,
            id_ability: abilitiesToDelete,
          },
        });
      }

      result = abilitiesToDelete;
    } catch (error) {
      result = error;
      throw error;
    }
    return result;
  };
}
