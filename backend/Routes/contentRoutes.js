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

module.exports = {
  contentController,
};