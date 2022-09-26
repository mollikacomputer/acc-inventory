const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.post("/api/v1/product", async(req, res, next)=>{
  console.log(req.body);
  // const product = new Product(req.body)
  // const result = await product.save()

  // res.status(200).json({
  //   status:'success',
  //   message:'Data inserted successfully',
  //   data:result
  // })
  
  // res.send('successfully data post')
});

module.exports = app;