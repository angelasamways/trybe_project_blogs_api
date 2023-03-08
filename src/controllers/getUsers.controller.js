const { UserService } = require('../services');

const getUsers = async (_req, res) => {
  try {
    const users = await UserService.getUsers();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getUsers;