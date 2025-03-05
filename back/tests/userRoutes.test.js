// Miguel

import request from "supertest";
import express from "express";
import { router } from "../routes/user-routes.js";
import { generateJWT_rolesTest } from "../helpers/generate-jwt.js";

const app = express();
app.use(express.json());
app.use("/", router);

let authToken;
let idUser = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

beforeAll(async () => {
  authToken = generateJWT_rolesTest(1, [{ id: 1, position: "ADMINISTRADOR" }]);
});

describe("Test GET user routes", () => {
  it("Should return 200 code", async () => {
    const response = await request(app)
      .get("/")
      .set("Authorization", `${authToken}`);

    expect(response.statusCode).toBe(200);
  });

  it("Should return 200 code", async () => {
    const response = await request(app)
      .get("/1")
      .set("Authorization", `${authToken}`);

    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST user routes", () => {
  it("Should return 201 code", async () => {
    const newUserTest = {
      id: idUser,
      code: "ABC123XYZ",
      last_name: "Pérez",
      first_name: "Juan",
      nrp: "123456",
      dni: "12345678X",
      abbreviation: "JPR",
      birth_date: "1990-05-15",
      gender: "H",
      title: "Doctor",
      address: "Calle Falsa 123",
      city: "Madrid",
      postal_code: "28080",
      province: "Madrid",
      phone_rp: "600123456",
      specialty: "Biotecnología",
      body: "Corporación",
      department: "Tecnología",
      admission_date: "2023-01-01",
      leave_date: null,
      email: "juan.perez@example.com",
      corporate_email: "jperez@company.com",
      password: "12345aB!",
      phone: "600654321",
      profile_picture: null,
    };
    const response = await request(app)
      .post("/")
      .set("Authorization", `${authToken}`)
      .send(newUserTest);

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Usuario creado correctamente.");
    expect(response.body.data).toMatchObject({
      ...newUserTest,
      birth_date: expect.stringMatching(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
      ),
      admission_date: expect.stringMatching(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
      ),
      password: expect.any(String),
    });
  });
});

describe("Test PUT user routes", () => {
  it("Should return 200 code for updating user", async () => {
    const updatedUserTest = {
      id: idUser,
      code: "CDC543XYZ",
      last_name: "Pérez",
      first_name: "Fernando",
      nrp: "123456",
      dni: "53345178X",
      abbreviation: "JPR",
      birth_date: "1970-02-12",
      gender: "H",
      title: "Ingeniero",
      address: "Calle Falsa 123",
      city: "Puertollano",
      postal_code: "13500",
      province: "Ciudad Real",
      phone_rp: "600123456",
      specialty: "Informática",
      body: "Instituto",
      department: "Tecnología",
      admission_date: "2023-01-01",
      leave_date: null,
      email: "fernando@example.com",
      corporate_email: "fernando@company.com",
      password: "Chewbacca",
      phone: "600654321",
      profile_picture: null,
    };
    const response = await request(app)
      .put(`/${idUser}`)
      .set("Authorization", `${authToken}`)
      .send(updatedUserTest);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Usuario actualizado correctamente.");
  });
});

describe("Test DELETE user routes", () => {
  it("Should return 200 code for deleting user", async () => {
    const response = await request(app)
      .delete(`/${idUser}`)
      .set("Authorization", `${authToken}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Usuario eliminado correctamente.");
  });
});

afterAll(() => {
  app.close && app.close();
});
