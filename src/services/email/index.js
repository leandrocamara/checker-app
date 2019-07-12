import API from 'services/api';

/**
 * Verifica se o e-mail é inválido.
 *
 * @param email string
 */
export const checkEmail = (email) => {
  return API.post('email/check', { email })
    .then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
    });
}

/**
 * Retorna a lista de e-mails validados.
 */
export const getEmails = () => {
  return API.get('email/')
    .then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
      return [];
    });
}
