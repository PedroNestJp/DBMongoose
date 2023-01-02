const Produtos = require("../models/produtos")

const createProducts = async (req,res)=>  {
    const produtos = new Produtos(req.body)
    const result = await produtos.save()
    console.log(result)
    res.send(result)
}

const listProducts = async (req,res)=>{
    const result  = await Produtos.find()
    console.log(result)
    res.send(result)

}

 const listProduct = async (req, res) => {
    const result = await Produtos.findOne({ _id: req.params.id })
    console.log(result)
    res.send(result)
}

const putProduct= async (req, res) => {
    const _id = req.params.id
    const result = await Produtos.updateOne({ _id }, req.body)
    res.send(result)
}

const deleteProduct = async (req, res) => {
    const _id = req.params.id
    const result = await Produtos.deleteOne({ _id })
    res.send(result)
}

module.exports = {
    createProducts, listProduct, listProducts, putProduct, deleteProduct
}