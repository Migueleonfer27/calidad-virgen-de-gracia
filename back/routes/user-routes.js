import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";

export const router = Router();

router.get("/", UserController.indexUsers);
router.get("/:id", UserController.showUser);
router.post("/", UserController.storeUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
