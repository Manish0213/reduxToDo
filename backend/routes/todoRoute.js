const express = require('express');
const router = express.Router();
const Tasks = require('../models/todoSchema');
const fetchUser = require('../middleware/fetchUser');

router.get('/fetchtasks', fetchUser, async (req, res) => {
  const tasks = await Tasks.find({ userId: req.user.id});
  res.json(tasks);
})

router.post('/addtask', fetchUser, async (req, res) => {
    const {title,description} = req.body;
    const newTask = new Tasks({ userId: req.user.id, title, description });
    const addedTask = await newTask.save();
    res.send(addedTask);
})

router.delete('/deletetask/:id', async (req, res) => {
  const { id } = req.params;
  const deletedTask = await Tasks.findByIdAndDelete(id);
  res.json(deletedTask);
})

router.put('/updatetask/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description} = req.body;
  const updatedTask = await Tasks.findByIdAndUpdate({_id: id}, { title, description}, { overwriteDiscriminatorKey: true, new: true });
  res.json(updatedTask);
})

module.exports = router