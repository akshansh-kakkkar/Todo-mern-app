const Task = require('../Models/Taskmodel');
const mongoose = require('mongoose');

const createTask = async (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Task is required"
        })
    }
    try {
        const task = await Task.create({ title })
        res.status(201).json(task)
    }
    catch (error) {
        res.json({ error: error.message })
    }
}

const GetAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({}).sort({ createdAt: -1 })
        if (tasks.length === 0) {
            return res.status(400).json({ error: 'No tasks found' })
        }
        return res.status(200).json(tasks)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const GetAtask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Id is used for finding the task' })
    }
    try {
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json({ error: "No task found" })
        }
        return res.status(200).json(task)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const UpdateTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Id is used for finding the task' })
    }
    try {
        const task = await Task.findOneAndUpdate({ _id: id },
            req.body,
            { new: true })
        if (!task) {
            return res.status(404).json({ error: "No task found" })
        }
        return res.status(200).json({ task, message: "workout updated successfully" })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const DeleteAtask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Id is used for finding the task' })
    }
    try {
        const task = await Task.findOneAndDelete(
            { _id: id }
        )
        if (!task) {
            return res.status(404).json({ error: "No task found" })
        }
        return res.status(200).json({ task, message: "workout deleted successfully" })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { createTask, GetAllTasks, GetAtask, DeleteAtask, UpdateTask }