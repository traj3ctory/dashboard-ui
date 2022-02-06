<template>
  <section class="base_header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            :src="require('@/assets/logo.png')"
            alt="header logo"
            width="25rem"
            height="auto"
          />
          {{ title }}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(el, i) in route" :key="i">
              <a class="nav-link" :href="el.path">{{ el.name }}</a>
            </li>
          </ul>
          <ul class="header_end">
            <li><Button label="Upgrade now" icon="pi pi-link" class="p-button-sm" /></li>
            <li><i class="pi pi-cog" /></li>
            <li><i class="pi pi-bell" /></li>
            <li>
              <img
                :src="require('@/assets/logo.png')"
                alt="user image"
                width="30px"
                height="30px"
                class="rounded-circle"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import Button from "primevue/button";
import route from "@/data/header.json";

export default {
  name: "Header",
  components: {
    Button,
  },
  data() {
    return {
      route: route,
      title: "Vue.js",
    };
  },
};
</script>

<style lang="scss" scoped>
section.base_header {
  ul {
    list-style-type: none;
    li {
      a.nav-link {
        color: #000;
        text-transform: capitalize;
        &.active {
          color: #fff;
        }
      }
    }
    &.header_end {
      margin-bottom: 0;
      height: 100%;
      display: flex;
      align-items: center;
      li{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        button.p-button-sm{
          background-color: transparent;
          color: #111;
          border: 1px solid #bbb;
          border-left: none;
          border-right: none;
          border-radius: 0.4rem;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>