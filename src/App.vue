<template>
  <div id="root">
    <transition name="slide-down">
      <MainHeader v-if="this.$route.name !== 'dashboard'" />
    </transition>
    <transition name="slide-in">
      <Sidebar v-if="this.$route.name === 'dashboard'" />
    </transition>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script>
  import "./assets/styles/normalize.css";
  import "./assets/styles/main.scss";

  import MainHeader from "./components/MainHeader.vue";
  import Sidebar from "./components/Sidebar.vue";

  export default {
    name: "App",
    components: {
      Sidebar,
      MainHeader
    },
  };
</script>

<style lang="scss">
  .fade-enter-active { transition: opacity 100ms ease }
  .fade-leave-active { transition: opacity 50ms ease }
  .fade-enter-from, .fade-leave-to { opacity: 0 }

  .slide-in-enter-active, .slide-in-leave-active { transition: transform 150ms ease }
  .slide-in-enter-from, .slide-in-leave-to { transform: translate(-100%, 0) }

  .slide-down-enter-active, .slide-down-leave-active { transition: transform 100ms ease }
  .slide-down-enter-from, .slide-down-leave-to { transform: translate(0, -100%) }
</style>
