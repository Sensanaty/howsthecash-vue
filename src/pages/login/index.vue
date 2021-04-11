<template>
  <div id="login-wrapper">
    <form class="form-wrapper">
      <h1>Login</h1>
      <p>Don't have an account? <router-link to="/signup">Sign Up</router-link> instead.</p>
      <label for="username">Username</label>
      <input id="username" :class="inputClass" type="text" @keyup.enter="handleLogin" v-model="username">
      <label for="password">Password</label>
      <input id="password" :class="inputClass" type="password" @keyup.enter="handleLogin" v-model="password">
      <button type="button" @click="handleLogin">Login</button>
      <span class="error-message">{{ errorMessage.message }}</span>
    </form>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    computed: {
      ...mapGetters({
        errorMessage: "user/error"
      }),
      inputClass() {
        if (this.errorMessage.message) {
          return "input-error";
        } else return "";
      }
    },
    methods: {
      handleLogin() {
        this.$store.dispatch("user/login", { username: this.username, password: this.password });
      }
    },
  };
</script>
