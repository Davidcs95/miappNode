const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const verifyToken = require('../middleware/auth.middleware');

const { registerValidation } = require('../validators/auth.validators');
const { loginValidation } = require('../validators/auth.validators');

const validate = require('../middleware/validate.middleware');

console.log("register:", typeof authController.register);
console.log("login:", typeof authController.login);
console.log("validate:", typeof validate);
console.log("registerValidation:", Array.isArray(registerValidation));
console.log("loginValidation:", Array.isArray(loginValidation));

router.post('/register', validate(registerValidation), authController.register);
router.post('/login', validate(loginValidation), authController.login);

router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ user: req.user });
});

module.exports = router;