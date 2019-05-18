var fs = require('fs');

class Fila {

    constructor() {
      this._players = JSON.parse(fs.readFileSync('src/config/infra/fila.json', 'utf8'));
    }
    get players() {
        return this._players;
    }
    index() {

    }

    addNewplayer() {

    }

    suap() {

    }

    removerPlayers() {

    }
}

module.exports = Fila;