const Fila = require('../models/Fila');
const fila = new Fila();

class FilaController {
    
    static index() {
        return (req, resp) => {
            resp.send(fila.players);
        };
    }

    static store() {
        return (req, resp) => {
            // code    
        } 
    }

    static remove() {
        return (req, resp) => {
            // codee    
        }
    }

    static suap() {
        return (req, resp) => {
            // code    
        }
    } 

}
module.exports = FilaController;