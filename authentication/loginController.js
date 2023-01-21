//login

import userController from "../controller/userController";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  // atau di tampung dlm variabel
  // const items2 = await usersController.findUserByUsername(data.username)
  let data = req.body;
  // then untuk menampung hasil syntax sebelum .then
  await userController
    .findUserByUsername(data.user_name)
    .then(async items => {
      if (items.user_name) {
        if (await bcrypt.compare(data.password, items.password)) {
          // delete items.password;

          let token = jwt.sign(items, process.env.SECRET_KEY, {
            expiresIn: "2m", //kadaluarsa 2menit
          });

          res.status(200).json({
            message: "you have login",
            token: token,
          });
        } else {
          let result = "pass is wrong";
          return res.status(404).json(result);
        }
      } else {
        let result = "user not found";
        return res.status(404).json(result);
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

let checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).json("you are not auth");
  } else {
    let token = req.headers.authorization;

    try {
      jwt.verify(token, process.env.SECRET_KEY);
      return next();
    } catch (err) {
      return res.status(401).json("invalid token");
    }
  }
};

export default {
  login,
  checkToken,
};
