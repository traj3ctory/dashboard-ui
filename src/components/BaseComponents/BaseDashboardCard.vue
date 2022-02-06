<template>
  <section class="dashboard_card">
    <div class="card card-body py-1 border-0 shadow-sm">
      <div class="row">
        <div class="col-7">
          <small class="fw-bold">Total customers</small>
          <h4 class="my-3">2,420</h4>
          <small
            ><span><i class="pi pi-arrow-up" />&ensp;40%</span> vs last
            month</small
          >
        </div>
        <div class="col-5">
          <div class="chart_align">
            <small><i class="pi pi-ellipsis-v" /></small>
            <Chart
              type="line"
              :data="basicData"
              :options="basicOptions"
              class="chart_size"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from "primevue/chart";

export default {
  name: "BaseDashboardCard",
  components: {
    Chart,
  },
  data() {
    return {
      basicData: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "First Dataset",
            data: [39, 81, 50, 140],
            pointRadius: 0,
            fill: false,
            borderColor: "#169b21",
            tension: 0.4,
          },
        ],
      },
      basicOptions: {
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "#0c8717",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
section.dashboard_card {
  display: flex;
  align-items: center;
  min-height: 20vh;
  i {
    font-size: 0.7rem;
    color: #169b21;
  }

  div.chart_align {
    display: flex;
    flex-direction: column;
    small {
      width: 100%;
      margin-bottom: 2rem;
      i.pi {
        float: right;
      }
    }
    div.chart_size {
      height: 5rem;
      max-width: 100%;
    }
  }
}
</style>