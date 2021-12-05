const express = require("express");
const router = express.Router();
const cmpmodel = require("../modal/mycmp");
router.use(express.json());
// const mongoose = require("mongoose");
// mongoose.connect(process.env.mongo).then(()=>console.log("connected commpany"));

router.get("/",(req,res)=> res.send("company page"));

router.post("/addcmp",(req,res)=>{
    const data = req.body;
    cmpmodel.create(data);
    return res.json({data:'Success '});
    console.log(data);
});
router.put("/update/:cmpid" , async(req,res) =>
{
    const c_id = req.params.cmpid;
    const pro_id = req.body.prodid;
    
    const cmp_name = req.body.cmpname;

    const update_data = {cmpname: cmp_name ,prodid:pro_id}
    
    // console.log("company id :-  ",c_id);

    const updatecmp = await cmpmodel.findOneAndUpdate(
        {cmpid: c_id}, update_data ,
        {upsert:true}
        
    );
   return res.json({data:"updated"});

});

router.delete("/dltcmp",(req,res) => {
    // const cmp = req.params.cmp;
    const cmp = req.body.cmpname;
    const deletecmp = cmpmodel.findOneAndDelete({ cmpname: cmp }, (err) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("one user deleted");
        }
    });
    return res.json({data:"deleted data"+deletecmp});
});

module.exports = router;