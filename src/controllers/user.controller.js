const Usuario = require("../models/usuario")

const createUser = async (req, res) => {
    const user = new User(req.body)
    const result = await user.save()
    console.log(result)
    res.send(result)
}

const listUsers = async (req, res) => {
    const result = await Usuario.find()
    console.log(result)
    res.send(result)
}

const listUser = async (req, res) => {
    const user = await Usuario.findById()
    console.log(user)
    res.send(user)
}
const findUser = async (req, res) => {
    const produto = await Usuario.findOne({ _id: req.params.id })
    console.log(produto)
    res.send(produto)
}

const putUser = async (req, res) => {
    const _id = req.params.id
    const user = await Usuario.updateOne({ _id }, req.body)
    console.log(user)
    res.send(user)
}


const deleteUser = async (req, res) => {
    const _id = req.params.id 
    const response = await Usuario.deleteOne({ _id})
    console.log(response)
    res.send(response)
}



module.exports = {
    createUser, listUser, listUsers, putUser, findUser, deleteUser,
}
