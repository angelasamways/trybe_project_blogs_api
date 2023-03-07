const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) =>
User.create({ displayName, email, password, image });

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findByPk(id);

module.exports = {
  createUser,
  getByUserEmail,
  getByUserId,
};