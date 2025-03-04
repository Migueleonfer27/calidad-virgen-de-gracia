import fs from "fs";
import csv from "csv-parser";
import { randomBytes } from "crypto";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import { sendEmail } from "./mail-helper.js";

const importUsersFromCSV = async (filePath) => {
  return new Promise((resolve, reject) => {
    const users = [];
    const hashPromises = [];

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => {
        for (const key in data) {
          if (data[key] === "") {
            data[key] = null;
          }
        }

        const newPassword = randomBytes(4).toString("hex");
        const hashPromise = bcrypt
          .hash(newPassword, 10)
          .then((hashedPassword) => {
            data.password = hashedPassword;
            data.plainPassword = newPassword;
            users.push(data);
          });

        hashPromises.push(hashPromise);
      })
      .on("end", async () => {
        try {
          await Promise.all(hashPromises);
          await User.bulkCreate(users, { ignoreDuplicates: true });

          const emailResults = await Promise.allSettled(
            users.map(async (user) => {
              await sendEmail(user.email, user.first_name, user.plainPassword);
            })
          );

          emailResults.forEach((result, index) => {
            if (result.status === "rejected") {
              console.error(
                `Error enviando correo a ${users[index].email}:`,
                result.reason
              );
            } else {
              console.log(
                `Correo enviado correctamente a ${users[index].email}`
              );
            }
          });

          fs.unlinkSync(filePath);
          resolve({ users });
        } catch (error) {
          reject({ error });
        }
      })
      .on("error", (error) => reject(error));
  });
};

export { importUsersFromCSV };
