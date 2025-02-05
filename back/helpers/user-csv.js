import fs from "fs";
import csv from "csv-parser";
import User from "../models/user.js";


const importUsersFromCSV = async (filePath) => {
  return new Promise((resolve, reject) => {
    const users = [];

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ";" }))
      .on("data", (data) => users.push(data))
      .on("end", async () => {
        try {
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
