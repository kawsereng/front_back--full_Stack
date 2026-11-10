const mongoose = require ('mongoose')
const { Schema } = mongoose


let todo_Schema= new Schema({

    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
   
})
module.exports = mongoose.model("collection",todo_Schema)