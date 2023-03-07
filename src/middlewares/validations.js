const { UserService } = require('../services');

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  return next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\w+((-|\+|\.)\w+)*@\w+([\\.-]?\w+)*(\.\w{2,})+/;
  if (!email.match(emailRegex)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  return next();
};

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const isEmailInUse = await UserService.getByUserEmail(email);
  if (isEmailInUse) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  return next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  emailExists,
};