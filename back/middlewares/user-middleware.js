import messages from "../helpers/messages-middlewares.js";

const isIdIntMiddleware = (req, res, next) => {
  if (!req.params.id || isNaN(parseInt(req.params.id, 10))) {
    return res.status(400).json({
      message: messages.userMiddleware.isInt,
    });
  }
  next();
};

const dniMiddleware = (req, res, next) => {
  if (!/^\d{8}[A-Z]$/.test(req.body.dni)) {
    return res.status(400).json({
      message: messages.userMiddleware.dni,
    });
  }
  next();
};

const nameMiddleware = (req, res, next) => {
  if (req.body.first_name.length < 2) {
    return res.status(400).json({
      message: messages.userMiddleware.firstName,
    });
  }
  next();
};

const lastNameMiddleware = (req, res, next) => {
  if (req.body.last_name.length < 2) {
    return res.status(400).json({
      message: messages.userMiddleware.lastName,
    });
  }
  next();
};

const emailMiddleware = (req, res, next) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
    return res.status(400).json({
      message: messages.userMiddleware.email,
    });
  }
  next();
};

const passwordMiddleware = (req, res, next) => {
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      req.body.password
    )
  ) {
    return res.status(400).json({
      message: messages.userMiddleware.password,
    });
  }
  next();
};

const phoneMiddleware = (req, res, next) => {
  if (req.body.phone.length < 9) {
    return res.status(400).json({
      message: messages.userMiddleware.phone,
    });
  }
  next();
};

const birthDateMiddleware = (req, res, next) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(req.body.birth_date)) {
    return res.status(400).json({
      message: messages.userMiddleware.birthDate,
    });
  }
  next();
};

const genderMiddleware = (req, res, next) => {
  if (
    req.body.gender !== "H" &&
    req.body.gender !== "M" &&
    req.body.gender !== "O"
  ) {
    return res.status(400).json({
      message: messages.userMiddleware.gender,
    });
  }
  next();
};

const csvMiddleware = (req, res, next) => {
  if (!req.files || !req.files.file)
    return res.status(400).json({ message: "No se ha subido ningún archivo." });
  if (req.files.file.name.split(".").pop().toLowerCase() !== "csv")
    return res.status(400).json({ message: "El archivo debe ser un CSV." });
  next();
};

export {
  isIdIntMiddleware,
  dniMiddleware,
  nameMiddleware,
  lastNameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  phoneMiddleware,
  birthDateMiddleware,
  genderMiddleware,
  csvMiddleware
};
