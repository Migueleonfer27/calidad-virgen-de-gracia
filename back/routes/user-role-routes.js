import { Router } from "express";
import { UserRoleController } from "../controllers/user-role-controller.js";

export const router = Router();

router.post("/", UserRoleController.addUserRole);
router.delete("/:idUser/:idRole", UserRoleController.deleteUserRole);
