<template>
  <section class="table">
    <div class="card border-0 shadow-sm">
      <DataTable
        :value="products"
        :selection.sync="selectedProducts"
        responsiveLayout="scroll"
        dataKey="company"
        class="p-datatable-striped"
      >
        <Column
          selectionMode="multiple"
          :headerStyle="{ width: '3em', paddingLeft: '1.4em' }"
        ></Column>
        <Column
          field="company"
          header="Company"
          :headerStyle="{ minWidth: '15rem', paddingLeft: '2.6rem' }"
          sortable
        >
          <template #body="slotProps">
            <div class="d-flex align-items-center h-100 w-100">
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
          :headerStyle="{ minWidth: '10rem' }"
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
            <small class="extra" v-show="slotProps.data.extra"
              >+{{ slotProps.data.extra }}</small
            >
          </template>
        </Column>
        <Column
          field="about"
          header="About"
          :headerStyle="{ minWidth: '15rem' }"
        >
          <template #body="slotProps">
            <p class="about about_header">{{ slotProps.data.about[0] }}</p>
            <p class="about about_subheader">{{ slotProps.data.about[1] }}</p>
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
                class="p-button-sm"
                label="Previous"
              />
              <Button
                class="p-button-sm"
                label="Next"
              />
            </div>
            <small>page 1 of 10</small>
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
            <small>page 1 of 10</small>
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
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #344054;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 0.375rem;
  }
  img.table_img {
    margin-left: -0.4rem;
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
  p.about {
    font-style: normal;
    font-weight: normal;
    font-size: 0.875;
    line-height: 1.25;
    margin-bottom: 0.4rem;
  }
  p.about_header {
    color: #101828;
  }
  p.about_subheader {
    color: #667085;
  }
}
</style>
