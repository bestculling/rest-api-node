const express = require('express')
const router = express.Router()

const productsController = require('../controller/productsController')

// GET all products
router.get('/', productsController.getAllProducts)

// GET a single product
router.get('/:id', productsController.getProductById)

// POST a new product
router.post('/', productsController.createProduct)

// PUT update a product
router.put('/:id', productsController.updateProduct)

// DELETE a product
router.delete('/:id', productsController.deleteProduct)

module.exports = router