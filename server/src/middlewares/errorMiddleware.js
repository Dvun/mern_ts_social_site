const apiError = require('./apiError');
const {validationResult} = require('express-validator')

module.exports = function (err, req, res, next) {
  if (err instanceof apiError) {
    return res.status(err.status).json({message: err.message, errors: err.errors})
  }
  return res.status(500).json({message: 'Server Error!'})
};

module.exports = validateResult = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  next()
}
