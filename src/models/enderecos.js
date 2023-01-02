const mongoose = require("mongoose")

const EnderecoSchema = new mongoose.Schema({
    rua:{type:String, required:true},
    bairro:{type:String, required:true},
    numero:{type:String, required:true},
    cep:{type:String, required:true },
    createAt:{Date},
    updateAt:{Date}
})

module.exports = mongoose.model("Endereco", EnderecoSchema)