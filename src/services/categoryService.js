const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

// const getByUserEmail = (email) => User.findOne({ where: { email } });

// const getByUserId = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

// const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  createCategory,
};