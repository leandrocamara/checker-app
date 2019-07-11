
/**
 * Verifica se o e-mail é inválido.
 *
 * @param email string
 */
export const checkEmail = (email) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ email });
    }, 1500);
  });
}
