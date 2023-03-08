const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await UserService.createUser({ displayName, email, password, image });
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    if (!user) throw Error;
    const token = (data) => jwt.sign(data, secret, jwtConfig);
    return res.status(201).json({ token });
};

module.exports = createUser;