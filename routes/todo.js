const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller')

router.get('/getTodos', controller.getTodos);
router.post('/postTodo', controller.postTodo);
router.put('/putTodo', controller.putTodo)
router.delete('/deleteTodo', controller.deleteTodo)

module.exports = router;