<template>
  <section class="table">
    <div class="card border-0 shadow">
      <DataTable
        :value="products"
        :selection.sync="selectedProducts"
        responsiveLayout="scroll"
        dataKey="company"
        class="p-datatable-striped"
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
            <div class="d-flex align-items-center h-100">
              <img
                :id="slotProps.data.company"
                :src="require(`@/assets/${slotProps.data.company}.svg`)"
                class="img-fluid mx-3 header_img"
                width="40"
                height="40"
              />
              <div class="mt-2">
                <strong>{{ slotProps.data.company }}</strong>
                <p>{{ slotProps.data.site }}</p>
              </div>
            </div>
          </template>
        </Column>
        <Column
          field="license"
          header="License Use"
          :headerStyle="{ minWidth: '8rem' }"
        >
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
        <Column
          field="users"
          header="Users"
          :headerStyle="{ minWidth: '8rem' }"
        >
          <template #body="slotProps">
            <img
              v-for="(user, index) in slotProps.data.users"
              :key="index"
              :id="slotProps.data.company"
              :src="require(`@/assets/${user}.svg`)"
              class="img-fluid table_img"
              width="24"
              height="24"
            />
            <small class="extra" v-show="slotProps.data.extra">+{{ slotProps.data.extra }}</small>
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
              class="p-button-sm p-button-text"
            />
            <Button
              :id="slotProps.data.company"
              icon="pi pi-pencil"
              class="p-button-sm p-button-text"
            />
          </template>
        </Column>
        <template #footer>
          <div
            class="
              d-flex
              justify-content-between
              align-items-center
              d-md-flex d-none
            "
          >
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
          <!-- Small Screen -->
          <div
            class="
              d-flex
              justify-content-between
              align-items-center
              d-md-none d-block
            "
          >
            <Button class="p-button-sm p-button-text" icon="pi pi-arrow-left" />
            <small>page 1 of 50</small>
            <Button
              class="p-button-sm p-button-text"
              icon="pi pi-arrow-right"
            />
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
    margin-left: -0.5rem;
  }
  small {
    font-size: 0.875rem;
    font-weight: normal;
    color: #344054;
  }
  small.extra {
    font-size: 0.75rem;
    font-weight: 500;
    color: #7f56d9;
  }
  span {
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 18px;
    text-transform: capitalize;
    &.customer {
      color: #027a48;
      background-color: #ecfdf3;
    }
    &.churned {
      color: #344054;
      background-color: #f2f4f7;
    }
  }
  strong,
  p {
    font-size: 0.875rem;
  }
  img.header_img {
    max-height: 2rem;
    align-items: center;
  }
}
</style>