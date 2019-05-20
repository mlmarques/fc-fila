const PartidaController = require('../controllers/PartidaController');

module.exports = (app) => {

     app.path('/partida/confirmaJogador', PartidaController.confirmPlayer());
}