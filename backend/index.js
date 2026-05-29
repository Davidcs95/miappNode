const dotenv = require('dotenv');
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const auth = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.route');

require('dotenv').config();

connectDB();
dotenv.config();
app.use(express.json());

app.use('/api/auth', auth);

const PORT = process.env.PORT;
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Te conectaste al puerto ${PORT}`);
});