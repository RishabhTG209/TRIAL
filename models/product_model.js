const mongoose =require("mongoose");

const product_schema = new mongoose.Schema({
    product_name:{type:String , required:true},
    brand:{type:String , required:true},
    price:{type:String , required:true},
    discount:{type:String , required:true},
    images:[{type:String },],
    description:{type:String , required:true},
})

module.exports = mongoose.model("product",product_schema)