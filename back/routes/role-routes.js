import { Router } from "express";
import { RoleController } from "../controllers/role-controller.js";
import { nameMiddleware } from "../middlewares/role-middleware.js";

export const router = Router();

router.get("/", RoleController.indexRoles);
router.get("/:id", nameMiddleware, RoleController.showRole);
router.post("/", nameMiddleware, RoleController.storeRole);
router.put("/:id", nameMiddleware, RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);
