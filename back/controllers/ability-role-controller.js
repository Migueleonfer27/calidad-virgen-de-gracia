// Gema y Miguel

import { response, request } from "express";
import { AbilityRoleConnection } from "../databases/abilities-role-connection/ability-role-connection.js";
import messages from "../helpers/messages-controllers.js";

const connection = new AbilityRoleConnection();

export const abilitiesController = {
    // Gema
    addAbilities: (req = request, res = response) => {
        let result;
        connection
            .addAbilitiesToRole(req.body.id_rol, req.body.abilities)
            .then((data) => {
                result = 1;

                res.status(201).json({
                    cod: result,
                    data: data,
                });
            })
            .catch((err) => {
                result = 0;
                res.status(203).json({
                    cod: result,
                    error: messages.abilities.error.abilityNotCreated,
                });
            });
    },

    // Miguel
    getAbilitiesByRole: async (req = request, res = response) => {
        try {
            const abilitiesByRole = await connection.getAbilityRole(
                req.params.idRole
            );
            console.log(JSON.stringify(abilitiesByRole));
            if (abilitiesByRole.dataValues.abilities.length <= 0) {
                return res.status(200).json({
                    message: messages.abilities.error.notHaveAbilityRol,
                    data: abilitiesByRole,
                });
            }

            res.status(200).json({
                message: messages.abilities.success.indexRol,
                data: abilitiesByRole,
            });
        } catch (error) {
            res.status(500).json({
                message: messages.abilities.error.indexRol,
                error: error.message,
            });
        }
    },

    // Miguel
    getAbilitiesByUser: async (req = request, res = response) => {
        try {
            const abilitiesByUser = await connection.getAbilityByUserRol(
                req.params.idUser,
                req.params.idRole
            );

            if (abilitiesByUser === null) {
                return res.status(404).json({
                    message: messages.abilities.error.notHaveRolUser,
                    data: null,
                });
            }

            res.status(200).json({
                message: messages.abilities.success.indexUser,
                data: abilitiesByUser,
            });
        } catch (error) {
            res.status(500).json({
                message: messages.abilities.error.indexUser,
                error: error.message,
            });
        }
    },

    // Miguel
    getAllAbilities: async (req = request, res = response) => {
        try {
            const abilities = await connection.indexAbilities();

            if (abilities.length <= 0) {
                return res.status(404).json({
                    message: messages.abilities.error.notHaveAbilities,
                    data: null,
                });
            }

            res.status(200).json({
                message: messages.abilities.success.indexAbilities,
                data: abilities,
            });
        } catch (error) {
            res.status(500).json({
                message: messages.abilities.error.indexAbilities,
                error: error.message,
            });
        }
    },
};
