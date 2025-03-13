const { Logger } = require('@siiges-services/shared');
const errorHandler = require('../../../utils/errorHandler');

const FEATURE = {
  PROCESADA: 3,
  ATENDER_OBSERVACIONES: 4,
};

const NOTIFICATION_MAPPING = {
  [FEATURE.PROCESADA]: async (processor, solicitudBeca) => {
    await processor({
      usuarioId: solicitudBeca.usuario.id,
      email: solicitudBeca.usuario.correo,
      asunto: `SIGES: Confirmación de Solicitud de Becas con Folio ${solicitudBeca.folioSolicitud}`,
      template: 'reporteSolicituBecas',
      params: {
        solicitudBeca,
      },
    });
  },
  [FEATURE.ATENDER_OBSERVACIONES]: async (processor, solicitudBeca) => {
    await processor({
      usuarioId: solicitudBeca.usuario.id,
      email: solicitudBeca.usuario.correo,
      asunto: `SIGES: Atender Obervaciones - Solicitud de Becas con Folio ${solicitudBeca.folioSolicitud}`,
      template: 'observacionesSolicitudBecas',
      params: {
        solicitudBeca,
      },
    });
  },
};

async function sendNotificationReport(processor, estatusSolicitud, solicitudBeca) {
  const action = NOTIFICATION_MAPPING[estatusSolicitud];

  if (!action) {
    return;
  }
  await action(processor, solicitudBeca);
}

async function updateSolicitudBeca(request, reply) {
  try {
    const { solicitudBecaId } = request.params;
    const data = request.body;
    Logger.info('[SolicutudBeca]: update solicitud beca');

    const solicitudBeca = await this.solicitudBecaServices
      .updateSolicitudBeca(data, { id: solicitudBecaId });

    // generar archivo pdf a enviar
    // const solicitudReport = generateFile(solicitudBeca);

    const { estatusSolicitudBecaId } = data;
    const processor = this.notificacionServices.sendNotificationEmail;
    await sendNotificationReport(processor, estatusSolicitudBecaId, solicitudBeca);

    return reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: solicitudBeca });
  } catch (error) {
    return errorHandler(error, reply);
  }
}
module.exports = { updateSolicitudBeca };
