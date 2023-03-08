const { UserService } = require('../services');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getByUserId(id);
    if (!user) throw Error;
    return res.status(200).json(user);
    } catch (err) {
      return res.status(404).json({ message: 'User does not exist' });
    }
};

module.exports = getById;