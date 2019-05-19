const Fila = require('../models/fila');
const fila = new Fila();

module.exports = (app) => {

    app.get('/fila', (req, resp) => {
        fila.removerPlayers(false, 'Dunga');
        resp.send(fila.players);
    });

}
