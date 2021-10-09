<template>
  <div v-if="name" class="window">
    <!-- <header>{{ name }}</header> -->
    <!-- <AddPaymentForm v-if="name === 'paymentform'"/> -->
    <MenuData
      v-if="name === 'menu'"
      :changePosition="changePosition"
      @editClick="onEdit"
    />
    <button @click="onClose">Отмена</button>
  </div>
</template>

<script>
//import AddPaymentForm from "./AddPaymentForm.vue";
import MenuData from "./MenuData.vue";

export default {
  components: {
    //AddPaymentForm,
    MenuData,
  },
  //   data() {
  //          return {
  //            shown: "",
  //          };
  //   },
  props: {
    name: String,
    changePosition: Number,
  },
  methods: {
    // onShow({ name }) {
    //   this.shown = name;
    // },
    // onClose() {
    //   this.shown = "";
    // },
    onClose() {
      this.$modal.close();
    },
    onEdit() {
      this.$emit("edit");
    },
  },

  mounted() {
    // this.$modal.EventBus.$on("show", this.onShow); перенесли логику в app.vue
    // this.$modal.EventBus.$on("close", this.onClose);
    //this.shown = this.name;
  },
};
</script>

<style lang="css">
.window {
  position: absolute;
  left: -50px;
}
</style>
