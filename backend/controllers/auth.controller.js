const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// REGISTER
const register = async (req, res) => {
    
    
    console.log("LOGIN RECIBIDO:", req.body);

    

    try {

        const { username, email, password } = req.body;

        let userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: `El usuario ${email} ya existe`
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        return res.status(201).json({
            message: 'Usuario registrado exitosamente'
        });

    } catch (error) {

        console.error("ERROR REGISTER:", error);

        return res.status(500).json({
            message: 'Error en el registro',
            error: error.message
        });
    }
};

// LOGIN
const login = async (req, res) => {
console.log("LOGIN RECIBIDO:", req.body);
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'Usuario no encontrado'
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: 'Contraseña incorrecta'
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
    message: 'Login exitoso',
    token,
    user: {
        username: user.username,
        email: user.email
    }
        });

    } catch (error) {

        return res.status(500).json({
            message: 'Error interno del servidor'
        });
    }
};

// EXPORTAR
module.exports = {
    register,
    login
};