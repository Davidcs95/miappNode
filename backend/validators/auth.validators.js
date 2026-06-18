const { body } = require('express-validator');

const registerValidation = [
    body('email')
        .isEmail()
        .withMessage('Invalid email address')
        .notEmpty()
        .withMessage('Email is required'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .notEmpty()
        .withMessage('Password is required'),

    body('username')
        .notEmpty()
        .withMessage('Username is required')
];

const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Invalid email address')
        .notEmpty()
        .withMessage('Email is required'),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
];

module.exports = {
    registerValidation,
    loginValidation
};