const express = require('express');

const Movie = require('../models/movie.model')

const router = express.Router()

router.post("",async(req,res)=>{
    try {
        const movies = await Movie.create(req.body);

        return res.send(movies)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get("",async(req,res)=>{
    try {
        const movies = await Movie.find().lean().exec()

        return res.send(movies)
    } catch (error) {
        return res.send(error.message)
    }
})






module.exports = router