const Project = require('../models/project.model');

// 1. CREATE
const createProject = async (req, res) => {
    try {
        const {
            title,
            description,
            imageUrl,
            githubUrl,
            liveUrl,
            techStack
        } = req.body;

        const newProject = new Project({
            title,
            description,
            imageUrl,
            githubUrl,
            liveUrl,
            techStack,
            author: req.user.id
        });

        const savedProject = await newProject.save();

        res.status(201).json(savedProject);

    } catch (error) {
        res.status(500).json({
            message: 'Error creating project',
            error: error.message
        });
    }
};


// 2. READ (AHORA ES PÚBLICO: Trae todos los productos sin buscar req.user.id)
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('author', 'username email');

        res.status(200).json(projects);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching projects',
            error: error.message
        });
    }
};


// 3. UPDATE
const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            description,
            imageUrl,
            githubUrl,
            liveUrl,
            techStack
        } = req.body;

        const updatedProject = await Project.findOneAndUpdate(
            { _id: id, author: req.user.id },
            {
                title,
                description,
                imageUrl,
                githubUrl,
                liveUrl,
                techStack
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedProject) {
            return res.status(404).json({
                message: 'Project not found or unauthorized'
            });
        }

        res.status(200).json(updatedProject);

    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el proyecto',
            error: error.message
        });
    }
};


module.exports = {
    createProject,
    getProjects,
    getProjectById
};