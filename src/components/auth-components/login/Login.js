/**
 * file: src/components/auth-components/login/Login.js
 * data: 11/03/2021
 * description: arquivo responsável pela lógica do componente 'Login.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import LoginService from '@/services/LoginService';

const logo = require('@/assets/logo.png');

export default {
  name: 'LoginComponent',
  data() {
    return {
      abrirModal: false,
      codigoVerificacao: null,
      loginForm: {
        email: null,
        password: null,
        codigoVerificacao: '',
        resultado: '',
      },
      isSubmitted: false,
      caminhoDaImagem: logo,
    };
  },

  validations: {
    loginForm: {
      email: { required },
      password: { required },

    },
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        // Chamar o serviço de login para enviar o código de verificação por email
        const teste = await LoginService.loginUser(this.loginForm);
        if (teste === '200') {
          this.openModal();
        } else {
          swal({
            title: 'Oops!',
            text: 'Alguma coisa deu errado aqui!',
            icon: 'error',
          });
          this.$router.push('/');
        }

        // Abrir o modal de verificação
      } catch (error) {
        swal({
          title: 'Senha I3123123ncorreta!',
          text: 'Digite a senh3123123a cadastrada!',
          icon: 'error',
        });
      }
    },
    closedModal() {
      this.abrirModal = false;
    },

    openModal() {
      this.abrirModal = true;
    },

    async verificarCodigo() {
      try {
        // eslint-disable-next-line max-len
        const resultado = await LoginService.verificarCodigo(this.loginForm.email, this.codigoVerificacao);
        this.resultado = resultado;

        if (resultado) {
          // Redirecionar para a página inicial após a verificação do código
          this.$router.push('/home');
          // Limpar o formulário de login
          this.loginForm = {};
        }
      } catch (error) {
        swal({
          title: 'CODIGO ERRADO BIELZITO',
          text: 'CHUPA ',
          icon: 'error',
        });
        this.$router.push('/');
        this.resultado = 'Erro ao verificar código';
      }
    },
  },
};
