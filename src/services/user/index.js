import API from 'services/api';

/**
 * Cadastra um novo usuário.
 *
 * @param user any
 */
export const signUp = (user)  => {
  return API.post('user/', user)
    .then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
    });
}