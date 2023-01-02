const {Router} = require('express')
const router = Router()
const AddressController = require('../controllers/address.controller')

router.post('', AddressController.createAddress)
router.post('', AddressController.createAddresses)
router.get('', AddressController.listAddresses)
router.get('/:id', AddressController.listAddress)
router.put('/:id', AddressController.putAddress)
router.delete('/:id', AddressController.deleteAddress)

module.exports = router