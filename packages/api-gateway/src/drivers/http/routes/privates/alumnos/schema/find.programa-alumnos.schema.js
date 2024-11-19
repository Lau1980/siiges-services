const { alumno } = require('./properties/alumno');
const { persona } = require('../../usuarios/schema/properties/persona');
const { situacion } = require('./properties/situacion');
const { validacion } = require('./properties/validacion');
const { situacionesValidacion } = require('./properties/situacionValidacion');
const { responseProperties } = require('./properties/responseProperties');

const findProgramaAlumnosSchema = {
  tags: ['Alumnos'],
  description: 'Return an array of Alumnos grouped by programa.',
  params: {
    title: 'findProgramaAlumnosSchema',
    type: 'object',
    properties: {
      programaId: { type: 'integer' },
    },
    required: ['programaId'],
  },
  querystring: {
    type: 'object',
    properties: {
      matricula: { type: 'string' },
    },
  },

};

module.exports = findProgramaAlumnosSchema;
