export enum ContactResponseMessage {
  SUCCESS = '¡Tu solicitud fue enviada con éxito! Te hemos enviado un correo de confirmación y nuestro equipo se pondrá en contacto contigo muy pronto.',
  INVALID_DATA = 'Algunos datos del formulario no son válidos. Por favor revisa la información ingresada e inténtalo de nuevo.',
  EMAIL_REJECTED = 'No pudimos enviar el correo en este momento porque la dirección de correo parece no estar disponible. Verifica tu correo electrónico e inténtalo nuevamente.',
  SERVER_ERROR = 'Estamos presentando inconvenientes en este momento. Por favor intenta nuevamente en unos minutos.',
  NETWORK_ERROR = 'No fue posible conectarse con el servidor. Verifica tu conexión a internet e inténtalo de nuevo.',
  UNKNOWN_ERROR = 'Ocurrió un error inesperado al enviar tu solicitud. Por favor intenta nuevamente.'
}

export function getContactResponseMessage(status?: number): string {
  switch (status) {
    case 400:
      return ContactResponseMessage.INVALID_DATA;
    case 422:
      return ContactResponseMessage.EMAIL_REJECTED;
    case 500:
      return ContactResponseMessage.SERVER_ERROR;
    case 0:
      return ContactResponseMessage.NETWORK_ERROR;
    default:
      return ContactResponseMessage.UNKNOWN_ERROR;
  }
}
