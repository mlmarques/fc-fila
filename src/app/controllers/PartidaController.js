const Partida = require('../models/Partida');
const partida = new Partida();

class ControllerPartida {

    static index() {

    }
    static confirmPlayer() {
        return (req, resp) => {
            // code 
            resp.redirect() // redireciona depois de confirmar o jogador 
        }
    }
}
module.exports = ControllerPartida;