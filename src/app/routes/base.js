module.exports = (app) => {
    
    app.get('/', (req, resp) =>{
        resp.send('Olá mundo safado de palstel ');
    });

    app.get('/login', (req, resp) => {
        resp.send('Login');
    });
    
    app.get('/regras', (req, resp) => {
        resp.send('Regras');
    });
};