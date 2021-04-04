<template>
  <form id="login">
    <label for="username">Username</label>
    <input id="username" type="text" @keyup.enter="handleLogin" v-model="username">
    <label for="password">Password</label>
    <input id="password" type="password" @keyup.enter="handleLogin" v-model="password">
    <button type="button" @click="handleLogin">Login</button>
  </form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      handleLogin() {
        this.$store.dispatch("user/login", { username: this.username, password: this.password });
      }
    },
  };
</script>
