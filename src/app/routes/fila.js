const FilaController = require('../controllers/FilaController');



module.exports = (app) => {

    app.get('/fila', FilaController.index());
    // adiciona jogador a fila
    app.post('/fila', FilaController.store());
    // remove o jogador da fila
    app.delete('/fila', FilaController.remove());
    // suap
    app.path('/fila', FilaController.suap());

}
