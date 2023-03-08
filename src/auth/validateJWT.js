const jwt = require('jsonwebtoken');
require('dotenv/config');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await UserService.getByUserId(decoded.data.id);

  req.user = user;
  
 next();
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;