import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../model/user";

export const CreateUser = async (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, fullname, password, confirmPassword } = req.body;

  try {
    const haveUser = await User.findOne({ where: { email } });
    if (haveUser) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    const salt = await bcryptjs.genSalt(10);
    let passwordEncryp = await bcryptjs.hash(password, salt);
    const payload = { password };
    const token = await jwt.sign(payload, process.env.SECRETA, {
      expiresIn: 3600,
    });
    const newUser = await User.create({
      email,
      password: passwordEncryp,
      fullname,
      token,
    });
    return res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
