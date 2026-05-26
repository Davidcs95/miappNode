const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





 const register = async (req, res) => {
    const { username, email, password } = req.body;

    let userExists = await User.findOne({ email: email });
    if (userExists) {
        return res.status(400).json({ message: `el usuario ${email} ya existe` });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   
      user = new User({
        username: username,
        email: email,
        password: hashedPassword
     });
     await user.save();   

      return res.status(201).json({ message: 'Usuario registrado exitosamente' });
     
await bcrypt.hash(password, 10)
  



}

module.exports = {
    register
};


























const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

       
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            process.env.JWT_SECRET || 'PalabraSecretaProvisional',
            { expiresIn: '1h' }
        );

        
        return res.status(200).json({
            message: '¡Login exitoso!',
            token: token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}; 

module.exports = { register, login };






