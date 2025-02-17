import messages from "../helpers/messages-middlewares.js";

const isIdIntMiddleware = (req, res, next) => {
  if (!req.params.id || isNaN(parseInt(req.params.id, 10))) {
    return res.status(400).json({
      message: messages.userMiddleware.isInt,
    });
  }
  next();
};

const positionMiddleware = (req, res, next) => {
  if (req.body.position.length < 2) {
    return res.status(400).json({
      message: messages.roleMiddleware.position,
    });
  }
  next();
};

const codeMiddleware = (req, res, next) => {
  if (req.body.code.length < 2) {
    return res.status(400).json({
      message: messages.roleMiddleware.code,
    });
  }
  next();
};

const yearMiddleware = (req, res, next) => {
  if (!/^\d{4}$/.test(req.body.year)) {
    return res.status(400).json({
      message: messages.roleMiddleware.year,
    });
  }
  next();
};

const descriptionMiddleware = (req, res, next) => {
  if (req.body.description.length < 5 || req.body.description.length > 255) {
    return res.status(400).json({
      messages: messages.roleMiddleware.description,
    });
  }
  next();
};

export {
  positionMiddleware,
  codeMiddleware,
  yearMiddleware,
  isIdIntMiddleware,
  descriptionMiddleware,
};
