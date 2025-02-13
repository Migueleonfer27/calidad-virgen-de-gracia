// routes/pdf-routes.js
import { Router } from "express";
import express from "express";
import { PdfController } from "../controllers/pdf-controller.js";

export const router = Router();

router.post("/fill-pdf", express.raw({ type: "application/pdf", limit: "10mb" }), PdfController.fillPdf);

export default router;