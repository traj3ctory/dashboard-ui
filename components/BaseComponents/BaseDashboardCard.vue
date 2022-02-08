<template>
  <section class="dashboard_card">
    <div class="card card-body py-1 border-0 shadow-sm">
      <div class="row">
        <div class="col-7">
          <small class="chart_title">{{ data.title }}</small>
          <h4 class="my-3">{{ data.value }}</h4>
          <small
            ><span
              ><i
                :class="
                  data.percentage >= 20
                    ? 'pi pi-arrow-up upwards'
                    : 'pi pi-arrow-down downwards'
                "
              />&ensp;<span
                :class="data.percentage >= 20 ? 'upwards' : 'downwards'"
                >{{ data.percentage }}%</span
              ></span
            >
            <span class="desc">vs last month</span></small
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
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    Chart,
  },
  data() {
    return {
      basicData: {
        labels: ["option1", "option2", "option3", "option4"],
        datasets: [
          {
            label: "First Dataset",
            data: [],
            pointRadius: 0,
            fill: true,
            borderColor: "#169b21",
            tension: 0.4,
            backgroundColor: '#169b21',
          },
        ],
      },
      basicOptions: {
        responsive: true,
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
  mounted() {
    this.basicData.datasets[0].data = [...this.data.dataSet];
    if (this.data.percentage >= 20) {
      this.basicData.datasets[0].borderColor = "#12B76A";
      this.basicData.datasets[0].backgroundColor = "#12B76A11";
    } else {
      this.basicData.datasets[0].borderColor = "#F04438";
      this.basicData.datasets[0].backgroundColor = "#F0443811";
    }
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

  small.chart_title {
    color: #101828;
    font-size: 1rem;
  }
  h4 {
    color: #101828;
    font-size: 2.25rem;
  }
  span.desc{
    font-size: 0.875rem;
    padding-left: 0.5rem;
    word-break: keep-all;
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
  .downwards {
    color: #B42318;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .upwards {
    color: #027A48;
    font-size: 0.875rem;
    font-weight: 500;
  }
}
</style>