import messages  from "../helpers/messages-middlewares.js"

export const isMyTask = (req, res, next) => {
    console.log(req.user)
    const id_user = req.user.uid;
    const id_userTask=req.body.id_user

    if(id_user == id_userTask) {
       return next();
    }else if(req.params.id==id_user) {
        return next();
    }
    return res.status(403).json({ cod:0, msg: messages.taskMiddleware.unauthorized});
  };