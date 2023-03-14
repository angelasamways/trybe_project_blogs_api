const { PostService, CategoryService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user;
  
  const isValid = await CategoryService.isCategoryExists(categoryIds);
  if (isValid === false) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const post = await PostService.createPost({ title, content, categoryIds, userId }); 
  // console.log({ title, content, categoryIds, userId });
  return res.status(201).json(post);
};

module.exports = createPost;