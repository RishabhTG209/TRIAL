const express = require('express')

const connect = require("./configs/db")
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 3125;
app.use(express.json())

const movieSchema= require("./controllers/movie.controller")

app.use("/movielist",movieSchema)

app.listen(PORT, async () =>{

    try {
        await connect()
        console.log(`listen on port ${PORT}`)
        
    } catch (error) {
        console.log('error:', error.message)
    }

})