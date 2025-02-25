// Jaime Ortega
import { Router } from "express";
import { AuthController } from "../controllers/auth-controller.js";
import {
  isIdIntMiddleware,
  emailMiddleware,
  passwordMiddleware,
} from "../middlewares/user-middleware.js";
import { validateJWT } from "../middlewares/auth-middleware.js";

export const router = Router();

router.post("/login", AuthController.login);
router.post("/logout", [validateJWT], AuthController.logout);
