export default {
  email: {
    presence: { allowEmpty: false, message: 'E-mail é obrigatório!' },
    length: {
      maximum: 64,
      tooLong: 'E-mail é muito longo (máximo de %{count} caracteres)'
    }
  }
};
