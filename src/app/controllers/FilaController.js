const Fila = require('../models/Fila');
const fila = new Fila();

class FilaController {
    
    static index() {
        return (req, resp) => {
            resp.marko(require('../views/home.marko'), 
            {
                fila: fila.players
            });
        };
    }

    static store() {
       // fila.addNewplayer();
        return (req, resp) => {
           resp.redirect('/fila');   
        } 
    }

    static remove() {
       // fila.removePlayers(); // passa dupla = true or false  &&  passa o jogador
        return (req, resp) => {
            resp.redirect('/fila');
        }
    }

    static suap() {
       // fila.suap() // passa o jogador
        return (req, resp) => {
            // code    
        }
    } 

}
module.exports = FilaController;