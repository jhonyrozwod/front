import swal from 'sweetalert';
import VueJwtDecode from 'vue-jwt-decode';
import PostagensService from '@/services/PostagensService';

export default {
  name: 'PostagensComponent',
  data() {
    return {
      postagens: {},
    };
  },
  methods: {
    async fetchPostagens() {
      try {
        this.postagens = await PostagensService.listarPostagens();
      } catch (error) {
        console.error(error);
      }
    },
    formatarData(data) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(data).toLocaleDateString('pt-BR', options);
    },
    getUser() {
      const token = localStorage.getItem('jwt');
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
    this.fetchPostagens();
  },

};
