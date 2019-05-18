const Fila = require('../models/fila');
const fila = new Fila();

module.exports = (app) => {

    app.get('/fila', (req, resp) => {
        resp.send(fila.players);
    });

}
