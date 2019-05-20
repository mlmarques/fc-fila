require('marko/node-require').install();
require('marko/express');
const express = require('express');
const app = express();
const session = require('express-session')
const rotas = require('../app/routes/rotas');

rotas(app);

app.use((req, resp, next) => resp.status(404).marko(
  require('../app/views/base/404.marko')
));

app.use((error, req, resp, next) => resp.status(500).marko(
  require('../app/views/base/500.marko')
));

app.use(session({
  secret: 'dunga burro',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//  habilitando a sessão 


module.exports = app;