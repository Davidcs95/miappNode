const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const verifyToken = require('../middleware/auth.middleware');

const { registerValidation } = require('../validators/auth.validators');
const { loginValidation } = require('../validators/auth.validators');

const validate = require('../middleware/validate.middleware');

router.post('/register', validate(registerValidation), authController.register);
router.post('/login', validate(loginValidation), authController.login);
router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ user: req.user });
});
module.exports = router;