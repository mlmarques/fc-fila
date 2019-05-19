class BaseController {

    static index() {
        return (req, resp) => {
            resp.send('Olá mundo safado de palstel ');
        };
    }

    static getFormLogin() {
        return (req, resp) => {
            resp.send('Login');
        }
    }

    static getRegras() {
        return (req, resp) => {
            resp.marko(); // view regras
        }
    }
}
module.exports = BaseController;