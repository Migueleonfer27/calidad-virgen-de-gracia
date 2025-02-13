import { PDFDocument } from "pdf-lib";

const PdfController = {
  fillPdf: async (req, res) => {
    try {
      const pdfBuffer = req.body;
      if (!pdfBuffer) {
        return res
          .status(400)
          .json({ error: "No se ha proporcionado un archivo PDF" });
      }

      const pdfDoc = await PDFDocument.load(pdfBuffer);
      const form = pdfDoc.getForm();

      const fields = form.getFields();
      fields.forEach((field, index) => {
        console.log(`Campo ${index + 1}: ${field.getName()}`);
      });

      const formData = JSON.parse(req.headers["form-data"] || "{}");
      if (!formData || Object.keys(formData).length === 0) {
        return res.status(400).json({
          error: "No se han proporcionado datos para rellenar el PDF",
        });
      }

      Object.keys(formData).forEach((key) => {
        const field = form.getTextField(key);
        if (field) {
          field.setText(formData[key]);
        } else {
          console.error(`Campo no encontrado: ${key}`);
        }
      });

      const pdfBytes = await pdfDoc.save();

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=filled.pdf");
      res.send(Buffer.from(pdfBytes));
    } catch (error) {
      console.error("Error al rellenar el PDF:", error);
      res.status(500).json({ error: "Error al procesar el PDF" });
    }
  },
};

export { PdfController };
