const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project.controller');
const verifyToken = require('../middleware/auth.middleware');

// --- RUTA PÚBLICA PARA VER LOS PRODUCTOS Y SUS IMÁGENES ---
router.get('/', projectController.getProjects);

// --- RUTAS PROTEGIDAS ---
router.use(verifyToken);

// CREATE
router.post('/', projectController.createProject);

// UPDATE
router.put('/:id', projectController.getProjectById);

module.exports = router;


