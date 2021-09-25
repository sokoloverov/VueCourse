<template>
  <div id="app">
    <div>
      <header>
        <div :class="[$style.title]">Жизнь того стоит?</div>
      </header>
      <main>
        <AddButton @buttonClick="showForm" />
        <div v-show="showAddPaymantForm">
          <AddPaymentForm @addNewPayment="dataAdd" />
        </div>
        <PaymentsDisplay
          :items="paymentsPage"
          :firstIndexOnPage="firstIndexOnPage"
        />
        <Pagination
          :listLength="paymentsList.length"
          :countOnPage="countOnPage"
          @choosePage="showOnePage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import AddButton from "./components/AddButton.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: { PaymentsDisplay, AddPaymentForm, AddButton, Pagination },
  data() {
    return {
      paymentsList: [],
      paymentsPage: [],
      showAddPaymantForm: false,
      firstIndexOnPage: 0,
      countOnPage: 5,
      currentPage: 1,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "15.03.2020",
          category: "Еда",
          value: 289.88,
        },
        {
          date: "24.04.2020",
          category: "Транспорт",
          value: 112,
        },
        {
          date: "24.08.2020",
          category: "Спорт",
          value: 3041,
        },
        {
          date: "28.10.2020",
          category: "Еда",
          value: 444.28,
        },
        {
          date: "14.12.2020",
          category: "Обучение",
          value: 5500,
        },
        {
          date: "4.03.2021",
          category: "Транспорт",
          value: 1096,
        },
        {
          date: "28.06.2021",
          category: "Еда",
          value: 207.53,
        },
        {
          date: "24.07.2021",
          category: "Транспорт",
          value: 86,
        },
        {
          date: "26.08.2021",
          category: "Еда",
          value: 369.22,
        },
      ];
    },
    dataAdd(data) {
      this.paymentsList = [data, ...this.paymentsList];
      this.showAddPaymantForm = false;
      this.showOnePage(1); //показ конечной страницы списка, куда добавляется дата В КОНЕЦ массива! Конечная страница - первая в представлении!
    },
    showForm() {
      this.showAddPaymantForm = true;
    },
    showOnePage(page) {
      this.currentPage = page;
      this.firstIndexOnPage = this.countOnPage * (page - 1);
      this.paymentsPage = this.paymentsList.slice(
        this.firstIndexOnPage,
        this.firstIndexOnPage + 5
      );
    },
  },
  created() {
    this.paymentsList = this.fetchData();
    this.paymentsPage = this.paymentsList.slice(0, 5);
  },
};
</script>

<style lang="scss" module>
.title {
  display: inline-block;
  width: 50%;
  min-width: 420px;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
  color: #343434;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 1px white, 0 3px #777;
}
</style>
