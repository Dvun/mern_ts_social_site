const PostService = require('../services/postService')

class PostController {

  async getAllPosts(req, res, next) {
    try {
      const posts = await PostService.getAllPosts()
      res.json(posts)
    } catch (e) {
      next(e);
    }
  }

  async getAllPostsByUser(req, res, next) {
    const {userId} = req.body
    try {
      const postsByUser = await PostService.getAllPostsByUser(userId)
      res.json(postsByUser)
    } catch (e) {
      next(e);
    }
  }

  async getPostById(req, res, next) {
    const {postId} = req.body
    try {
      const post = await PostService.getPostById(postId)
      res.json(post)
    } catch (e) {
      next(e);
    }
  }

  async createPost(req, res, next) {
    const {desc, date, userId, like, comment} = req.body
    await PostService.createPost(desc, date, userId, like, comment)
    res.status(200).json('New post created!')
    try {
    } catch (e) {
      next(e);
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
      console.log(e);
      next(e);
    }
  }

  async deletePost(req, res, next) {
    const {postId} = req.params
    try {
      await PostService.deletePost(postId)
      res.status(200).json('Post deleted!')
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new PostController();
