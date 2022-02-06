<template>
  <div class="wrapper">
    <Header />
    <Nav />
  </div>
</template>

<script>
import Header from '../components/Layout/Header.vue'
import Nav from '../components/Layout/Nav.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    Nav,
  },
};
</script>

<style>
</style>
