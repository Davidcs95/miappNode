const Product = require('../models/product.model');

// 1. OBTENER TODOS LOS PRODUCTOS (Público para la tienda)
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching products',
            error: error.message
        });
    }
};

// 2. CREAR UN PRODUCTO (Por si quieres agregarlos desde un panel de administración)
const createProduct = async (req, res) => {
    try {
        const {
            id,
            nombre,
            precio,
            categoria,
            imagen,
            descripcion,
            cantidad
        } = req.body;

        const newProduct = new Product({
            id,
            nombre,
            precio,
            categoria,
            imagen,
            descripcion,
            cantidad
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);

    } catch (error) {
        res.status(500).json({
            message: 'Error creating product',
            error: error.message
        });
    }
};

// 3. SEMBRAR PRODUCTOS (Ruta temporal para insertar los 24 productos iniciales)
const seedProducts = async (req, res) => {
    try {
        const productsData = [
            { id: 11, nombre: "Dry food", precio: 5000, categoria: "Cat", imagen: "foodcat.jpg", descripcion: "Is dehydrated food with only 6% to 11% moisture...", cantidad: 50 },
            { id: 12, nombre: "Feeders and waterers", precio: 80000, categoria: "Cat", imagen: "comederocat.jpg", descripcion: "Feeders and waterers are containers or automatic systems...", cantidad: 15 },
            { id: 13, nombre: "Arenero", precio: 22000, categoria: "Cat", imagen: "arenaa.jpg", descripcion: "An arenero (bandeja sanitaria) is a specialized indoor container...", cantidad: 90 },
            { id: 14, nombre: "scoop", precio: 9000, categoria: "Cat", imagen: "pala.jpg", descripcion: "A litter scoop is an essential tool for maintaining your cat's litter box...", cantidad: 140 },
            { id: 15, nombre: "Cat hammocks", precio: 70000, categoria: "Cat", imagen: "camacat.jpg", descripcion: "Cat hammocks and cunas (cat beds) are designed to provide felines...", cantidad: 30 },
            { id: 16, nombre: "Cat scratcher", precio: 90000, categoria: "Cat", imagen: "rascadorcat.jpg", descripcion: "A cat scratcher (rascador) is an essential feline accessory...", cantidad: 80 },
            { id: 17, nombre: "Clothing", precio: 22000, categoria: "Cat", imagen: "ropacat.jpg", descripcion: "Cat clothing is specially designed apparel for felines...", cantidad: 50 },
            { id: 18, nombre: "Pig food", precio: 22000, categoria: "Animal", imagen: "pigfood.jpg", descripcion: "Pig feed is a balanced diet that combines energy sources...", cantidad: 50 },
            { id: 19, nombre: "Chicken feeders", precio: 29000, categoria: "Animal", imagen: "comederogallina.jpg", descripcion: "Chicken feeders are containers designed to provide food continuously...", cantidad: 500 },
            { id: 20, nombre: "Horse Health Red Cell", precio: 77000, categoria: "Animal", imagen: "suplementohorse.jpg", descripcion: "Horse Health Red Cell is a premium, iron-rich vitamin and mineral supplement...", cantidad: 71 },
            { id: 21, nombre: "Licopan Energy", precio: 88000, categoria: "Animal", imagen: "caballosumplemento2.jpg", descripcion: "Licopan Energy is a premium veterinary supplement designed to provide rapid energy...", cantidad: 96 },
            { id: 22, nombre: "Solla Ponedoras", precio: 37000, categoria: "Animal", imagen: "gallinafood.jpg", descripcion: "Solla Ponedoras is a line of specialized commercial poultry feed...", cantidad: 30 },
            { id: 23, nombre: "The Agrofácil Nipple Drinker", precio: 44000, categoria: "Animal", imagen: "bebederochicken.jpg", descripcion: "The Agrofácil Nipple Drinker with Coupling is a teat-type water supply system...", cantidad: 400 },
            { id: 24, nombre: "Pig feeders", precio: 100000, categoria: "Animal", imagen: "pigfood2.jpg", descripcion: "Pig feeders are essential structures designed to provide feed continuously...", cantidad: 250 }
        ];

        await Product.deleteMany({}); // Limpia si ya existía algo previo
        await Product.insertMany(productsData);
        res.status(200).json({ message: "¡Productos insertados con éxito en la base de datos!" });

    } catch (error) {
        res.status(500).json({
            message: 'Error seeding products',
            error: error.message
        });
    }
};

module.exports = {
    getProducts,
    createProduct,
    seedProducts
};