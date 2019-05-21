const baseController = require('../controllers/BaseController');
module.exports = (app) => {
    
    app.get('/', baseController.index());

    app.get('/login', baseController.getFormLogin());
    
    app.get('/regras', baseController.getRegras());
    //  config route 
    app.get('/config', (req, resp) => {
       nameUser = baseController.getCallback(req.query.code);
       console.log(nameUser);
    });
};