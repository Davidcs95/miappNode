const dotenv = require('dotenv');
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const auth = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.route');
const taskRoutes = require('./routes/task.route');
const cors = require('cors');
require('dotenv').config();

connectDB();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/api/auth', auth);
app.use('/api/tasks', taskRoutes);
const PORT = process.env.PORT;
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Te conectaste al puerto ${PORT}`);
});