<template>
  <header>
    <div class="logo">
      <img src="/assets/images/logo.svg" alt="">
    </div>
    <nav class="navlinks">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <RouterLink v-if="!loggedIn" to="/login">Login</RouterLink>
      <button v-else @click="handleLogout">Logout</button>
    </nav>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "MainHeader",
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
        this.logout();
      }
    },
  };
</script>

<style lang="scss" scoped>
  header {
    display: grid;
    grid-template: 55px / 1fr 1fr;
    background: #272727;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 3%;

    img {
      height: 65%;
      pointer-events: none;
      user-select: none;
    }
  }

  .navlinks {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 3%;
    height: 100%;

    a, button {
      font-family: "ParseGrotesk Bold";
      color: white;
      margin: 0 15px;
      text-decoration: none;
      padding: 10px;
      transition: color 120ms ease-in-out;
      font-size: 1.4rem;

      &:hover { color: darken(#fdfdfd, 20) }
      &.router-link-active { color: $highlight }
    }

    button {
      background: none;
      border: none;
      cursor: pointer;

      &:hover {
        color: $error;
      }

      &:active, &:focus {
        border: none;
        outline: none;
      }
    }
  }
</style>
