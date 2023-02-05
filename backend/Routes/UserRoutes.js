const { Router } = require("express");

const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/UserModel");

const userController = Router();



userController.post("/signup", async (req, res) => {

const{name,email,password} = req.body;

  try {
    
    const new_user = new UserModel({email,name,password,admin:false});
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
        res.status(200).json({ msg: "Login Success", token ,role:user.admin,userEmail:user.email,username:user.name});
      }
      else{
        res.status(400).json({ msg: "Login Failed" });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: "Something Went wrong" });
  }
});



userController.post('/makeadmin',async(req,res)=>{
  let {email} = req.body;

  try{
      let updated = await UserModel.findOneAndUpdate({email},{admin:true});
      res.status(200).json({msg:'admin creation success'})
  }catch(err){
      res.status(400).json({
          msg:'something went wrong'
      })
  }
})


userController.get('/users',async(req,res)=>{
  try{
      let data = await UserModel.find();
      res.status(200).send({msg:"userData",data:data})
  }catch(err){
      res.status(400).json({msg:'failed'})
  }
})

module.exports = {
  userController,
};
