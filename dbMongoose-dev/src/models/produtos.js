const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema({
    nome:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    preco:{type:String, required:true},
    categoria:{type:String },
    createAt:{Date},
    updateAt:{Date}
})

module.exports = mongoose.model("Produto", produtoSchema)