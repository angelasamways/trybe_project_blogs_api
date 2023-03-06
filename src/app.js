const express = require('express');
const routes = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
const apiRoutes = express.Router();

apiRoutes.post('/login', routes.login);

// ...
app.use(apiRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
