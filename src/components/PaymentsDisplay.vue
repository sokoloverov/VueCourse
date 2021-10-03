<template>
  <div :class="[$style.wrapper]">
    <table :class="[$style.table]">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Дата</th>
          <th scope="col">Вид расходов</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Изменить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getList(getPaymentsList)" :key="index">
          <td scope="row">{{ index + pageIndex + 1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value | formatPriseRU }}</td>
          <td @click="changes(item, index + pageIndex, index)">...</td>
          <transition name="fade">
            <Modal
              v-if="position === index"
              :name="modalShown"
              :changePosition="indexChange"
              @edit="changeData"
            />
          </transition>
        </tr>
      </tbody>
    </table>
    <!-- <button @click="shownPaymentsForm">Show Payments Form</button>
    <button @click="closePaymentsForm">Close Payments Form</button> -->
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";
export default {
  components: { Modal: () => import("./Modal.vue") },
  data() {
    return {
      firstIndexOnPage: 0,
      modalShown: "",
      position: 0,
      indexChange: 0,
    };
  },
  props: {
    pageIndex: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    //отписка от собыий, когда компонент будет уничтожен - обязательно!
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("close", this.onClose);
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
  methods: {
    getList(list) {
      return list.slice(this.pageIndex, this.pageIndex + 5);
    },
    shownPaymentsForm(index) {
      //this.$modal.show("paymentform");
      this.$modal.show("menu", index);
    },
    // closePaymentsForm() {
    //   this.$modal.close();
    // },
    changes(item, key, index) {
      //console.log("item", item, "key", key, "index", index);
      this.position = index;
      this.indexChange = key;
      this.shownPaymentsForm(index);
    },
    changeData() {
      this.$emit("changeOneData", this.indexChange);
    },
    onShow({ name }) {
      this.modalShown = name;
    },
    onClose() {
      this.modalShown = "";
    },
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
 
<style lang="scss" module>
.wrapper {
  margin-bottom: 10px;
}
.table {
  min-width: 500px;
  table-layout: fixed;
  width: 50%;
  margin-bottom: 20px;
  border-collapse: collapse;
}
.table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}
.table td {
  padding: 5px 10px;
  border: 1px solid #dddddd;
  text-align: center;
}
.table tbody tr:nth-child(odd) {
  background: #fff;
}
.table tbody tr:nth-child(even) {
  background: #f7f7f7;
}
:global(.fade-enter-active),
:global(.fade-leave-active) {
  transition: opacity 1s;
}
:global(.fade-enter),
:global(.fade-leave-to) {
  opacity: 0;
}
</style>