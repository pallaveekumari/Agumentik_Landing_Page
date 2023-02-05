const { Router } = require("express");
const { ContentModel } = require("../Models/contentModel");


const contentController = Router();


contentController.get("/", async (req, res) => {
  try {
    let data = await ContentModel.find();
    // console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});



contentController.post('/update',async(req,res)=>{
  let payload = req.body;
  try{
    await ContentModel.findByIdAndUpdate('63dea3bf4b554a997f5ac00d',payload);
    res.status(200).json({msg:"Data updated successfully"});
  }catch(err){
    console.log(err);
    res.status(400).json({msg:"Update failed"})
  }
})





module.exports = {
  contentController,
};