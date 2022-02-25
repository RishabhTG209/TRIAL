const express = require('express')
const cors = require('cors')
const connect = require("./configs/db")
const app = express()

const Heroku = require('heroku-client')
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })

require('dotenv').config();
const PORT = process.env.PORT || 3125;
app.use(express.json())
app.use(cors())

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