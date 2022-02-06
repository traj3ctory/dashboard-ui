<template>
  <div class="wrapper container-lg container-fluid">
    <header>
      <Header />
      <Nav />
    </header>
    <main class="px-lg-4 px-md-3 px-1">
      <UserDetail />
    </main>
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Nav from "../components/Layout/Nav.vue";
import UserDetail from "../components/views/UserDetail.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    Nav,
    UserDetail,
  },
};
</script>

<style>
</style>
