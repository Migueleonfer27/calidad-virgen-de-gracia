import { Router } from "express";
import { RoleController } from "../controllers/role-controller.js";
import {
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  isIdIntMiddleware,
  descriptionMiddleware,
} from "../middlewares/role-middleware.js";

export const router = Router();

router.get("/", RoleController.indexRoles);
router.get("/:id", isIdIntMiddleware, RoleController.showRole);
router.post(
  "/",
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  descriptionMiddleware,
  RoleController.storeRole
);
router.put(
  "/:id",
  isIdIntMiddleware,
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  descriptionMiddleware,
  RoleController.updateRole
);
router.delete("/:id", isIdIntMiddleware, RoleController.deleteRole);