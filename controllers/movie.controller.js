const express = require('express');

const Movie = require('../models/movie.model')

const router = express.Router()

router.post("/",async(req,res)=>{
    try {
        const movies = await Movie.create(req.body);

        return res.send(movies)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get("/",async(req,res)=>{
    try {
        const movies = await Movie.find().lean().exec()

        return res.send(movies)
    } catch (error) {
        return res.send(error.message)
    }
})

// Get Particulaar
router.get("/single/:id",async (req,res)=>{
    try{
        const movie= await Movie.findById(req.params.id).lean().exec()
        return res.send(movie);
    }
    catch(err){
        console.log(res);
    }
})
// Patch
router.patch("/update/:id",async (req,res)=>{
    try{
        const movie= await Movie.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        }).lean().exec()
        return res.send(movie);
    }
    catch(err){
        console.log(res);
    }
})

// Delete
router.delete("/delete/:id",async (req,res)=>{
    try{
        const movie= await Movie.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(movie);
    }
    catch(err){
        console.log(res);
    }
})




module.exports = router