import { Router } from "express";
import { RoleController } from "../controllers/role-controller.js";
import {
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  isIdIntMiddleware,
  descriptionMiddleware,
} from "../middlewares/role-middleware.js";
import { abilities } from "../helpers/abilities.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { validateJWT } from "../middlewares/auth-middleware.js";

export const router = Router();

router.get(
  "/",
  validateJWT,
  isRolValid(abilities.getRoles),
  RoleController.indexRoles
);

router.get(
  "/:id",
  isIdIntMiddleware,
  validateJWT,
  isRolValid(abilities.getRoles),
  RoleController.showRole
);

router.post(
  "/",
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  descriptionMiddleware,
  validateJWT,
  isRolValid(abilities.createRol),
  RoleController.storeRole
);

router.put(
  "/:id",
  isIdIntMiddleware,
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  descriptionMiddleware,
  validateJWT,
  isRolValid(abilities.updateRol),
  RoleController.updateRole
);

router.delete(
  "/:id",
  isIdIntMiddleware,
  validateJWT,
  isRolValid(abilities.deleteRol),
  RoleController.deleteRole
);
