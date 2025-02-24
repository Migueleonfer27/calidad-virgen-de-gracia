import { Router } from "express";
import { DownloadController } from "../controllers/donwload-controller.js";
import { urlValidate } from "../middlewares/donwload-middleware.js";
import { validateJWT } from "../middlewares/auth-middleware.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { abilities } from "../helpers/abilities.js";

export const router = Router();

router.post("/", urlValidate,validateJWT,isRolValid(abilities.downloadDocument), DownloadController.donwloadPdf);
