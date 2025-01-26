import messages from "../helpers/messages-middlewares.js";

const userRoleIdParamsRequiredMiddleware = (req, res, next) => {
  if (!req.params.user_id || !req.params.role_id) {
    return res.status(400).json({
      message: messages.userRoleMiddleware.error.required,
    });
  }
  next();
};

const isUserIdAndRoleIdIntMiddleware = (req, res, next) => {
  if (
    isNaN(parseInt(req.params.user_id, 10)) ||
    isNaN(parseInt(req.params.role_id, 10))
  ) {
    return res.status(400).json({
      message: messages.userRoleMiddleware.error.isInt,
    });
  }
  next();
};

const userRoleIdRequiredMiddleware = (req, res, next) => {
  if (!req.body.user_id || !req.body.role_id) {
    return res.status(400).json({
      message: messages.userRoleMiddleware.error.required,
    });
  }
  next();
};

const userRoleIdIntMiddleware = (req, res, next) => {
  if (
    isNaN(parseInt(req.body.user_id, 10)) ||
    isNaN(parseInt(req.body.role_id, 10))
  ) {
    return res.status(400).json({
      messages: messages.userRoleMiddleware.error.isInt,
    });
  }
  next();
};

export {
  userRoleIdParamsRequiredMiddleware,
  userRoleIdRequiredMiddleware,
  userRoleIdIntMiddleware,
  isUserIdAndRoleIdIntMiddleware,
};
