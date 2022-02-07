<template>
  <section class="filter">
    <div>
      <Button label="All time" icon="pi pi-times" iconPos="right" class="btn" />
      <Button label="US, AU, +4" icon="pi pi-times" iconPos="right" class="btn" />
      <Button label="More filters" icon="pi pi-align-center" iconPos="left" class="btn_alt" />
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
    font-size: 0.875rem;
    margin-right: 0.4rem;
    font-weight: 500;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 0.5rem;
    padding: 0.635rem 1rem;
    &.btn {
      background-color: #f9f5ff;
      border: 1px solid #f9f5ff;
      color: #6941c6;
    }
    &.btn_alt {
      background-color: #ffffff;
      border: 1px solid #d0d5dd;
      color: #344054;
    }
  }
  input {
    background-color: transparent;
    color: #667085;
    border: 1px solid #bbbbbb;
    border-radius: 0.5rem;
    font-size: 1rem;
    min-width: 20rem;
    width: 20rem;
    max-width: 20rem;
    min-height: 2.75rem;
    height: 2.75rem;
    max-height: 2.75rem;
  }
}
</style>