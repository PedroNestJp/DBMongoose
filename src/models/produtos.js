const mongoose = require("mongoose")
// const validator = require("validator")

const ProdutoSchema = new mongoose.Schema({
    nome:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    preco:{type:String, required:true},
    categoria:{type:String },
    createAt:{Date},
    updateAt:{Date},
    // validate: (value) => {
    //     return validator.isProdutos(value)
    //   }
})

module.exports = mongoose.model("Produtos", ProdutoSchema)