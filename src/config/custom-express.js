require('marko/node-require').install();
require('marko/express');
const express = require('express');
const app = express();
const rotas = require('../app/routes/rotas');
const session = require('express-session');
  
rotas(app);

app.use((req, resp, next) => resp.status(404).marko(
  require('../app/views/base/404.marko')
));

app.use((error, req, resp, next) => resp.status(500).marko(
  require('../app/views/base/500.marko')
));
//  habilitando a sessão 


module.exports = app;