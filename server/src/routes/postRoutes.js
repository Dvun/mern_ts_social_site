const router = require('express').Router()
const PostController = require('../controllers/postController')
const AuthMiddleware = require('../middlewares/authMiddleware')

router.get('/posts', AuthMiddleware.verifyToken, PostController.getAllPosts)
router.get('/posts/:userId', AuthMiddleware.verifyToken, PostController.getAllPostsByUser)
router.get('/posts/:postId', AuthMiddleware.verifyToken, PostController.getPostById)
router.post('/posts', AuthMiddleware.verifyToken, PostController.createPost)
router.put('/posts/:postId', AuthMiddleware.verifyToken, PostController.updatePost)
router.delete('/posts/:postId', AuthMiddleware.verifyToken, PostController.deletePost)


module.exports = router
