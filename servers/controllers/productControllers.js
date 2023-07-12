const Product = require('../models/prodcut.models');

module.exports = {
    findAllProduct: (req, res) => {
        Product.find()
            .then ((allProducts) => {res.json({AllProducts: allProducts})})
            .catch ((err) => {res.json({err})})
    },
    createProduct: (req,res) =>{
        Product.create(req.body)
            .then ((newProduct) => {res.json({NewPorduct: newProduct})})
            .catch ((err) => {res.json({err})})
    },
    findOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then ((product) => {res.json({Product: product})})
            .catch ((err) => {res.json({err})})
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new:true, ranvalidator:true})
            .then ((updatedProduct) => {res.json({Product: updatedProduct})})
            .catch ((err) => {res.json({err})})
    },

}