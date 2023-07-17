const Product = require('../models/products')

// GET all products
const getAllProducts = async (req, res) => {

    const products = await Product.find()
    res.json(products)
}

// POST a new product
const createProduct = async (req, res) => {
    const product = new Product(req.body)
    const saveProduct = await product.save()
    res.status(201).json(saveProduct)
}

// GET a single product
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            error: 'Product not found'
        })
    }
}

// PUT update a product
const updateProduct = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    if(updatedProduct) {
        res.json(updatedProduct)
    } else {
        res.status(404).json({
            error: 'Product not found'
        })
    }
}

// DELETE a product
const deleteProduct = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if(deletedProduct) {
        res.json({
            message: 'Product deleted'
        })
    } else {
        res.status(404).json({
            error: 'Product not found'
        })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}