<template>
  <div class="sidebar">
    <RouterLink class="logo-link" to="/dashboard" active-class="" exact-active-class="">
      <img src="/assets/images/icon.svg" alt="">
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <button type="button" @click="logout">
      <InlineSvg src="/assets/images/icons/logout.svg" />
    </button>
  </div>
</template>

<script>
  import InlineSvg from "vue-inline-svg";
  import {mapActions} from "vuex";

  export default {
    name: "Sidebar",
    components: {
      InlineSvg
    },
    methods: {
      ...mapActions({
        logout: "user/logout"
      })
    }
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    background: #232323;
    left: 0;
    top: 0;
    position: fixed;
    height: 100%;
    width: 150px;
    overflow: hidden;
  }

  .logo-link {
    margin-top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    padding: 10px 25px;
    background: #141414;
    border-radius: 20px;

    img {
      width: 100%;
      height: auto;
    }
  }

  a {
    color: #fdfdfd;
    text-decoration: none;
    font-size: 1.5rem;
    margin-top: 15px;
    padding: 10px 15px;
  }

  button {
    margin: auto 0 20% 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: none;
    border: none;

    svg {
      transition: fill 100ms ease-in-out;
      fill: #fdfdfd;
    }

    &:hover svg {
      fill: $error;
    }

    &:active, &:focus {
      outline: none;
    }
  }
</style>
