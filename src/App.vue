<template>
  <div id="root">
    <MainHeader />
    <RouterView />
  </div>
</template>

<script>
  import "./assets/styles/normalize.css";
  import "./assets/styles/main.scss";

  import MainHeader from "./components/MainHeader.vue";

  export default {
    name: "App",
    components: {
      MainHeader
    },
    beforeMount() {
      if (this.$store.state.user.token) {
        this.$store.dispatch("user/fetchUserInfo");
      }
    }
  };
</script>

<style lang="scss">
</style>
