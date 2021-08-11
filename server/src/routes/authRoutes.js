const router = require('express').Router()
const AuthController = require('../controllers/authController')
const {registerValidator, loginValidator} = require('../validation/validation');
const {validateResult} = require('../validation');

router.post('/auth/register', registerValidator, validateResult, AuthController.registerUser)
router.post('/auth/login', loginValidator, validateResult, AuthController.loginUser)
router.post('/auth/logout', AuthController.logoutUser)
router.post('/auth/refresh', AuthController.refreshToken)



module.exports = router
