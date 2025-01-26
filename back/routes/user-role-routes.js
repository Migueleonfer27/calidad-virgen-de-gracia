import { Router } from "express";
import { UserRoleController } from "../controllers/user-role-controller.js";
import {
  userRoleIdParamsRequiredMiddleware,
  isUserIdAndRoleIdIntMiddleware,
  userRoleIdRequiredMiddleware,
  userRoleIdIntMiddleware,
} from "../middlewares/user-rol-middleware.js";

export const router = Router();

router.post(
  "/",
  userRoleIdRequiredMiddleware,
  userRoleIdIntMiddleware,
  UserRoleController.addUserRole
);
router.delete(
  "/:user_id/:role_id",
  userRoleIdParamsRequiredMiddleware,
  isUserIdAndRoleIdIntMiddleware,
  UserRoleController.deleteUserRole
);
