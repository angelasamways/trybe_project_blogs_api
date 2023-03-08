const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) =>
User.create({ displayName, email, password, image });

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findByPk(id);

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  createUser,
  getByUserEmail,
  getByUserId,
  getUsers,
};