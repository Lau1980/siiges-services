const tokenRecoveryPasswordSchema = {
  tags: ['Usuario'],
  description: 'Recovery Password.',
  body: {
    type: 'object',
    properties: {
      correo: {
        type: 'string', format: 'email', minLength: 3, maxLength: 50,
      },
    },
    required: ['correo'],
  },
  response: {
    201: {
      type: 'object',
      properties: {
        data: {
          type: 'string',
          example: 'Correo enviado correctamente',
        },
      },
    },
  },
};

module.exports = { tokenRecoveryPasswordSchema };
