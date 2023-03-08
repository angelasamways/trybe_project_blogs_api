const createUser = require('./controllers/createUser.controller');
const login = require('./controllers/login.controller');
const getUsers = require('./controllers/getUsers.controller');
const getById = require('./controllers/getById.controller');
const createCategory = require('./controllers/createCategory.controller');
const getCategories = require('./controllers/getCategories.controller');

module.exports = {
  createUser,
  login,
  getUsers,
  getById,
  createCategory,
  getCategories,
};
