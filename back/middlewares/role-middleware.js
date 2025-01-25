import messages from "../helpers/messages.js";

const nameMiddleware = (req, res, next) => {
  if (req.body.name.length < 2) {
    return res.status(400).json({
      message: messages.roleMiddleware.name,
    }); 
  }
  next();
};

export { nameMiddleware };
