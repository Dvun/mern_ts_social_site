const {check} = require('express-validator');

const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

exports.registerValidator = [
  check('firstName', 'Name is required!').notEmpty(),
  check('lastName', 'Surname is required!').notEmpty(),
  check('lastName', 'Username is required!').notEmpty(),
  check('email', 'Email is required!').notEmpty().isEmail().normalizeEmail().custom(validateEmail)
    .withMessage('Email is not correct!'),
  check('password', 'Password is required!').notEmpty().isLength({min: 6})
    .withMessage('Password minimum length is 6 chars!').matches(/\d/).withMessage('Password must contains a number!'),
];

exports.loginValidator = [
  check('email', 'Email is required!').notEmpty().isEmail().normalizeEmail().custom(validateEmail)
    .withMessage('Email is not correct!'),
  check('password', 'Password is required!').notEmpty().isLength({min: 6})
    .withMessage('Password minimum length is 6 chars!').matches(/\d/).withMessage('Password must contains a number!'),
];

