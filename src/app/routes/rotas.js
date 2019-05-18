const baseRota = require('./base');
const filaRota = require('./fila');

module.exports = (app) => {
    baseRota(app);
    filaRota(app);
};