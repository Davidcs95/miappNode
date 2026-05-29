const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');
const  verifyToken  = require('../middleware/auth.middleware');
const { registerValidation } = require('../validators/auth.validators');
const validate = require('../middleware/validate.middleware');
const { loginValidation } = require('../validators/auth.validators');

router.post('/register', validate(registerValidation), register);
router.post('/login', validate(loginValidation), login);
router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ user: req.user });
});
module.exports = router;