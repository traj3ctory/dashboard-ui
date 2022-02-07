<template>
  <section class="base_nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(el, i) in route" :key="i">
              <a
                class="nav-link"
                :class="el.active ? 'active' : ''"
                :href="el.path"
                >{{ el.name }}</a
              >
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
$color: #344054;
section.base_nav {
  ul {
    list-style-type: none;
    li {
      a.nav-link {
        color: $color;
        font-size: 1rem;
        &.active {
          color: $color;
          background: #f9fafb;
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
      color: $color;
      border: 1px solid #d0d5dd;
      // border-left: none;
      border-radius: 0.4rem;
      font-size: 0.8rem;
      min-width: 16rem;
    }
  }
}
</style>