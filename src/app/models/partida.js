var fs = require(fs);

class Partida {
      
    constructor() {
        this._game = JSON.parse(fs.readFileSync('src/config/infra/partida.json', 'utf8'))
    }

    get game() {
        return this._game;
    }

    startTimeOfStay() {

    }

    ConfirmPlayer(player) {

    }

    finishPartida() {

    }

    verifyTime() {

    }
}

module.exports = Partida;