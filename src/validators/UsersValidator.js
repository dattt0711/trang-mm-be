const {check} = require('express-validator');

const registerValidator = [
    check('userName').notEmpty().withMessage('username must be required'),
    check('password').notEmpty().withMessage('password must be required'),
    check('email').notEmpty().withMessage('email must be required'),
];
const loginValidator = [
    check('userName').notEmpty().withMessage('username must be required'),
    check('password').notEmpty().withMessage('password must be required'),
]
module.exports = {
    registerValidator,
    loginValidator,
};
