/**Miguel y Daniel */
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
  csvMiddleware,
  passwordMiddleware,
} from "../middlewares/user-middleware.js";
import { fileValidator } from "../middlewares/file-middleware.js";
import { validateJWT } from "../middlewares/auth-middleware.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { abilities } from "../helpers/abilities.js";

export const router = Router();

router.get(
  "/",
  validateJWT,
  isRolValid(abilities.getUsers),
  UserController.indexUsers
);

router.get(
  "/:id",
  isIdIntMiddleware,
  validateJWT,
  isRolValid(abilities.getUsers),
  UserController.showUser
);

router.post(
  "/",
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  validateJWT,
  isRolValid(abilities.createUser),
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
  validateJWT,
  isRolValid(abilities.updateUser),
  UserController.updateUser
);

router.put(
  "/:id/password",
  isIdIntMiddleware,
  passwordMiddleware,
  validateJWT,
  isRolValid(abilities.updatePassword),
  UserController.updatePassword
);

router.put(
  "/:id/uploadPic",
  validateJWT,
  fileValidator,
  isRolValid(abilities.uploadPicture),
  UserController.updateProfilePic
);

router.delete(
  "/:id",
  validateJWT,
  isIdIntMiddleware,
  isRolValid(abilities.deleteUser),
  UserController.deleteUser
);

router.post(
  "/massive",
  validateJWT,
  isRolValid(abilities.createMassiveUser),
  csvMiddleware,
  UserController.storeUsersCsv
);
