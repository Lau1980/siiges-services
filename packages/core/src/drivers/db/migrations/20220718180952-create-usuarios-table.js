const { CICLO_TABLE, CicloSchema } = require('../models/ciclo');
const { DOMICILIO_TABLE, DomicilioSchema } = require('../models/domicilio');
const { DILIGENCIA_TABLE, DiligenciaSchema } = require('../models/diligencia');
const { ESTATUS_SOLICITUD_TABLE, EstatusSolicitudSchema } = require('../models/estatusSolicitud');
const { ESTADO_TABLE, EstadoSchema } = require('../models/estado');
const { FILE_TABLE, FileSchema } = require('../models/file');
const { INSTITUCION_TABLE, InstitucionSchema } = require('../models/institucion');
const { MODALIDAD_TABLE, ModalidadSchema } = require('../models/modalidad');
const { MUNICIPIO_TABLE, MunicipioSchema } = require('../models/municipio');
const { NIVEL_TABLE, NivelSchema } = require('../models/nivel');
const { PAIS_TABLE, PaisSchema } = require('../models/pais');
const { PERSONA_TABLE, PersonaSchema } = require('../models/persona');
const { PLANTEL_TABLE, PlantelSchema } = require('../models/plantel');
const { PROGRAMA_TABLE, ProgramaSchema } = require('../models/programa');
const { TURNO_TABLE, TurnoSchema } = require('../models/turno');
const { PROGRAMA_TURNO_TABLE, ProgramaTurnoSchema } = require('../models/programaTurno');
const { RATIFICACION_NOMBRE_TABLE, RatificacionNombreSchema } = require('../models/ratificacionNombre');
const { REPRESENTANTE_TABLE, RepresentanteSchema } = require('../models/representante');
const { ROL_TABLE, RolSchema } = require('../models/rol');
const { SOLICITUD_TABLE, SolicitudSchema } = require('../models/solicitud');
const { TIPO_INMUEBLE_TABLE, TipoInmuebleSchema } = require('../models/tipoInmueble');
const { TIPO_SOLICITUD_TABLE, TipoSolicitudSchema } = require('../models/tipoSolicitud');
const { USUARIO_TABLE, UsuarioSchema } = require('../models/usuario');
const { USUARIO_USUARIO_TABLE, UsuarioUsuarioSchema } = require('../models/usuarioUsuario');
const { RECTOR_TABLE, RectorSchema } = require('../models/rector');
const { DIRECTOR_TABLE, DirectorSchema } = require('../models/director');
const { DOCENTE_TABLE, DocenteSchema } = require('../models/docente');
const { TIPO_INSTALACION_TABLE, TipoInstalacionSchema } = require('../models/tipoInstalacion');
const { ASIGNATURA_TABLE, AsignaturaSchema } = require('../models/asignatura');
const { ASIGNATURA_DOCENTE_TABLE, AsignaturaDocenteSchema } = require('../models/asignaturaDocente');
const { SECCION_TABLE, SeccionSchema } = require('../models/seccion');
const { SOLICITUD_SECCION_TABLE, SolicitudSeccionSchema } = require('../models/solicitudSeccion');
const { HIGIENE_TABLE, HigieneSchema } = require('../models/higiene');
const { PLANTEL_HIGIENE_TABLE, PlantelHigieneSchema } = require('../models/plantelHigiene');
const { INFRAESTRUCTURA_TABLE, InfraestructuraSchema } = require('../models/infraestructura');
const { INFRAESTRUCTURA_PROGRAMA_TABLE, InfraestructuraProgramaSchema } = require('../models/infraestructuraPrograma');
const { ASIGNATURA_INFRAESTRUCTURA_TABLE, AsignaturaInfraestructuraSchema } = require('../models/asignaturaInfraestructura');
const { ESTATUS_INSPECCIONES_TABLE, estatusInspeccionesSchema } = require('../models/estatusInspecciones');
const { INSPECCIONES_APARTADOS_TABLE, inspeccionesApartadosSchema } = require('../models/inspeccionApartado');
const { INSPECCIONES_CATEGORIAS_TABLE, inspeccionesCategoriasSchema } = require('../models/inspeccionCategorias');
const { INSPECCIONES_TIPO_PREGUNTAS_TABLE, inspeccionesTipoPreguntasSchema } = require('../models/inspeccionesTipoPreguntas');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ROL_TABLE, RolSchema);
    await queryInterface.createTable(PAIS_TABLE, PaisSchema);
    await queryInterface.createTable(ESTADO_TABLE, EstadoSchema);
    await queryInterface.createTable(MUNICIPIO_TABLE, MunicipioSchema);
    await queryInterface.createTable(DOMICILIO_TABLE, DomicilioSchema);
    await queryInterface.createTable(PERSONA_TABLE, PersonaSchema);
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
    await queryInterface.createTable(FILE_TABLE, FileSchema);
    await queryInterface.createTable(INSTITUCION_TABLE, InstitucionSchema);
    await queryInterface.createTable(TIPO_INMUEBLE_TABLE, TipoInmuebleSchema);
    await queryInterface.createTable(PLANTEL_TABLE, PlantelSchema);
    await queryInterface.createTable(RATIFICACION_NOMBRE_TABLE, RatificacionNombreSchema);
    await queryInterface.createTable(ESTATUS_SOLICITUD_TABLE, EstatusSolicitudSchema);
    await queryInterface.createTable(TIPO_SOLICITUD_TABLE, TipoSolicitudSchema);
    await queryInterface.createTable(SOLICITUD_TABLE, SolicitudSchema);
    await queryInterface.createTable(REPRESENTANTE_TABLE, RepresentanteSchema);
    await queryInterface.createTable(DILIGENCIA_TABLE, DiligenciaSchema);
    await queryInterface.createTable(CICLO_TABLE, CicloSchema);
    await queryInterface.createTable(MODALIDAD_TABLE, ModalidadSchema);
    await queryInterface.createTable(NIVEL_TABLE, NivelSchema);
    await queryInterface.createTable(PROGRAMA_TABLE, ProgramaSchema);
    await queryInterface.createTable(TURNO_TABLE, TurnoSchema);
    await queryInterface.createTable(PROGRAMA_TURNO_TABLE, ProgramaTurnoSchema);
    await queryInterface.createTable(USUARIO_USUARIO_TABLE, UsuarioUsuarioSchema);
    await queryInterface.createTable(RECTOR_TABLE, RectorSchema);
    await queryInterface.createTable(DIRECTOR_TABLE, DirectorSchema);
    await queryInterface.createTable(TIPO_INSTALACION_TABLE, TipoInstalacionSchema);
    await queryInterface.createTable(DOCENTE_TABLE, DocenteSchema);
    await queryInterface.createTable(ASIGNATURA_TABLE, AsignaturaSchema);
    await queryInterface.createTable(ASIGNATURA_DOCENTE_TABLE, AsignaturaDocenteSchema);
    await queryInterface.createTable(SECCION_TABLE, SeccionSchema);
    await queryInterface.createTable(SOLICITUD_SECCION_TABLE, SolicitudSeccionSchema);
    await queryInterface.createTable(HIGIENE_TABLE, HigieneSchema);
    await queryInterface.createTable(PLANTEL_HIGIENE_TABLE, PlantelHigieneSchema);
    await queryInterface.createTable(INFRAESTRUCTURA_TABLE, InfraestructuraSchema);
    await queryInterface.createTable(INFRAESTRUCTURA_PROGRAMA_TABLE, InfraestructuraProgramaSchema);
    await queryInterface.createTable(
      ASIGNATURA_INFRAESTRUCTURA_TABLE,
      AsignaturaInfraestructuraSchema,
    );
    await queryInterface.createTable(ESTATUS_INSPECCIONES_TABLE, estatusInspeccionesSchema);
    await queryInterface.createTable(INSPECCIONES_APARTADOS_TABLE, inspeccionesApartadosSchema);
    await queryInterface.createTable(INSPECCIONES_CATEGORIAS_TABLE, inspeccionesCategoriasSchema);
    await queryInterface.createTable(
      INSPECCIONES_TIPO_PREGUNTAS_TABLE,
      inspeccionesTipoPreguntasSchema,
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ROL_TABLE);
    await queryInterface.dropTable(PAIS_TABLE);
    await queryInterface.dropTable(ESTADO_TABLE);
    await queryInterface.dropTable(MUNICIPIO_TABLE);
    await queryInterface.dropTable(DOMICILIO_TABLE);
    await queryInterface.dropTable(PERSONA_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(REPRESENTANTE_TABLE);
    await queryInterface.dropTable(FILE_TABLE);
    await queryInterface.dropTable(INSTITUCION_TABLE);
    await queryInterface.dropTable(TIPO_INMUEBLE_TABLE);
    await queryInterface.dropTable(PLANTEL_TABLE);
    await queryInterface.dropTable(RATIFICACION_NOMBRE_TABLE);
    await queryInterface.dropTable(ESTATUS_SOLICITUD_TABLE);
    await queryInterface.dropTable(TIPO_SOLICITUD_TABLE);
    await queryInterface.dropTable(SOLICITUD_TABLE);
    await queryInterface.dropTable(REPRESENTANTE_TABLE);
    await queryInterface.dropTable(DILIGENCIA_TABLE);
    await queryInterface.dropTable(CICLO_TABLE);
    await queryInterface.dropTable(MODALIDAD_TABLE);
    await queryInterface.dropTable(NIVEL_TABLE);
    await queryInterface.dropTable(PROGRAMA_TABLE);
    await queryInterface.dropTable(TURNO_TABLE);
    await queryInterface.dropTable(PROGRAMA_TURNO_TABLE);
    await queryInterface.dropTable(USUARIO_USUARIO_TABLE);
    await queryInterface.dropTable(RECTOR_TABLE);
    await queryInterface.dropTable(DIRECTOR_TABLE);
    await queryInterface.dropTable(TIPO_INSTALACION_TABLE);
    await queryInterface.dropTable(DOCENTE_TABLE);
    await queryInterface.dropTable(ASIGNATURA_TABLE);
    await queryInterface.dropTable(ASIGNATURA_DOCENTE_TABLE);
    await queryInterface.dropTable(SECCION_TABLE);
    await queryInterface.dropTable(SOLICITUD_SECCION_TABLE);
    await queryInterface.dropTable(HIGIENE_TABLE);
    await queryInterface.dropTable(PLANTEL_HIGIENE_TABLE);
    await queryInterface.dropTable(INFRAESTRUCTURA_TABLE);
    await queryInterface.dropTable(INFRAESTRUCTURA_PROGRAMA_TABLE);
    await queryInterface.dropTable(ASIGNATURA_INFRAESTRUCTURA_TABLE);
    await queryInterface.dropTable(ESTATUS_INSPECCIONES_TABLE);
    await queryInterface.dropTable(INSPECCIONES_APARTADOS_TABLE);
    await queryInterface.dropTable(INSPECCIONES_CATEGORIAS_TABLE, inspeccionesCategoriasSchema);
    await queryInterface.dropTable(
      INSPECCIONES_TIPO_PREGUNTAS_TABLE,
      inspeccionesTipoPreguntasSchema,
    );
  },
};
