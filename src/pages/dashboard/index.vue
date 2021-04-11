<template>
  <div class="dashboard-wrapper">
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters({
      loggedIn: "user/loggedIn",
    })
  },
  methods: {
    ...mapActions({
      fetchUser: "user/fetchUserInfo"
    })
  },
  beforeMount() {
    if (this.loggedIn === false && localStorage.getItem("token")) {
      console.log("cock");
      this.fetchUser();
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  margin-left: 150px;
}
</style>
