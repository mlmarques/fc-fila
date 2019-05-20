var fs = require('fs');

class Fila {

    constructor() {
      this._players = JSON.parse(fs.readFileSync('src/config/infra/fila.json', 'utf8'));
    }

    get players() {
        return this._players;
    }

    addNewplayer(nomePlayer) {
      const newPlayer = {nome : nomePlayer};
      this._players.push(newPlayer);
      this._players = JSON.stringify(this._players);
      fs.writeFile('src/config/infra/fila.json', this._players, (error) => {
         if(error) {
            return false;
         }
         return true;
      });
    }

    suap() {

    }

    removePlayers(double, player) {
      if(double) {
        this._players.shift();
        this._players.shift(); 
      } else {
        for(var key in this._players) {
          if(this._players[key].nome == player) {
            this._players.splice(key, 1);
            }
        }
      }
    this._players = JSON.stringify(this._players);
    fs.writeFile('src/config/infra/fila.json', this._players, (error) => {
        if(error) {
          return false;
        }
        return true;
    });
  }
  
  leaveFila(player) {
    for(var key in this._players) {
      if(this._players.nome == player ) {
        this._players.splice(key, 1);
      }
    }
    fs.writeFile('src/config/infra/fila.json', this._players, (error) => {
      if(error) {
        return false;
      }
      return true;
    });
  }

  notifyFriends() {
    
  }

}

module.exports = Fila;