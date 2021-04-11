<template>
  <div >
    <form id="signup" class="form-wrapper">
      <h1>Sign Up</h1>
      <label for="username">Username</label>
      <input id="username" type="text" v-model="username" placeholder="Required">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" placeholder="Required">
      <label for="repeat">Confirm Password</label>
      <input id="repeat" type="password" v-model="confirmPassword" placeholder="Required">
      <label for="email">Email</label>
      <input id="email" type="email">
      <button type="button" @click="handleSignup">Sign Up</button>
      <span class="error-message"></span>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Logout",
    data() {
      return {
        username: "",
        password: "",
        confirmPassword: "",
        email: ""
      };
    },
    methods: {
      handleSignup() {
        this.$store.dispatch("user/signup", { username: this.username, password: this.password, email: this.email });
      },
    }
  };
</script>
