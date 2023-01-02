const Endereco = require("../models/enderecos")

const createAddress = async (req,res)=>  {
    const address = new Endereco(req.body)
    const result = await address.save()
    console.log(result)
    res.send(result)
}
const createAddresses = async (req,res)=>  {
    const addresses = new Endereco(req.body)
    const result = await addresses.save()
    console.log(result)
    res.send(result)
}

const listAddresses = async (req,res)=>{
    const result  = await Endereco.find()
    console.log(result)
    res.send(result)

}

 const listAddress = async (req, res) => {
    const result = await Endereco.findOne({ _id: req.params.id })
    console.log(result)
    res.send(result)
}

const putAddress= async (req, res) => {
    const _id = req.params.id
    const result = await Endereco.updateOne({ _id }, req.body)
    res.send(result)
}

const deleteAddress = async (req, res) => {
    const _id = req.params.id
    const result = await Endereco.deleteOne({ _id })
    res.send(result)
}


module.exports = {
    createAddresses ,createAddress,  listAddresses,  listAddress, putAddress, deleteAddress
}