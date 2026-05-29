const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project.controller');
const verifyToken = require('../middleware/auth.middleware');

// Middleware de protección
router.use(verifyToken);

// CREATE
router.post('/', projectController.createProject);

// READ
router.get('/', projectController.getProjects);

// UPDATE
router.put('/:id', projectController.getProjectById);

module.exports = router;


