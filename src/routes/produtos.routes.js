const {Router} = require('express')
const router = Router()
const ProdutoController = require('../controllers/produto.controller')

router.post('', ProdutoController.createProducts)
router.get('', ProdutoController.listProducts)
router.get('/:id', ProdutoController.listProduct)
router.put('/:id', ProdutoController.putProduct)
router.delete('/:id', ProdutoController.deleteProduct)

module.exports = router