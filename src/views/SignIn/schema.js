export default {
  email: {
    presence: { allowEmpty: false, message: 'E-mail é obrigatório!' },
    email: { message: 'Este não é um e-mail válido!' },
    length: {
      maximum: 64,
      tooLong: 'E-mail é muito longo (máximo de %{count} caracteres)'
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'Senha é obrigatória!' },
    length: {
      maximum: 16,
      tooLong: 'Senha é muito longa (máximo de %{count} caracteres)'
    }
  }
};
