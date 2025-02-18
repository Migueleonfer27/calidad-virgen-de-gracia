import fs from "fs";
import csv from "csv-parser";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const importUsersFromCSV = async (filePath) => {
  return new Promise((resolve, reject) => {
    const users = [];
    const hashPromises = [];

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => {
        if (data.leave_date === "0000-00-00" || data.leave_date === "") data.leave_date = null;

        const hashPromise = bcrypt.hash(data.password, 10).then((hashedPassword) => {
          data.password = hashedPassword;
          users.push(data);
        });

        hashPromises.push(hashPromise);
      })
      .on("end", async () => {
        try {
          await Promise.all(hashPromises);
          await User.bulkCreate(users, { ignoreDuplicates: true });
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
