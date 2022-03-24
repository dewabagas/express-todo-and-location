const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')

router.get('/getProducts', controller.getProducts);
router.get('/getProductsByCreator/:id', controller.getProductsByCreator);
router.post('/postProduct/:id', controller.postProduct);

module.exports = router;