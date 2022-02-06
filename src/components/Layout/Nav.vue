<template>
  <section class="base_nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(el, i) in route" :key="i">
              <a class="nav-link" :href="el.path">{{ el.name }}</a>
            </li>
          </ul>
          <div class="nav_end">
            <form action="#">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" v-model="value" placeholder="Search" />
              </span>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import InputText from "primevue/inputtext";
import route from "@/data/nav.json";

export default {
  name: "Nav",
  components: {
    InputText,
  },
  data() {
    return {
      route: route,
      title: "Vue.js",
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
section.base_nav {
  ul {
    list-style-type: none;
    li {
      a.nav-link {
        color: #111;
        font-size: 0.9rem;
        &.active {
          color: #fff;
        }
      }
    }
  }
  div.nav_end {
    margin-bottom: 0;
    height: 100%;
    display: flex;
    align-items: center;
    input {
      background-color: transparent;
      color: #111;
      border: 1px solid #bbbbbb;
      border-left: none;
      border-radius: 0.4rem;
      font-size: 0.8rem;
      min-width: 16rem;
    }
  }
}
</style>