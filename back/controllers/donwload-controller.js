import { response, request } from "express";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";
import os from "os";
import TemplatesPdf from "../interfaces/pdf.interfaces.js";
import messages from "../helpers/messages-controllers.js";

export const DownloadController = {
  donwloadPdf: async (req = request, res = response) => {
    const url = req.body.url;
    const usuario = req.body.usuario;
    const document = req.body.document;
    const rutaDestino = "../donwladFiles";
    const documentName = document.replace(/\.pdf$/, "");

    try {
      console.log(`Generando PDF para la URL: ${url}`);
      const pdfBytes = await generarPdfDesdeUrl(url, usuario, document);
      const downloadsPath = path.join(os.homedir(), "Downloads");
      const filePath = path.join(downloadsPath, documentName + ".pdf");
      await fs.promises.writeFile(filePath, pdfBytes);
      res.status(200).json({ mensaje: messages.download.success.generate });
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      res
        .status(500)
        .json({ message: messages.download.error.notFound, error: error });
    }
  },
};

const generarPdfDesdeUrl = async (
  url,
  usuario,
  document,
  rutaDestino = "./downLoad"
) => {
  const browser = await puppeteer.launch({
    headless: false, // Permitir que se abra el navegador para logearse
    defaultViewport: null,
    args: ["--disable-blink-features=AutomationControlled"],
  });

  const page = await browser.newPage();

  try {
    //Con esto manejo que la descarga vaya donde yo quiero
    const downloadPath = path.resolve(rutaDestino);
    const client = await page.target().createCDPSession();
    await client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: downloadPath,
    });

    // Navegar a la URL proporcionada
    await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });

    const botonSelector = "button#downloadCommand";
    await page.waitForSelector(botonSelector, {
      visible: true,
      timeout: 30000,
    });
    await page.click(botonSelector);
    console.log("Botón de descarga presionado, esperando el archivo...");

    // Dar tiempo para q termine la descarga
    await new Promise((resolve) => setTimeout(resolve, 8000));
    const pdfBytes = await autoFiled(downloadPath, usuario, document);
    return pdfBytes;
  } catch (error) {
    console.error(" Error durante la descarga:", error);
    throw error;
  } finally {
    await browser.close();
  }
};

const autoFiled = async (pdfPath, usuario, document) => {
  try {
    const pdfBuffer = fs.readFileSync(path.join(pdfPath, document));
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const form = pdfDoc.getForm();
    const fields = form.getFields();

    const templatesPdf = new TemplatesPdf();
    const template = templatesPdf.getTemplate(document);

    if (!template) {
      console.error(`No hay plantilla definida para el documento: ${document}`);
      return null;
    }

    const { mappings } = template;

    fields.forEach((field) => {
      const fieldName = field.getName();

      if (mappings[fieldName] && field.constructor.name === "PDFTextField") {
        const value = mappings[fieldName](usuario) || "";
        field.setText(value);
        console.log(`Campo rellenado: ${fieldName} -> ${value}`);
      } else {
        console.log(`Campo ignorado: ${fieldName}`);
      }
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error("Error al rellenar el PDF:", error);
  }
};
