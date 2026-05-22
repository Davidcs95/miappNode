const user = require('../models/User');
const bcrypt = require('bcrypt');


const register = async (req, res) => {
    const { username, email, password } = req.body;
    let user = await user.findOne({ email: email });
    if (user) {
        return res.status(400).json({ message: `el usuario ${email} ya existe` });
    }
    await user.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
}