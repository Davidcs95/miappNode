const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const verifyToken = require('../middleware/auth.middleware');

router.use(verifyToken);

// CREATE
router.post('/', taskController.createTask);

// GET ALL TASKS
router.get('/', taskController.getTasks);

module.exports = router;