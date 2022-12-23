const User = require("../models/user")

const createUser = async (req, res) => {
    const User = new User(req.body)
    const result = await User.save()
    console.log(result)
    res.send(result)
}

const getUsers = async (req, res) => {
    const user = await User.find()
    console.log(user)
    res.send(user)
}

const getUser = async (req, res) => {
    const user = await User.findById()
    console.log(user)
    res.send(user)
}

const putUser = async (req, res) => {
    const _id = req.params.id
    const user = await User.updateOne({ _id }, req.body)
    console.log(user)
    res.send(user)
}

const findUser = async (req, res) => {
    const produto = await User.findOne({ _id: req.params.id })
    console.log(produto)
    res.send(produto)
}

const deleteUser = async (req, res) => {
    const _id = req.params.id 
    const response = await User.deleteOne({ _id})
    console.log(response)
    res.send(response)
}



module.exports = {
    createUser, getUser, getUsers, putUser, findUser, deleteUser,
}
