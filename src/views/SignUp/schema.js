export default {
  firstName: {
    presence: { allowEmpty: false, message: 'Nome é obrigatório!' },
    length: {
      maximum: 32,
      tooLong: 'Nome é muito longo (máximo de %{count} caracteres)'
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'Sobrenome é obrigatório!' },
    length: {
      maximum: 32,
      tooLong: 'Sobrenome é muito longo (máximo de %{count} caracteres)'
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'E-mail é obrigatório!' },
    email: { message: 'Este não é um e-mail válido!' },
    length: {
      maximum: 64,
      message: 'E-mail é muito longo (máximo de %{count} caracteres)'
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'Senha é obrigatória!' },
    length: {
      maximum: 16,
      tooLong: 'Senha é muito longa (máximo de %{count} caracteres)'
    }
  },
  policy: {
    presence: { allowEmpty: false, message: 'A verificação é obrigatória!' },
    checked: { message: 'A política deve ser verificada!' }
  }
};
