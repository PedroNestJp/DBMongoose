const Produto = require("../models/produtos")

const createProduto = async (req,res)=>  {
    const produto = new Produto(req.body)
    const result = await produto.save()
    console.log(result)
    res.send(result)
}

const findProdutos = async (req,res)=>{
    const produto  = await Produto.find()
    console.log(produto)
    res.send(produto)

}

 const findProduto = async (req, res) => {
    const produto = await Produto.findOne({ _id: req.params.id })
    console.log(produto)
    res.send(produto)
}

const putProduto= async (req, res) => {
    const _id = req.params.id
    const retorno = await Produto.updateOne({ _id }, req.body)
    res.send(retorno)
}

const deleteProduto = async (req, res) => {
    const _id = req.params.id
    const retorno = await Produto.deleteOne({ _id })
    res.send(retorno)
}

module.exports = {
    createProduto, findProdutos, findProduto, putProduto, deleteProduto
}