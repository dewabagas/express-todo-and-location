const express = require('express');
const router = express.Router();
const controller = require('../controllers/location.controller')

router.get('/getCities', controller.getCities)
router.get('/getCitiesNameByWordCount', controller.getCitiesNameByWordCount)
router.get('/getProvinceByCityName', controller.getProvinceByCityName)

module.exports = router;