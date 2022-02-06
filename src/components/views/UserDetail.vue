<template>
  <section class="row user_details">
    <div class="col-lg-9 col-md-9 col-12 mb-3">
      <h5>Welcome back, {{ name }}</h5>
      <small>Track, manage and forecast your customers and orders.</small>
    </div>
    <div class="col-md-3 col-12">
      <Button
        label="Import"
        icon="pi pi-upload"
        class="p-button-sm p-button-raised p-button-text"
      />
      <Button
        label="Add"
        icon="pi pi-plus"
        class="p-button-sm p-button-raised p-button-help text-white"
      />
    </div>
  </section>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "UserDetail",
  components: {
    Button,
  },
  props: {
    username: {
      type: String,
      required: false,
      default: "Olivia",
    },
  },
  data() {
    return {
      name: this.username,
    };
  },
};
</script>

<style lang="scss" scoped>
section.user_details {
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
}
</style>