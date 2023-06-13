<template>
  <div class="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 col-sm-8 offset-sm-2">
          <form class="login-form" v-on:submit.prevent="loginSubmitUserForm()">
            <div class="logo-container">
              <img :src="caminhoDaImagem" alt="Imagem" class="logo-image">
              <hr class="separator">
            </div>

            <!-- Email -->
            <div class="form-group">
              <input
                type="text"
                id="email"
                name="email"
                class="form-control mb-5"
                placeholder="Digite seu E-mail"
                v-model="loginForm.email"
                :class="{
                  'is-invalid': isSubmitted && $v.loginForm.email.$error,
                }"
              />
              <div
                v-if="isSubmitted && !$v.loginForm.email.required"
                class="invalid-feedback"
              >
                O campo e-mail é obrigatório!
              </div>
            </div>

            <!-- Password -->
            <div class="form-group">
              <input
                type="password"
                id="password"
                name="password"
                class="form-control mb-5"
                placeholder="Digite sua Senha"
                v-model="loginForm.password"
                :class="{
                  'is-invalid': isSubmitted && $v.loginForm.password.$error,
                }"
              />
              <div
                v-if="isSubmitted && !$v.loginForm.password.required"
                class="invalid-feedback"
              >
                O campo password é obrigatório!
              </div>
            </div>

            <p class="center">
              Não tem uma conta cadastrada?
              <router-link to="/register">Cadastre Aqui</router-link>
            </p>

            <div class="button-container">
              <button @click="submitLoginUser" class="btn btn-primary btn-block">
                Entrar
              </button>
            </div>

            <div v-if="abrirModal" class="modal">
              <div class="modal-content square">
                <h2 class="modal-title">Verificação de código</h2>
                <br><br>
                <input
                  type="text"
                  id="codigoVerificacao"
                  name="codigoVerificacao"
                  placeholder="Insira o código"
                  v-model="codigoVerificacao"
                  class="modal-input"
                >
                <br>
                <div class="modal-buttons">
                  <button @click="verificarCodigo()"
                  class="modal-button btn-primary">Verificar</button>
                  <button @click="closedModal()" class="modal-button btn-secondary">Fechar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style scoped>
.container {
  /* Estilos do container */
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo-image {
  border: 5px solid black;
}

.separator {
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #ff00ff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.square {
  width: 300px; /* ajuste a largura desejada */
  height: 300px; /* ajuste a altura desejada */
}

.modal-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: #00ff00;
}

.modal-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #00ff00;
  border-radius: 5px;
  background-color: #ffff00;
  color: #0000ff;
}

.modal-buttons {
  display: flex;
  justify-content: center;
}

.modal-button {
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-button:hover {
  background-color: #00ffff;
  color: #000000;
}
</style>
