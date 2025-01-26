import messages from "../helpers/messages-middlewares.js";

const isIdIntMiddleware = (req, res, next) => {
  if (!req.params.id || isNaN(parseInt(req.params.id, 10))) {
    return res.status(400).json({
      message: messages.userMiddleware.isInt,
    });
  }
  next();
};

const nameMiddleware = (req, res, next) => {
  if (req.body.name.length < 2) {
    return res.status(400).json({
      message: messages.roleMiddleware.name,
    });
  }
  next();
};

export { nameMiddleware, isIdIntMiddleware };
