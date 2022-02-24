const express = require('express')

const connect = require("./configs/db")
const app = express()

require('dotenv').config();

app.use(express.json())

const movieSchema= require("./controllers/movie.controller")

app.use("/movielist",movieSchema)

app.listen(3125, async () =>{

    try {
        await connect()
        console.log("listen on port 3125")
        
    } catch (error) {
        console.log('error:', error.message)
        
    }

})