<template>
  <div>
    <div>Good bye {{ message }}</div>
    <input type="text" name="operator1" v-model.number="operand1" />
    <input type="text" name="operator2" v-model.number="operand2" />
    <button @click="btn" name="+">+</button>
  </div>
</template>

<script>
export default {
  name: "testComponent",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  props: {
    message: String,
  },
  methods: {
    btn() {
      this.result = this.operand1 + this.operand2;
    },
  },
};
</script>

<style>
</style>