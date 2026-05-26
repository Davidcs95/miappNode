const dotenv = require('dotenv');
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const auth = require('./routes/auth.routes');
require('dotenv').config();

connectDB();
dotenv.config();
app.use(express.json());

app.use('/api/auth', auth);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Te conectaste al puerto ${PORT}`);
});