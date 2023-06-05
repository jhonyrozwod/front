import swal from 'sweetalert';
import Api from './Api';

const LoginService = {
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const { token } = response.data;
      localStorage.setItem('jwt', token);

      if (token) {
        return '200';
      }
      return '401';
    } catch (error) {
      console.log(error);
      return '401';
    }
  },

  async verificarCodigo(email, codigoVerificacao) {
    try {
      const response = await Api().post('/verifyCode', { email, codigoVerificacao });
      const { message } = response.data;
      return message === 'Código de verificação válido';
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao verificar código de verificação');
    }
  },
};

export default LoginService;
