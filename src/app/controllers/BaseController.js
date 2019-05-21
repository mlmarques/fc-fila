
class BaseController {

    static index() {
        return (req, resp) => {
        req.session = {nome : "ricardinho"}
          resp.marko(require('../views/base/index.marko'),
          { 
            session: req.session
          })
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

    static getCallback(code) {
        const axios = require('axios');
        const clientID = '78682276946.629095647621';
        const clientSecret = '34216c65e65b23e6604f660d758938eb';
        const url_red = 'http://localhost:3000/config';
        axios({
            method: 'post',
            url: `https://slack.com/api/oauth.access/?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&redirect_uri=${url_red}`,
            headers: {
                accept: 'x-www-form-urlencoded'
           }
        }
        ).then((response) => {
          return response.data.user.name;
        }).catch((error) => {
            return error;
        });
    } 
    
}
module.exports = BaseController;