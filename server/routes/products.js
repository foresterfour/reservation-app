const Product = require('../model/product')
const express = require('express')
const router = express.Router()

router.get('', function(req,res){
    Product.find({}, function(err, foundProducts){
        return res.json(foundProducts)
    })
})
router.get('/:productId', function(req,res){
    const productId = req.params.productId
    Product.findById(productId, function(err, foundProduct){
        if(err){
            return res.status(422).send({erroes: [{title: 'Product error', detail: 'product is not found!'}]})
        }
        return res.json(foundProduct)
    })
})

module.exports = router;
