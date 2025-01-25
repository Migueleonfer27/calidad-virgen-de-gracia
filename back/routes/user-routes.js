import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";
import {
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
} from "../middlewares/user-middleware.js";

export const router = Router();

router.get("/", UserController.indexUsers);
router.get("/:id", UserController.showUser);
router.post(
  "/",
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  UserController.storeUser
);
router.put(
  "/:id",
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  UserController.updateUser
);
router.delete("/:id", UserController.deleteUser);
