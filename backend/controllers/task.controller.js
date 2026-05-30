const Task = require('../models/task.model');

// CREATE TASK
const createTask = async (req, res) => {
    try {

        const { titulo } = req.body;

        const newTask = new Task({
            titulo,
            user: req.user.id
        });

        const savedTask = await newTask.save();

        return res.status(201).json(savedTask);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: 'Error al crear la tarea',
            error: error.message
        });
    }
};

// GET ALL TASKS
const getTasks = async (req, res) => {
    try {

        const tasks = await Task.find({
            user: req.user.id
        }).populate('user', 'username email');

        return res.status(200).json(tasks);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: 'Error al obtener tareas',
            error: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks
};