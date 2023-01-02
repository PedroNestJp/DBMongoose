
const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.post('/user/create', userController.createUser)
router.get('', userController.listUsers)
router.get('/:id', userController.listUser)
router.put('/:id', userController.putUser)
router.delete('/:id', userController.deleteUser)

module.exports = router