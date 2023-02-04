const { Router } = require("express");

const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/UserModel");

const userController = Router();














userController.post("/signup", async (req, res) => {
  try {
    const new_user = new UserModel(req.body);
    await new_user.save();
    res.status(200).json({ msg: "SignUp Successfull" });
  } catch (err) {
    res.status(400).json({ msg: "SignUp Failed" });
  }
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await UserModel.findOne({ email });
    //   console.log(user)
    if (user.email) {
      if (user.password == password) {
        // console.log(user.password)
        const token = jwt.sign({ userId: user._id }, process.env.SECRET);
        res.status(200).json({ message: "Login Success", token });
      }
      else{
        res.status(400).json({ msg: "Login Failed" });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: "Something Went wrong" });
  }
});

module.exports = {
  userController,
};
