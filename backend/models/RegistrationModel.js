const connection = require("../connection")
const mongoose = require("mongoose")
const userSchema =new mongoose.Schema({
   fullName:String,
   email: String,
     password: String,

     contact: String
})
 const Registeration= mongoose.model("Registration",userSchema)
module.exports = Registeration
