const { UserService } = require('../services');

const getById = async (req, res) => {
  const { id } = req.params;
    const user = await UserService.getByUserId(id);
    if (!user) {
      res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
};

module.exports = getById;