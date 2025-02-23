import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";
import {
  isIdIntMiddleware,
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  csvMiddleware
} from "../middlewares/user-middleware.js";
import { validateJWT } from "../middlewares/auth-middleware.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { abilities } from "../helpers/abilities.js";

export const router = Router();

router.get("/",validateJWT,isRolValid(abilities.getUsers), UserController.indexUsers);
router.get("/:id", isIdIntMiddleware,validateJWT,isRolValid(abilities.getUsers), UserController.showUser);
router.post(
  "/",
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  validateJWT,isRolValid(abilities.createUser),
  UserController.storeUser
);
router.put(
  "/:id",
  isIdIntMiddleware,
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  validateJWT,isRolValid(abilities.updateUser),
  UserController.updateUser
);
router.delete("/:id", isIdIntMiddleware,
  validateJWT,isRolValid(abilities.deleteUser), UserController.deleteUser);
router.post('/massive', csvMiddleware, UserController.storeUsersCsv);