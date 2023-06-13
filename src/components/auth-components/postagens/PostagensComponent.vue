<template>
  <div class="blog-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">BLOG DO JHONY</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" @click="logOutUser">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="blog-section">
      <div class="container">
        <h2 class="blog-heading">Lista de Postagens</h2>
        <hr>
        <div v-if="postagens.length > 0" class="row">
          <div v-for="postagem in postagens" :key="postagem._id" class="col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ postagem.titulo }}</h5>
                <p class="card-text">{{ postagem.conteudo }}</p>
                <a :href="'/postagens/' + postagem.slug" class="btn btn-primary">Leia mais</a>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="no-postagens-text">Nenhuma postagem encontrada.</p>
      </div>
    </section>
  </div>
</template>

<script src="./Postagens.js"></script>

<style scoped>
.blog-container {
  font-family: Arial, sans-serif;
}

.blog-section {
  padding: 50px 0;
}

.blog-heading {
  text-align: center;
  margin-bottom: 40px;
}

.no-postagens-text {
  text-align: center;
  font-style: italic;
  color: #888;
  margin-top: 40px;
}

.card {
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:active {
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  outline: none;
}

.navbar {
  background-color: #343a40;
}

.navbar-brand {
  color: #fff;
  font-weight: bold;
}

.nav-link {
  color: #fff;
}

.nav-link:hover {
  color: #ccc;
}
</style>
