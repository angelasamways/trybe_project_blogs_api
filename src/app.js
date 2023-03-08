const express = require('express');
const { login, createUser, getUsers } = require('./routes');
const { 
validateName,
validateEmail,
validatePassword,
emailExists,
} = require('./middlewares/validations');
const validateJWT = require('./auth/validateJWT');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/login', login);
apiRoutes.post('/user', validateName, validateEmail, validatePassword, emailExists, createUser);
apiRoutes.get('/user', validateJWT, getUsers);

app.use(apiRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
