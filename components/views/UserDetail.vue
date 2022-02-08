<template>
  <section class="row user_details">
    <div class="col-lg-9 col-md-9 col-12 mb-3">
      <h5>Welcome back, {{ name }}</h5>
      <small>Track, manage and forecast your customers and orders.</small>
    </div>
    <div class="col-md-3 col-12 d-flex justify-content-md-end">
      <Button
        label="Import"
        icon="pi pi-cloud-upload"
        class="p-button-sm"
      />
      <Button
        label="Add"
        icon="pi pi-plus"
        class="p-button-sm alt"
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: #FFFFFF;
    border: 1px solid #D0D5DD;
    color: #344054;
    font-size: 0.875rem;
    margin-right: 0.4rem;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &.alt {
      background-color: #7f56d9;
      border: 1px solid #7f56d9;
      color: #FFFFFF;
    }
  }
  h5 {
    font-weight: 500;
    font-size: 1.875;
    color: #101828;
  }
  small {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #667085;
  }
}
</style>
