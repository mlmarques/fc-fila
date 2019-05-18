var fs = require(fs);

class Partida {
      
    constructor() {
        this._game = JSON.parse(fs.readFileSync('src/config/infra/partida.json', 'utf8'))
    }
}