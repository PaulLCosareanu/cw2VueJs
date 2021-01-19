const express = require("express")
const mongodb  = require("mongodb")


const router= express.Router();

//get products////////////////////////////////////////////////////

router.get("/",async(req,res)=>{
    const products=await loadProductsCollection();
    res.send(await products.find({}).toArray());
})

//add products//////////////////////////////////////////////////////////////

router.post("/", async(req,res)=>{
    const products=await loadProductsCollection();
    await products.insertOne({
        subject: req.body.subject,
        location:req.body.location,
        price:req.body.price,
        quantity:req.body.quantity,
        img_link:req.body.img
    });
    res.status(201).send();
})

//delete products///////////////////////////////////////////////

router.delete("/:id", async(req,res)=>{
    const products=await loadProductsCollection();
    await products.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
})


//update products*************************************************



async function loadProductsCollection(){
    const client=await mongodb.MongoClient.connect("mongodb+srv://UserMongo:1234%40Middlesex@products.ysvpf.mongodb.net/vue?retryWrites=true&w=majority", { useNewUrlParser: true })

    return client.db("vue").collection("products")





}

module.exports = router;
