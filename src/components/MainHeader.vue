<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink v-if="!loggedIn" to="/login">Login</RouterLink>
    </nav>
    <p v-if="loggedIn">Welcome back, {{ user.username }}</p>
    <button v-if="loggedIn" type="button" @click="handleLogout()">Logout</button>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "MainHeader",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    computed: {
      ...mapGetters({
        loggedIn: "user/loggedIn",
        user: "user/userDetails"
      })
    },
    methods: {
      ...mapActions({
        logout: "user/logout"
      }),
      handleLogout() {
        this.username = "";
        this.password = "";
        this.logout();
      }
    },
  };
</script>
