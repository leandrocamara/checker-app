
/**
 * Autentica o usuário.
 *
 * @param email string
 * @param password string
 */
export const signIn = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ email, password });
    }, 1500);
  });
}
