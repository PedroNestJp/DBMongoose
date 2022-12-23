
const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.post('', userController.cadastrarUser)
router.get('', userController.getUsers)
router.get('/:id', userController.getUser)
router.put('/:id', userController.putUser)
router.delete('/:id', userController.deleteUser)

module.exports = router