const express = require('express')
require("dotenv").config();
const app = express()
const port = 4000
const company = require("./router/company.js");
const product= require("./router/product.js");
const seller = require("./router/seller.js");
const mongoose = require("mongoose");
mongoose.connect(process.env.mongo).then(()=>console.log("connected database"));

app.use("/cmp",company);
app.use("/seller",seller);
app.use("/product",product);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))