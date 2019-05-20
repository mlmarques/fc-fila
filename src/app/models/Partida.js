var fs = require('fs');

class Partida {
      
    constructor() {
        this._game = JSON.parse(fs.readFileSync('src/config/infra/partida.json', 'utf8'))
    }

    get game() {
        return this._game;
    }

    startTimeOfWait() {
        let newData = new Date();
        let timesTemp = newData.setMinutes(newData.getMinutes() + 3);
        this._game.date_limit =  new Date(timesTemp).toLocaleString();
        fs.writeFile('src/config/infra/partida.json', JSON.stringify(this._game), (error) => {
            if(error) {
                return false;
            }   
            return true;
        });
    }

    ConfirmPlayer(player) {
       if(this._game.jogador1 != '') {
            this._game.jogador2 = player;
       } else {
           this._game.jogador1 = player;
       }
       fs.writeFile('src/config/infra/partida.json', JSON.stringify(this._game), (error) => {
            if(error) {
                return false;
            }
            return true;
       });
    }

    finishPartida() {
        this._game.splice(0, 1);
        this._game = {jogador1 : "", jogador2 : "", status : "", date_limit : ""};
        fs.writeFile('src/config/infra/partida.json', JSON.stringify(this._game), (error) => {
            if(error) {
                return false;
            }
            return true;
        });
    }

    verifyTimeLimitEnd() {
        let date = new Date().toLocaleString();
        if(date > this._game.date_limit) {
            return true
        }
        return false;
    }
}

module.exports = Partida;