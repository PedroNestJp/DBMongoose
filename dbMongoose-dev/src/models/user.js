const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nomeCompleto:{type:String, required:true, unique:true},
    cpf:{type:String, required:true, unique:true},
    email:{type:String, required:true,unique:true},
    senha:{type:String, required:true}
})

module.exports = mongoose.model("Usuario", userSchema)