const userRoleMiddleware = (req, res, next) => {
  if (!req.body.idUser || !req.body.idRole) {
    return res.status(400).json({
      message: messages.userRoleMiddleware.error.add,
    });
  }
  next();
};

export { userRoleMiddleware };
