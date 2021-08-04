const apiError = require('../middlewares/apiError');
const PostService = require('../services/postService')

class PostController {

  async getAllPosts(req, res, next) {
    try {
      const posts = PostService.getAllPosts()
      res.status(200).json(posts)
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async getAllPostsByUser(req, res, next) {
    const {userId} = req.body
    try {
      const postsByUser = await PostService.getAllPostsByUser(userId)
      res.json(postsByUser)
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async getPostById(req, res, next) {
    const {postId} = req.body
    try {
      const post = await PostService.getPostById(postId)
      res.json(post)
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async createPost(req, res, next) {
    const {desc, date, userId, like, comment} = req.body
    await PostService.createPost(desc, date, userId, like, comment)
    res.status(200).json('New post created!')
    try {
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async updatePost(req, res, next) {
    const {postId} = req.params
    const {desc, date, userId, like, comment} = req.body
    const updatedPost = {desc, date, userId, like, comment}
    try {
      await PostService.updatePost(postId, updatedPost)
      res.status(200).json('Post updated!')
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

  async deletePost(req, res, next) {
    const {postId} = req.params
    try {
      await PostService.deletePost(postId)
      res.status(200).json('Post deleted!')
    } catch (e) {
      next(apiError(500, 'Server Error!'));
    }
  }

}

module.exports = new PostController();
