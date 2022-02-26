const express= require("express");

const router = express.Router();
const product = require("../models/product_model")

router.get("", async (req,res)=>{

    try{

        const product_data= await product.find().lean().exec();

        res.status(200).send(product_data);

    }catch(e){

        res.send(e.message)

    }

});

router.get("/:id", async (req,res)=>{

    try{

        const product_data= await product.findById(req.params.id).lean().exec();

        res.status(200).send(product_data);

    }catch(e){

        res.send(e.message)

    }

});


router.post("",async (req,res)=>{

    try{

        const product_data= await product.create(req.body)

        res.status(200).send(product_data)

    }catch(e){

        res.send(e.message)

    }

})


module.exports=router;