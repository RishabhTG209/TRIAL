const express = require('express')
const cors = require('cors')
const connect = require("./configs/db")
const body_parser = require("body-parser")
const app = express()

const Heroku = require('heroku-client')
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })

require('dotenv').config();
const PORT = process.env.PORT || 3125;

app.use(body_parser.json())
// app.use(express.json())
app.use(cors())

const movieSchema= require("./controllers/movie.controller")
const user_controller = require("./controllers/user_controller")
const product_controller = require("./controllers/product_controller")
const cart_controller = require("./controllers/cart_controller")
const {register, login} = require("./controllers/auth_controller")


app.use("/cart",cart_controller)
app.use("/movielist",movieSchema)
app.use("/product",product_controller);
app.use("/user",user_controller);
app.post("/register",register);
app.post("/login",login);
// app.post("/data",movieSchema)

app.listen(PORT, async () =>{

    try {
        await connect()
        console.log(`listen on port ${PORT}`)
        
    } catch (error) {
        console.log('error:', error.message)
    }

})