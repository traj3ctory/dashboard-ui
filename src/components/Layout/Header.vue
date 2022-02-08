<template>
  <section class="base_header">
    <nav
      class="
        navbar navbar-expand-lg navbar-light
        bg-white
        shadow-sm
      "
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            :src="require('@/assets/Logo.svg')"
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
          <span class="pi pi-align-left"></span>
        </button>
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
          <ul class="header_end">
            <li>
              <Button
                label="Upgrade now"
                icon="pi pi-link"
                class="p-button-sm"
              />
            </li>
            <li><i class="pi pi-cog" /></li>
            <li><i class="pi pi-bell" /></li>
            <li>
              <img
                :src="require('@/assets/AvatarUser.svg')"
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
      title: "Untitled UI",
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #344054;
section.base_header {
  nav.bg-white {
    background: #eaecf0;
    border-bottom: 1px solid #f1f1f1;
  }
  ul {
    list-style-type: none;
    li {
      a.nav-link {
        color: $color;
        text-transform: capitalize;
        font-size: 1rem;
        &.active {
          color: $color;
          background: #f9fafb;
        }
      }
    }
    &.header_end {
      margin-bottom: 0;
      height: 100%;
      display: flex;
      align-items: center;
      li {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        button.p-button-sm {
          background-color: transparent;
          color: $color;
          border: 1px solid #d0d5dd;
          // border-left: none;
          // border-right: none;
          border-radius: 0.4rem;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>