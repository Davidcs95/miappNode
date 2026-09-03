const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


// 1. Configuración de entorno única
dotenv.config();

const app = express();

// 2. Middlewares (CORS debe ir primero para procesar las peticiones OPTIONS y headers de Ngrok)
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'ngrok-skip-browser-warning', 
    'Bypass-Tunnel-Reminder', 
    'bypass-tunnel-reminder'
  ],
  credentials: true
}));

app.use(express.json());

// 3. Importaciones
const auth = require('./routes/auth.routes');
const projectRoutes = require('./routes/project.route');
const taskRoutes = require('./routes/task.route');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.route');
const path = require('path');

// 4. Inicialización de Base de Datos
connectDB();
mongoose.connection.once('open', () => {
  console.log("¡Conectado exitosamente a la base de datos:", mongoose.connection.name);
});

// 5. Rutas
app.use('/api/products', productRoutes);
app.use('/api/auth', auth);
app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

const PORT = process.env.PORT || 3000; 
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});