const express = require("express")
const mongoDb  = require("mongodb")


const router= express.Router();

//get

router.get("/",(req,res)=>{
    res.send("hello")
})


module.exports = router;