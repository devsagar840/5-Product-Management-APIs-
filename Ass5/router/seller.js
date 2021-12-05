const express = require("express");
const router = express.Router();
router.use(express.json());
// const mongoose = require("mongoose");
// mongoose.connect(process.env.mongo).then(()=>console.log("connected seller"));
router.get("/",(req,res)=> res.send("seller page"));

module.exports = router;