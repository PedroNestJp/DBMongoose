const {Router} = require('express')
const router = Router()
const ProdutoController = require('../controllers/produto.controller')

router.post('', ProdutoController.createProduto)
router.get('', ProdutoController.findProdutos)
router.get('/:id', ProdutoController.findProduto)
router.put('/:id', ProdutoController.putProduto)
router.delete('/:id', ProdutoController.deleteProduto)

module.exports = router