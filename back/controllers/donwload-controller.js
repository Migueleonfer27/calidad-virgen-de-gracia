import { response, request } from "express";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";
import os from "os";

export const DownloadController = {
  donwloadPdf: async (req = request, res = response) => {
    const url = req.body.url;
    const usuario = req.body.usuario;
    const document = req.body.document;
    const rutaDestino = "../donwladFiles";

    try {
      console.log(`Generando PDF para la URL: ${url}`);
      const pdfBytes = await generarPdfDesdeUrl(url, usuario, document);
      const downloadsPath = path.join(os.homedir(), "Downloads");
      const filePath = path.join(downloadsPath, usuario.first_name + ".pdf");
      await fs.promises.writeFile(filePath, pdfBytes);
      res.status(200).json({ mensaje: "PDF generado correctamente" });
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      res.status(500).send("Error al generar el PDF");
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
    console.log("⬇️ Botón de descarga presionado, esperando el archivo...");

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
    const pdfBuffer = fs.readFileSync(pdfPath + "/" + document);
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const form = pdfDoc.getForm();

    const fields = form.getFields();

    fields.forEach((field, index) => {
      console.log(`Campo ${index + 1}: ${field.getName()}`);

      if (
        field.constructor.name === "PDFTextField" &&
        (field.getName() === "NOMBRE DEL TUTOR" ||
          field.getName() === "DOCENTE" ||
          field.getName() === "NOMBRE Y APELLIDOS")
      ) {
        field.setText(usuario.first_name + " " + usuario.last_name); // Rellenar campo de texto
        console.log(`✅ Se ha rellenado el campo: ${field.getName()}`);
      } else if (
        field.constructor.name === "PDFTextField" &&
        field.getName() === "DNI"
      ) {
        field.setText(usuario.dni);
      } else {
        console.log(
          `⚠️ El campo "${field.getName()}" no es de tipo texto y no se puede rellenar.`
        );
      }
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error("Error al rellenar el PDF:", error);
  }
};
