<template>
  <div :class="[$style.wrapper]">
    <input
      :class="[$style.field]"
      placeholder="Дата проставляется автоматически, если поле не заполнять"
      v-model="date"
    />
    <select :class="[$style.field]" v-model="category">
      <option disabled value="">Выберите вид расходов</option>
      <option
        v-for="(category, index) in categories"
        :key="index"
        :value="category.value"
      >
        {{ category.label }}
      </option>
    </select>
    <input
      :class="[$style.field]"
      placeholder="Сумма расходов"
      v-model="value"
    />
    <button @click="onSaveClick" :class="[$style.buttonAdd]">Добавить +</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      value: "",
      categories: [
        {
          label: "Еда",
          value: "Еда",
        },
        {
          label: "Транспорт",
          value: "Транспорт",
        },
        {
          label: "Спорт",
          value: "Спор",
        },
        {
          label: "Обучение",
          value: "Обучение",
        },
        {
          label: "Налоги",
          value: "Налоги",
        },
        {
          label: "Коммунальные платежи",
          value: "Коммунальные платежи",
        },
      ],
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      if (+this.value) this.$emit("addNewPayment", data);
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