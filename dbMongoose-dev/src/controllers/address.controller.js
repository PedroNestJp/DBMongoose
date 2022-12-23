const Endereco = require("../models/enderecos")

const createAddress = async (req,res)=>  {
    const address = new Endereco(req.body)
    const result = await address.save()
    console.log(result)
    res.send(result)
}

const findAddresses = async (req,res)=>{
    const address  = await Endereco.find()
    console.log(address)
    res.send(address)

}

 const findAddress = async (req, res) => {
    const produto = await Endereco.findOne({ _id: req.params.id })
    console.log(produto)
    res.send(produto)
}

const putAddress= async (req, res) => {
    const _id = req.params.id
    const retorno = await Endereco.updateOne({ _id }, req.body)
    res.send(retorno)
}

const deleteAddress = async (req, res) => {
    const _id = req.params.id
    const retorno = await Endereco.deleteOne({ _id })
    res.send(retorno)
}

module.exports = {
    createAddress, findAddresses, findAddress, putAddress, deleteAddress
}