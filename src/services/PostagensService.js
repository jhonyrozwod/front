import Api from './Api';

const PostagensService = {
  async listarPostagens() {
    try {
      const response = await Api().get('/postagens');
      return response.data.map((postagem) => ({
        titulo: postagem.titulo,
        conteudo: postagem.conteudo,
        descricao: postagem.descricao,
        slug: postagem.slug,
      }));
    } catch (error) {
      throw new Error('Erro ao listar postagens');
    }
  },
};

export default PostagensService;
