const {Router} = require('express')
const router = Router()
const AddressController = require('../controllers/address.controller')

router.post('', AddressController.findAddress)
router.get('', AddressController.findAddresses)
router.get('/:id', AddressController.findAddress)
router.put('/:id', AddressController.putAddress)
router.delete('/:id', AddressController.deleteAddress)

module.exports = router