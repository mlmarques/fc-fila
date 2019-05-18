module.exports = (app) => {
    
    app.get('/', (req, resp) =>{
        resp.send('ola mundo safado de palstel ');
    });
};