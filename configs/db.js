const mongoose = require('mongoose')


module.exports = () =>{
    return mongoose.connect("mongodb+srv://rishabhg1996:rishabhg1996@cluster0.txfjn.mongodb.net/Movie?retryWrites=true&w=majority")
} 