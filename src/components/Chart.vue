<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      dataForChart: {},
    };
  },
  created() {
    this.dataForChart = Object.assign(this.chartData);
    //console.log("chartData", this.dataForChart.labels);
  },
  mounted() {
    this.renderChart(this.dataForChart, this.options);
  },
};
</script>