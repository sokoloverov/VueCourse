<template>
  <div>
    <AddButton @buttonClick="showForm" />
    <div v-if="showAddPaymantForm">
      <AddPaymentForm
        @addNewPayment="dataAdd"
        @cancel="cancel"
        :value1="price1"
        :category2="category1"
        :buttonFlag="whatWeDo"
      />
    </div>
    <PaymentsDisplay
      :pageIndex="lastIndexOnPage"
      @changeOneData="changeDataString"
    />
    <p>Всего трат: {{ getPaymentsListSum | formatPriseRU }}</p>
    <Pagination
      :listLength="getPaymentsList.length"
      :countOnPage="countOnPage"
      @choosePage="showOnePage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import AddButton from "../components/AddButton.vue";
import AddPaymentForm from "../components/AddPaymentForm.vue";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    AddButton,
    Pagination,
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
    };
  },
  methods: {
    ...mapActions(["fetchData", "addNewData", "changeData"]),
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
  },
  computed: {
    ...mapGetters(["getPaymentsList", "getPaymentsListSum"]),
  },
  created() {
    this.fetchData();
  },
  mounted() {
    if (/add/.test(this.$route.path)) {
      this.pageForm = this.$route.fullPath;
      let regPrice = /(?<==)[0-9.,]+/;
      this.price1 = this.pageForm.match(regPrice);
      this.price1 = this.price1[0];
      this.category1 = this.$route.params.addForm;
      this.showForm();
    }
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