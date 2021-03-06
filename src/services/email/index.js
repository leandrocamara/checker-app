
import API from 'services/api'

/**
 * Verifica se o e-mail é inválido.
 *
 * @param email string
 */
export const checkEmail = async (email) => {
  return API.post('checks', { email }).then(response => response.data)
}

/**
 * Retorna a lista de e-mails validados.
 */
export const getEmails = async () => {
  return API.get('checks').then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
      return []
    })
}

/**
 * Retorna a lista de e-mails validados.
 */
export const getPercentValidsEmails = async () => {
  return API.get('checks/progress').then(response => response.data.percentValidsEmails)
}

/**
 * Retorna a quantidade total de e-mails validados.
 */
export const getTotalChecks = async () => {
  return API.get('checks/total').then(response => response.data.total)
}
