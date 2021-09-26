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
        <PaymentsDisplay :pageIndex="lastIndexOnPage" />
        <Pagination
          :listLength="getPaymentsList.length"
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
//import { mapMutations, mapGetters } from "vuex";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
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
    };
  },
  methods: {
    //...mapMutations(["setPaymentListData"]), //синтаксис через массив
    //...mapMutations({myMutattion: "setPaymentListData"}),//синтаксис через объект, еси надо новое имя дать мутации
    ...mapActions(["fetchData", "addNewData"]),

    dataAdd(data) {
      this.addNewData(data);
      //this.$store.commit("addDataString", data);
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
    //this.paymentsList = this.fetchData();
    //this.paymentsPage = this.paymentsList.slice(0, 5);
    this.fetchData();
  },
  mounted() {
    //this.$store.commit("setPaymentListData", this.fetchData());
    //this.setPaymentListData(this.fetchData());
    //this.paymentsPage = this.getPaymentsList.slice(0, 5);
    //this.paymentsList = this.getPaymentsList;
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
