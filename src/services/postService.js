const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createPost = async ({ title, content, categoryIds, userId }) => {
  try {
    const newPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({
        title, content, userId, published: Date.now(), updated: Date.now(),
      }, { transaction: t });
      await Promise.all(categoryIds.map(async (categoryId) =>
       PostCategory.create({ postId: post.dataValues.id, categoryId },
          { transaction: t })));
      return post;
    });
    return newPost;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = {
  createPost,
};