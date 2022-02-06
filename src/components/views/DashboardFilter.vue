<template>
  <section class="filter">
    <div>
      <Button label="All time" icon="pi pi-times" />
      <Button label="Us , AU, +4" icon="pi pi-times" />
      <Button label="More filters" icon="pi pi-times" />
    </div>
    <div>
      <form action="#">
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText type="text" v-model="value" placeholder="Search" />
        </span>
      </form>
    </div>
  </section>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  name: "DashboardFilter",
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
section.filter {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    color: #222222;
    font-size: 0.8rem;
    margin-right: 0.4rem;
  }
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
</style>