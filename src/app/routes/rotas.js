const baseRota = require('./base');
const filaRota = require('./fila');
const partidaRota = require('./partida');

module.exports = (app) => {
    baseRota(app);
    filaRota(app);
    partidaRota(app);
};