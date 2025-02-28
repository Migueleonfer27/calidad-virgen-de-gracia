import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { abilitiesController } from "../controllers/ability-role-controller.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { abilities } from "../helpers/abilities.js";
import { validateJWT } from "../middlewares/auth-middleware.js";

export const router = Router();

// Gema
router.post(
  "/addAbilities",
  [check("id_rol", "El rol es obligatorio").not().isEmpty(), validarCampos],
  validateJWT,
  isRolValid(abilities.addAbilities),
  abilitiesController.addAbilities
);

// Miguel
router.get("/", abilitiesController.getAllAbilities);

// Miguel
router.get(
  "/:idRole",
  [
    check("idRole", "El rol es obligatorio").not().isEmpty().isNumeric(),
    validarCampos,
  ],
  /*validateJWT,
  /*isRolValid(abilities.getAbilitiesByRol)*/
  abilitiesController.getAbilitiesByRole
);

// Miguel
router.get(
  "/:idUser/:idRole",
  [
    check("idUser", "Id del usuario requerido y formateado como número")
      .not()
      .isEmpty()
      .isNumeric(),
    validarCampos,
  ],
  [
    check("idRole", "Id del rol requerido y formateado como número")
      .not()
      .isEmpty()
      .isNumeric(),
    validarCampos,
  ],
  validateJWT,
  isRolValid(abilities.getAbilitiesByUser),
  abilitiesController.getAbilitiesByUser
);
