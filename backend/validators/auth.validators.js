const { body } = require('express-validator');

const registerValidation = [
    body('email')
        .isEmail().withMessage('Invalid email address')
        .notEmpty().withMessage('Email is required'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('Password is required')
        .isStrongPassword().withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol'),

    body('name')
        .notEmpty().withMessage('Name is required'),
];

module.exports = {
    registerValidation
};


loginValidation = [
    body('email')
        .isEmail().withMessage('Invalid email address')
        .notEmpty().withMessage('Email is required'),
    body('password')
        .notEmpty().withMessage('Password is required')
];

module.exports = {
    registerValidation,
    loginValidation
};  