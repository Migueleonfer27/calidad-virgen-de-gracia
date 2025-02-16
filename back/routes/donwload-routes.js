import { Router } from "express";
import { DownloadController } from "../controllers/donwload-controller.js";
import { urlValidate } from "../middlewares/donwload-middleware.js";

export const router = Router();

router.post("/", urlValidate, DownloadController.donwloadPdf);
