const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

// const getByUserEmail = (email) => User.findOne({ where: { email } });

// const getByUserId = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const getCategories = () => Category.findAll();

module.exports = {
  createCategory,
  getCategories,
};