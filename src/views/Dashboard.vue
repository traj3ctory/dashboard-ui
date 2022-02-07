<template>
  <div class="wrapper">
    <header>
      <Header />
      <Nav />
    </header>
    <main class="container-lg container-fluid px-lg-4 px-md-3 px-1">
      <UserDetail />
      <div class="row">
        <div class="col-md-4 col-12 mb-3" v-for="(el, i) in 3" :key="i">
          <BaseDashboardCard />
        </div>
      </div>
      <DashboardFilter />
      <Table />
    </main>
  </div>
</template>

<script>
import Header from "../components/Layout/Header.vue";
import Nav from "../components/Layout/Nav.vue";
import UserDetail from "../components/views/UserDetail.vue";
import Table from "../components/views/Table.vue";
import DashboardFilter from "../components/views/DashboardFilter.vue";	

export default {
  name: "Dashboard",
  components: {
    Header,
    Nav,
    UserDetail,
    Table,
    DashboardFilter,
  },
};
</script>

<style type="scss" scoped>
</style>
