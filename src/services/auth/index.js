import API from 'services/api'

/**
 * Autentica o usuário.
 *
 * @param auth any
 */
export const signIn = async (auth) => {
  // auth.password = atob(auth.password);
  return API.post('users/auth', auth)
}

/**
 * Realiza o 'logout' do usuário.
 */
export const signOut = async () => {
  return API.get('auth/logout')
    .then(response => response.data)
    .catch(error => { // @TODO - Tratar após a implementação da API
      console.log(error)
    });
}

/**
 * Retorna o Token armazenado no LocalStorage.
 */
export const getToken = () => {
  return localStorage.getItem('token')
}

/**
 * Verifica se o usuário está autenticado.
 */
export const isAuthenticated = () => {
  return (getToken() !== null)
}
