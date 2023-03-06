const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getUsers = () => User.findAll();

const getByUsername = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findByPk(id);

module.exports = {
  createUser,
  getUsers,
  getByUsername,
  getByUserId,
};