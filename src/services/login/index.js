import API from 'services/api';

/**
 * Autentica o usuário.
 *
 * @param auth any
 */
export const signIn = (auth) => {
  auth.password = atob(auth.password);
  return API.post('auth/login', auth)
    .then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
    });
}

/**
 * Realiza o 'logout' do usuário.
 */
export const signOut = () => {
  return API.get('auth/logout')
    .then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
    });
}
