const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String, required: true },
    techStack: [{ type: String }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });


module.exports = mongoose.model('Project', projectSchema);

