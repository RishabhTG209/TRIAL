const express= require("express");

const router = express.Router();
const user = require("../models/user_model")

router.get("", async (req,res)=>{

    try{

        const user_data= await user.find().lean().exec()

        res.status(200).send(user_data)

    }catch(e){

        res.send(e.message)

    }

});


module.exports=router;