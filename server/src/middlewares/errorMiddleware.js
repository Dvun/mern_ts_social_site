const {validationResult} = require('express-validator');
const ApiError = require('../middlewares/apiError');

module.exports = function errorMiddleware (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message, errors: err.errors});
  }
  next()
};


module.exports = validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  next();
};
