const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        const claveSecreta = process.env.JWT_SECRET || 'PalabraSecretaProvisional';
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, claveSecreta);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido.' });
    }
};
module.exports = { verifyToken };