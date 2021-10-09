<template>
  <v-dialog v-model="showF">
    <v-card class="text-left pa-8">
      <!-- <div :class="[$style.wrapper]"> -->
      <v-text-field
        label="Дата проставляется автоматически, если поле не заполнять"
        v-model="date"
      ></v-text-field>

      <select :class="[$style.field]" v-model="category">
        <option disabled value="">Выберите вид расходов</option>
        <option
          v-for="(category, index) in getCategoryList"
          :key="index"
          :value="category"
        >
          {{ category }}
        </option>
      </select>

      <v-text-field label="Сумма расходов" v-model="value"></v-text-field>
      <div :class="[$style.buttonBlock]">
        <v-btn color="teal" dark @click="cancel" :class="[$style.buttonAdd]"
          >Отменить</v-btn
        >
        <v-btn
          color="teal"
          dark
          @click="onSaveClick"
          :class="[$style.buttonAdd]"
        >
          {{ nameButton }}
        </v-btn>
      </div>
      <!-- </div> -->
    </v-card>
  </v-dialog>
  <!-- </v-dialog> -->
</template>
 
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      date: "",
      category: "",
      value: "",
      nameButton: "Добавить",
      showWindow: false,
    };
  },
  props: {
    value1: {
      default: "",
    },
    category2: {
      default: "",
    },
    buttonFlag: {
      default: false,
    },
    showF: Boolean,
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    ...mapGetters(["getCategoryList"]),
  },
  beforeMount() {
    this.showWindow = this.showF;
    this.category = this.category2;
    this.value = this.value1;
    this.buttonFlag
      ? (this.nameButton = "Изменить")
      : (this.nameButton = "Добавить");
  },
  mounted() {
    // if (!this.getCategoryList.length) {
    //   this.loadCategories();
    // }
  },
  methods: {
    ...mapActions(["loadCategories"]),
    onSaveClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      if (+this.value) this.$emit("addNewPayment", data);
      this.value = ""; //обнуление значений, почему-то сами не обнуляются
      this.category = "";
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>
 
<style lang="scss" module>
.wrapper {
  width: 50%;
  max-width: 500px;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(148, 146, 146);
  border-radius: 5px;
  box-shadow: 0px 5px 10px 2px rgba(67, 77, 85, 0.2);
  margin-bottom: 20px;
}
.field {
  margin: 10px;
  width: 380px;
  padding: 5px;
  color: rgb(44, 44, 44);
  background-color: antiquewhite;
  box-shadow: 0px 2px 4px 0px rgba(34, 60, 80, 0.2);
  outline: none;
}
.buttonBlock {
  display: flex;
}
.buttonAdd {
  align-self: flex-end;
  width: 150px;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  text-decoration: none;
  margin: 30px;
  padding: 10px;
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  &:hover {
    background: rgb(53, 167, 110);
  }
  &:active {
    background: rgb(33, 147, 90);
    box-shadow: 0 3px rgb(33, 147, 90) inset;
  }
}
</style>