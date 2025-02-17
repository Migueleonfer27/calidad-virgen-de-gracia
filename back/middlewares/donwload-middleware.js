import messages from "../helpers/messages-middlewares.js";

const urlValidate = (req, res, next) => {
  const { url } = req.body;

  if (!url.startsWith("http")) {
    return res
      .status(400)
      .json({ error: messages.donwloadMiddleware.error.url });
  }

  next();
};

export { urlValidate };
