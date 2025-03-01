// Gema Rubio y Daniel Cruz

import { Router } from "express";
import { categoryController } from "../controllers/category-controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { abilities } from "../helpers/abilities.js";
import { validateJWT } from "../middlewares/auth-middleware.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
export const router = Router();

router.post(
  "/insert",
  [check("name", "El nombre es obligatorio").not().isEmpty(), validarCampos],
  validateJWT,
  isRolValid(abilities.createCategory),
  categoryController.insert
);
router.delete(
  "/delete/:id",
  validateJWT,
  isRolValid(abilities.deleteCategory),
  categoryController.delete
);
router.put(
  "/update",
  validateJWT,
  isRolValid(abilities.updateCategory),
  categoryController.update
);

router.get("/", categoryController.get);

router.get(
  "/getById/:id",
  [
    check("id", "El id debe ser de tipo numérico.").isInt().notEmpty(),
    validarCampos,
  ],
  categoryController.getById,
);

router.get(
  "/getByName/:name",
  [
    check("name", "El nombre debe debe ser una cadena de texto.")
      .isString()
      .notEmpty(),
    validarCampos,
  ],
  categoryController.getByName
);
