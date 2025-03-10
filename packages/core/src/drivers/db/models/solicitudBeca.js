const { Model, DataTypes, Sequelize } = require('sequelize');
const { ESTATUS_SOLICITUD_BECA_TABLE } = require('./estatusSolicitudBeca');
const { CICLO_ESCOLAR_TABLE } = require('./cicloEscolar');
const { PROGRAMA_TABLE } = require('./programa');
const { USUARIO_TABLE } = require('./usuario');

const SOLICITUD_BECA_TABLE = 'solicitudes_becas';

const SolicitudBecaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  estatusSolicitudBecaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'estatus_solicitud_beca_id',
    references: {
      model: ESTATUS_SOLICITUD_BECA_TABLE,
      key: 'id',
    },
  },
  cicloEscolarId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'ciclo_escolar_id',
    references: {
      model: CICLO_ESCOLAR_TABLE,
      key: 'id',
    },
  },
  programaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'programa_id',
    references: {
      model: PROGRAMA_TABLE,
      key: 'id',
    },
  },
  usuarioId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'usuario_id',
    references: {
      model: USUARIO_TABLE,
      key: 'id',
    },
  },
  folioSolicitud: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'folio_solicitud',
  },
  observaciones: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: null,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'delete_at',
    defaultValue: null,
  },
};

class SolicitudBeca extends Model {
  static associate(models) {
    this.belongsTo(models.EstatusSolicitudBeca, { as: 'estatusSolicitudBeca' });
    this.belongsTo(models.CicloEscolar, { as: 'cicloEscolar' });
    this.belongsTo(models.Programa, { as: 'programa' });
    this.belongsTo(models.Usuario, { as: 'usuario' });
    this.hasMany(models.SolicitudBecaAlumno, { as: 'solicitudBecaAlumnos', foreignKey: 'solicitud_beca_id' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SOLICITUD_BECA_TABLE,
      modelName: 'SolicitudBeca',
      timestamps: false,
    };
  }
}

module.exports = { SOLICITUD_BECA_TABLE, SolicitudBecaSchema, SolicitudBeca };
