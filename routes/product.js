const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')
const middleware = require('../middlewares/auth')

router.get('/getProducts', controller.getProducts);
router.get('/getProductsByCreator', middleware.verify, controller.getProductsByCreator);
router.post('/postProduct', middleware.verify, controller.postProduct);

module.exports = router;