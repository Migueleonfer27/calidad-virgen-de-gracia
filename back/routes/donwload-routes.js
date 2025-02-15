import { Router } from "express";
import { DownloadController } from "../controllers/donwload-controller.js";

export const router = Router();

router.post("/", DownloadController.donwloadPdf);
