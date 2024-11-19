const boom = require('@hapi/boom');
const { Logger, checkers } = require('@siiges-services/shared');

const createAlumno = (
  findOneAlumnoQuery,
  findOneProgramaQuery,
  createAlumnoQuery,
  createAlumnoTipoTramiteQuery,
  createPersonaQuery,
) => async (data) => {
  const { programaId, matricula, persona } = data;

  const programa = await findOneProgramaQuery({ id: programaId }, { attributes: ['id'] });
  checkers.throwErrorIfDataIsFalsy(programa, 'programas', programaId);

  // Check if alumno with the same matricula and programaId already exists
  const existingAlumno = await findOneAlumnoQuery({
    matricula,
    programaId,
  }, { attributes: ['id'] });

  if (existingAlumno) {
    throw boom.conflict(`An alumno with matricula ${matricula} already exists in programaId ${programaId}`);
  }

  const newPersona = await createPersonaQuery(persona);
  // eslint-disable-next-line no-param-reassign
  data.personaId = newPersona.id;
  const newAlumno = await createAlumnoQuery(data);
  checkers.throwErrorIfDataIsFalsy(newAlumno, 'alumnos', newAlumno.id);

  if (data.alumnoTipoTramite) {
    const alumnoTipoTramite = await createAlumnoTipoTramiteQuery({
      alumnoId: newAlumno.id,
      tipoTramiteId: data.alumnoTipoTramite,
    });

    newAlumno.dataValues.alumnoTipoTramite = alumnoTipoTramite.dataValues;
  }

  newAlumno.dataValues.persona = newPersona.dataValues;
  Logger.info('[alumno/create]: Alumno created');

  return newAlumno;
};

module.exports = createAlumno;
