const express = require('express');
const router = express.Router();
const Tasks = require('../models/todoSchema');

router.get('/fetchtasks', async (req, res) => {
  const tasks = await Tasks.find({});
  res.json(tasks);
})

router.post('/addtask', async (req, res) => {
    const {title,description} = req.body;
    const newTask = new Tasks({ title, description });
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