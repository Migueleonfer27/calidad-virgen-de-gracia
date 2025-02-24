import { Router } from "express";
import { UserRoleController } from "../controllers/user-role-controller.js";
import {
  userRoleIdParamsRequiredMiddleware,
  isUserIdAndRoleIdIntMiddleware,
  userRoleIdRequiredMiddleware,
  userRoleIdIntMiddleware,
} from "../middlewares/user-rol-middleware.js";
import { validateJWT } from "../middlewares/auth-middleware.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { abilities } from "../helpers/abilities.js";

export const router = Router();

router.post(
  "/",
  userRoleIdRequiredMiddleware,
  userRoleIdIntMiddleware,
  validateJWT,isRolValid(abilities.updateUser),
  UserRoleController.addUserRole
);
router.delete(
  "/:user_id/:role_id",
  userRoleIdParamsRequiredMiddleware,
  isUserIdAndRoleIdIntMiddleware,
  validateJWT,isRolValid(abilities.updateUser),
  UserRoleController.deleteUserRole
);
