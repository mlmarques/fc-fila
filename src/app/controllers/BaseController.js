
class BaseController {

    static index() {
        return (req, resp) => {
          resp.marko(require('../views/base/index.marko'));
        };
    }

    static getFormLogin() {
        return (req, resp) => {
            resp.marko(require('../views/base/login.marko'));
        }
    }

    static getRegras() {
        return (req, resp) => {
            resp.marko(require('../views/base/regras.marko')); // view regras
        }
    }
}
module.exports = BaseController;