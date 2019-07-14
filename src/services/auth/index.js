import API from 'services/api'

/**
 * Autentica o usuário.
 *
 * @param auth any
 */
export const signIn = async (auth) => {
  // auth.password = atob(auth.password);
  return API.post('users/auth', auth).then(response => {
    localStorage.setItem('token', response.data.accessToken)
  })
}

/**
 * Retorna o usuário autenticado.
 */
export const getUserAuthenticated = async () => {
  return API.get('users').then(response => response.data)
}

/**
 * Realiza o 'logout' do usuário.
 */
export const signOut = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      removeToken()
      resolve(true)
    }, 1500)
  })
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

/**
 * Remove o Token armazenado no LocalStorage.
 */
export const removeToken = () => {
  return localStorage.removeItem('token')
}
