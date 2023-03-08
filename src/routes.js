const createUser = require('./controllers/createUser.controller');
const login = require('./controllers/login.controller');
const getUsers = require('./controllers/getUsers.controller');

module.exports = {
  createUser,
  login,
  getUsers,
};
