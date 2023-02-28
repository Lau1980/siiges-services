const createSolicitudPrograma = require('./create.handlers.solicitud-plantel.adapters');
const findAllSolicitudesProgramas = require('./find-all.handlers.solicitudes-programas.adapters');
const findOneSolicitudPrograma = require('./find-one.handlers.solicitud-programa.adapters');

module.exports = {
  createSolicitudPrograma,
  findAllSolicitudesProgramas,
  findOneSolicitudPrograma,
};