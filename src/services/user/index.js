import API from 'services/api';

/**
 * Cadastra um novo usuário.
 *
 * @param user any
 */
export const signUp = (user) => {
  return API.post('users', user)
}