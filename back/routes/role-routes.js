import { Router } from "express";
import { RoleController } from "../controllers/role-controller.js";
import {
  nameMiddleware,
  isIdIntMiddleware,
} from "../middlewares/role-middleware.js";

export const router = Router();

router.get("/", RoleController.indexRoles);
router.get("/:id", isIdIntMiddleware, RoleController.showRole);
router.post("/", nameMiddleware, RoleController.storeRole);
router.put(
  "/:id",
  isIdIntMiddleware,
  nameMiddleware,
  RoleController.updateRole
);
router.delete("/:id", isIdIntMiddleware, RoleController.deleteRole);
