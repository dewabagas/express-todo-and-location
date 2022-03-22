const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')

router.get('/getUsers', controller.getUsers)
router.post('/postUser', controller.postUser);

module.exports = router;