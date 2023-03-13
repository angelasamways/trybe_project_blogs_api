const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const { CategoryService } = require('./categoryService');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const insertNewPostCategory = async (categoryIds, postId, t) => {
  await Promise.all(categoryIds
    .map(async (categoryId) => PostCategory.create({ postId, categoryId },
      { transaction: t })));
};

const createPost = async ({ title, content, categoryIds, userId }) => {
  const hasCategories = await CategoryService.isCategoryExists(categoryIds);
  if (!hasCategories) {
    return { type: null, message: 'one or more "categoryIds" not found' };
  }
  try {
    const newPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost
        .create({ title, content, userId, published: Date.now(), updated: Date.now() },
          { transaction: t });
      await insertNewPostCategory(categoryIds, post.id, t);
      return post;
    });
    return { type: null, message: newPost };
  } catch (err) {
    return { type: null, message: err.message };
  }
};

module.exports = {
  insertNewPostCategory,
  createPost,
};