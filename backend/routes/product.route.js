const { Router } = require('express');
const { getProducts, createProduct, seedProducts } = require('../controllers/product.controller');

const router = Router();

// Ruta para sembrar los datos (puedes entrar desde el navegador a /api/products/seed una vez)
router.get('/seed', seedProducts);

// Ruta pública para ver todos los productos
router.get('/', getProducts);

// Ruta para crear un producto
router.post('/', createProduct);

module.exports = router;