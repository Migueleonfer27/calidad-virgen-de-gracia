import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { viewPasswordEmail } from "../templates/generate-password-email.js";

dotenv.config();

const sendEmail = async (to, nameUser, password) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: "Generación de contraseña.",
      html: viewPasswordEmail(nameUser, password),
    });

    console.log("Correo enviado a:", to);
  } catch (error) {
    console.error("Error enviando correo:", error);
    throw new Error("No se pudo enviar el correo.");
  }
};

export { sendEmail };
