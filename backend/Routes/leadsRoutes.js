const { Router } = require("express");
const { LeadsModel } = require("../Models/leadsModel");


const leadsController = Router();
const fastFile = require("fast-file-converter").default;
leadsController.post('/addLeads',async (req,res)=>{
    try{
        let data = await LeadsModel(req.body);
        await data.save();
        res.status(200).json({msg:'leads added successfully'})
    }catch(err){
        res.status(400).json({msg:'something went wrong'})
    }
})


leadsController.get('/',async(req,res)=>{
    try{
        let data = await LeadsModel.find();
        res.status(200).json({msg:"leads",data:data})
    }catch(err){
        res.status(400).json({msg:'something went wrong'})
    }
})




leadsController.get("/pdf", async(req, res) => {
    try{
let data=await LeadsModel.find()
fastFile(data, "pdf", res);
    }
    catch(err)
    {
        res.status(400).json({msg:"Something Went Wrong"})
    }
    
  });

module.exports={
    leadsController
}