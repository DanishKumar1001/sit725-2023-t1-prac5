const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoControllers');

router.get('/', todoController.getTodos);
router.post('/add', todoController.createTodo);
router.post('/update/:id', todoController.updateTodo);
router.post('/delete/:id', todoController.deleteTodo);

module.exports = router;
