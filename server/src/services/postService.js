const PostModel = require('../models/postModel');
const ApiError = require('../middlewares/apiError')


class PostService {

  async getAllPosts() {
    const posts = await PostModel.find();
    if (!posts) throw ApiError.BadRequest('No created post yet!')
    return posts;
  }

  async getAllPostsByUser(userId) {
    const postByUser = await PostModel.find({userId: userId});
    if (!postByUser) throw ApiError.BadRequest('User have no posts!');
    return postByUser;
  }

  async getPostById(postId) {
    const post = await PostModel.findById({_id: postId});
    if (!post) throw ApiError.BadRequest('Post not found!');
    return post;
  }

  async createPost(desc, date, userId, like, comment) {
    const newPost = {desc, date, userId, like, comment};
    await PostModel.create(newPost);
  }

  async updatePost(postId, updatedPost) {
    await PostModel.findByIdAndUpdate({_id: postId}, {...updatedPost})
  }

  async deletePost(postId) {
    await PostModel.findByIdAndDelete(postId);
  }

}

module.exports = new PostService();
