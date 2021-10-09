<template>
  <v-container>
    <v-row>
      <v-col class="width">
        <div v-show="!showAddPaymantForm">
          <AddButton @buttonClick="showForm" />
        </div>

        <div v-show="showAddPaymantForm">
          <AddPaymentForm
            @addNewPayment="dataAdd"
            @cancel="cancel"
            :value1="price1"
            :category2="category1"
            :buttonFlag="whatWeDo"
            :showF="showAddPaymantForm"
          />
        </div>
        <PaymentsDisplay
          :pageIndex="lastIndexOnPage"
          @changeOneData="changeDataString"
        />
        <br />
        <v-app-bar>
          <p>Всего трат: {{ getPaymentsListSum | formatPriseRU }}</p>
          <p>&emsp; количество записей: {{ getPaymentsList.length }}</p>
        </v-app-bar>
        <Pagination
          :listLength="getPaymentsList.length"
          :countOnPage="countOnPage"
          @choosePage="showOnePage"
        />
      </v-col>
      <!-- <p v-for="(lab, index) in getChartData(getCategoryList)" :key="index"></p> -->

      <v-col class="width1">
        <BaseChart :chartData="chartData" :options="options" />{{
          getChartData(getCategoryList)
        }}</v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import AddButton from "../components/AddButton.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";
import BaseChart from "../components/Chart";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    AddButton,
    Pagination,
    BaseChart,
  },
  data() {
    return {
      showAddPaymantForm: false,
      lastIndexOnPage: 0,
      countOnPage: 5,
      currentPage: 1,
      pageForm: "",
      price1: "", //vue требовал непрямой передачи props
      category1: "", //vue требовал непрямой передачи props
      changeIndex: 0, //какой элемент редактируем или удаляем
      whatWeDo: false, //добавляем или редакируем
      r: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Data One",
            data: [40, 20, 12, 39, 10, 40],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255, 99, 12)",
              "rgb(54, 189, 35)",
              "rgb(255, 277, 186)",
            ],
          },
        ],
      }, //для графика
      options: { responsive: true, maintainAspectRatio: false }, //для графика
    };
  },
  methods: {
    ...mapActions(["fetchData", "addNewData", "changeData", "loadCategories"]),
    dataAdd(data) {
      if (this.whatWeDo) {
        this.$set(data, "id", this.changeIndex);
        this.changeData(data);
        this.whatWeDo = false;
      } else {
        this.addNewData(data);
        this.showOnePage(1); //показ конечной страницы списка, куда добавляется дата В КОНЕЦ массива! Конечная страница - первая в представлении!
      }
      this.showAddPaymantForm = false;
    },
    changeDataString(data) {
      this.changeIndex = data;
      this.category1 = this.getPaymentsList[data].category;
      this.price1 = this.getPaymentsList[data].value;
      this.$modal.close();
      this.whatWeDo = true;
      this.showAddPaymantForm = true;
    },
    cancel() {
      this.showAddPaymantForm = false;
    },
    showForm() {
      this.price1 = 0;
      this.category1 = "";
      this.showAddPaymantForm = true;
    },
    showOnePage(page) {
      this.currentPage = page;
      this.lastIndexOnPage = this.countOnPage * (page - 1);
    },
    getChartData(data) {
      this.chartData.labels = [...data];
      //console.log("data", data);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList", "getPaymentsListSum", "getCategoryList"]),
  },
  created() {
    this.fetchData();
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
  beforeMount() {},
  mounted() {
    // if (/add/.test(this.$route.path)) {
    //   this.pageForm = this.$route.fullPath;
    //   let regPrice = /(?<==)[0-9.,]+/;
    //   this.price1 = this.pageForm.match(regPrice);
    //   this.price1 = this.price1[0];
    //   this.category1 = this.$route.params.addForm;
    //   this.showForm();
    // }
    //this.chartData.labels = [...this.getCategoryList];
  },
  filters: {
    formatPriseRU(value) {
      return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(value);
    },
  },
};
</script>
<style lang="scss">
.width {
  max-width: 50%;
  min-width: 500px;
}
.width1 {
  max-width: 40%;
  margin-left: 10%;
  min-width: 200px;
}
</style>

