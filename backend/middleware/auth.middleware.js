const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({
            message: 'Acceso denegado. No se proporcionó token.'
        });
    }

    const token = authHeader.split(' ')[1];

    try {

        const verified = jwt.verify(
            token,
            process.env.JWT_SECRET || 'PalabraSecretaProvisional'
        );

        req.user = verified;

        next();

    } catch (error) {

        return res.status(401).json({
            message: 'Token inválido'
        });
    }
};

module.exports = verifyToken;