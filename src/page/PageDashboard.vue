<template>
  <div>
    <AddButton @buttonClick="showForm" />
    <div v-show="showAddPaymantForm">
      <AddPaymentForm
        @addNewPayment="dataAdd"
        :value="price1"
        :category="category1"
      />
    </div>
    <PaymentsDisplay :pageIndex="lastIndexOnPage" />
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
      price1: 0,
      category1: "",
    };
  },
  methods: {
    ...mapActions(["fetchData", "addNewData"]),

    dataAdd(data) {
      this.addNewData(data);
      this.showAddPaymantForm = false;
      this.showOnePage(1); //показ конечной страницы списка, куда добавляется дата В КОНЕЦ массива! Конечная страница - первая в представлении!
    },
    showForm() {
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
      console.log(this.price1, this.category1);
      this.showForm();
    } else this.showAddPaymantForm = false;
  },
};
</script>