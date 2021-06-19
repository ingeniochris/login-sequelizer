import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../model/user";

export const Authentic = async (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;
  let userPassword;

  try {
    const haveUser = await User.findOne({ where: { email } });
    if (!haveUser) {
      return res.status(400).json({ msg: "El usuario no existe" });
    };
    const passCorrecto = await bcryptjs.compare(password, haveUser.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Password Incorrecto" });
    };
    const payload = { password };
    const token = await jwt.sign(payload, process.env.SECRETA, {
      expiresIn: 3600,
    });
   
    return res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  };
};

exports.UserAuth = async (req, res) => {
  try {
      const usuario = await User.findOne(req.email)
      res.json({usuario});
  } catch (error) {
      console.log(error);
      res.status(500).json({msg: 'Hubo un error'});
  }
}

