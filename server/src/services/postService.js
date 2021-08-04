const apiError = require('../middlewares/apiError');
const PostModel = require('../models/postModel');


class PostService {

  async getAllPosts() {
    const posts = await PostModel.find();
    return posts;
  }

  async getAllPostsByUser(userId) {
    const postByUser = await PostModel.find({userId: userId});
    if (!postByUser) return apiError(200, 'User have no posts!');
    return postByUser;
  }

  async getPostById(postId) {
    const post = await PostModel.findById({_id: postId});
    if (!post) return apiError(400, 'Post not found!');
    return post;
  }

  async createPost(desc, date, userId, like, comment) {
    const newPost = {desc, date, userId, like, comment};
    await PostModel.create(newPost);
  }

  async updatePost(postId, updatedPost) {
    await PostModel.findByIdAndUpdate(postId, {
      ...updatedPost
    })
  }

  async deletePost(postId) {
    await PostModel.findByIdAndDelete(postId);
  }

}

module.exports = new PostService();
