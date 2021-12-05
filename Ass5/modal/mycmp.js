const mongoose = require("mongoose");

const cmpSchema = mongoose.Schema({

    cmpname:String,
    cmpid:String,
    prodid:String,
});

const cmpmodel = mongoose.model("Company",cmpSchema,"Company");

module.exports = cmpmodel;



