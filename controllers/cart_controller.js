const express= require("express");

const router = express.Router();
const cart = require("../models/cart_model")

router.get("/:id", async (req,res)=>{

    try{

        const cart_data= await cart.find({user_id:req.params.id}).populate("user_id product_id").lean().exec()

        // let total_cart_count= cart_data.reduce(function(acc,curr){
        //      return acc+curr.qty
        //  },0)

        //  let total_cart_price= cart_data.reduce(function(acc,curr){
        //     return acc+curr.product_id.price
        // },0)

        res.status(200).send(cart_data)

        // {"total_cart_count":total_cart_count,"total_cart_price":total_cart_price}

    }catch(e){

        res.send(e.message)

    }

});


router.post("/additem/:user_id", async (req,res)=>{

    try{
        const product_id=req.body.product_id;
        const user_id = req.params.user_id;

        const cart_item= await cart.findOne({"user_id":user_id,"product_id":product_id}).lean().exec();

        
         
        if(cart_item){

            if(req.query.operation=="dec"){
                await cart.findByIdAndUpdate(cart_item._id,{$inc:{qty:-1}});
            }
            else{               
                await cart.findByIdAndUpdate(cart_item._id,{$inc:{qty:1}});
              
            }
            res.end() ;   
        }
        else{
           await cart.create(req.body);
           res.end()
         }
    }catch(e){

        res.send(e.message)

    }

});


router.delete("/:product_id" ,async (req,res)=>{

    try{

        let product_id = req.params.product_id;
        let user_id =req.body.user_id;
        let item =  await cart.findOne({"product_id":product_id ,"user_id":user_id});

        await cart.findByIdAndDelete(item._id);

        res.end();

    }catch(err){
        res.send("error while deleting item",err.message)
    }

})





module.exports=router;