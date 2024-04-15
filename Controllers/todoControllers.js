const Todo = require('../Models/todoModel');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};
