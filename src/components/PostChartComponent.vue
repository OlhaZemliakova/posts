<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
  <script>
import { useMainStore } from "@/stores/MainStore";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "PostChartComponent",
  components: { Bar },

  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            label: "the number of characters in commenters' mail",
            data: this.getData,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 1,
          },
        ],
        chartOptions: {
          responsive: true,
        },
      };
    },
    getData() {
      return this.mainStore.getCurrentPageList.map((item) => {
        return {
          x: item.id.toString(),
          y: item.comments.reduce(
            (sum, current) => sum + current.email.length,
            0
          ),
        };
      });
    },
  },
};
</script>