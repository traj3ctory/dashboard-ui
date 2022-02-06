<template>
  <section class="table">
    <div class="card">
      <DataTable
        :value="products"
        :selection.sync="selectedProducts"
        responsiveLayout="scroll"
        dataKey="company"
      >
        <Column
          selectionMode="multiple"
          :headerStyle="{ width: '3em' }"
        ></Column>
        <Column
          field="company"
          header="Company"
          :headerStyle="{ width: '15rem' }"
          sortable
        >
          <template #body="slotProps">
            <div class="d-flex align-items-center">
              <img
                :id="slotProps.data.company"
                :src="require('@/assets/logo.png')"
                class="img-fluid shadow-sm mx-3 header_img"
                width="20px"
                height="auto"
              />
              <div>
                <strong>{{ slotProps.data.company }}</strong>
                <p>{{ slotProps.data.site }}</p>
              </div>
            </div>
          </template>
        </Column>
        <Column field="license" header="License Use" :headerStyle="{ minWidth: '8rem' }">
          <template #body="slotProps">
            <ProgressBar :value="slotProps.data.license" :showValue="false" />
          </template>
        </Column>
        <Column field="status" header="Status">
          <template #body="slotProps">
            <span :class="slotProps.data.status.toLowerCase()">{{
              slotProps.data.status
            }}</span>
          </template>
        </Column>
        <Column field="users" header="Users" :headerStyle="{ minWidth: '8rem' }">
          <template #body="slotProps">
            <img
              v-for="(user, index) in 5"
              :key="index"
              :id="slotProps.data.company"
              :src="require('@/assets/logo.png')"
              class="img-fluid rounded-circle table_img shadow-sm"
              width="30px"
              height="auto"
            />
            <small>+5</small>
          </template>
        </Column>
        <Column field="about" header="About">
          <template #body="slotProps">
            <strong>{{ slotProps.data.about }}</strong>
            <p>{{ slotProps.data.site }}</p>
          </template>
        </Column>
        <Column field="" header="" :headerStyle="{ minWidth: '8rem' }">
          <template #body="slotProps">
            <Button
              :id="slotProps.data.company"
              icon="pi pi-trash"
              class="p-button-sm p-button-raised p-button-text"
            />
            <Button
              :id="slotProps.data.company"
              icon="pi pi-pencil"
              class="p-button-sm p-button-raised p-button-text"
            />
          </template>
        </Column>
        <template #footer>
          <div class="d-flex justify-content-between">
            <div>
              <Button
                class="p-button-sm p-button-raised p-button-text"
                label="Previous"
              />
              <Button
                class="p-button-sm p-button-raised p-button-text"
                label="Next"
              />
            </div>
            <small>page 1 of 50</small>
          </div>
        </template>
      </DataTable>
    </div>
  </section>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";
import tableData from "@/data/table.json";

export default {
  name: "Table",
  components: {
    DataTable,
    Column,
    Button,
    ProgressBar,
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
      products: tableData,
      selectedProducts: null,
    };
  },
};
</script>

<style lang="scss" scoped>
section.table {
  button {
    color: #111111;
    font-size: 0.8rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  img.table_img {
    margin-left: -1rem;
  }
  small {
    font-size: 0.7rem;
    font-weight: bold;
    color: #800080;
  }
  span {
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: capitalize;
    &.customer {
      color: #158e15;
      background-color: #36b3361c;
    }
    &.churned {
      color: #800080;
      background-color: #80008013;
    }
  }
  strong,
  p {
    font-size: 0.75rem;
  }
  img.header_img {
    max-height: 2rem;
    align-items: center;
  }
}
</style>