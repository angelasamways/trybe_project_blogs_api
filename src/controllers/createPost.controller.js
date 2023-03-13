const { PostService, CategoryService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds, userId } = req.body;
  const isValid = await CategoryService.isCategoryExists();
  if (isValid === false) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  
  const post = await PostService.createPost({ title, content, categoryIds, userId });
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return res.status(201).json(post);
};

module.exports = createPost;