const router = require('express').Router()
const AuthController = require('../controllers/authController')
const {registerValidator, loginValidator} = require('../validation/validation')
const validatorResult = require('../middlewares/errorMiddleware')

router.post('/auth/register', registerValidator, validatorResult, AuthController.registerUser)
router.post('/auth/login', loginValidator, validatorResult, AuthController.loginUser)
router.post('/auth/logout', AuthController.logoutUser)
router.get('/auth/refresh', AuthController.refreshToken)


module.exports = router
