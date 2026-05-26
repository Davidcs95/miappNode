const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ user: req.user });
});
module.exports = router;