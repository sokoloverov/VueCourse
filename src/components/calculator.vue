<template>
  <div class="mainScreen">
    <h1>Простой калькулятор</h1>
    <h3>введите два числа</h3>
    <div class="calcContainer">
      <div class="calcField">
        <input type="number" v-model.number="operand1" class="button10" />
        <input type="number" v-model.number="operand2" class="button10" />
      </div>
      <div class="keyboard">
        <div class="upperRow">
          <button
            class="button4 button4_w"
            v-on:click="result = operand1 + operand2"
          >
            +
          </button>
          <button
            class="button4 button4_w"
            v-on:click="result = operand1 - operand2"
          >
            -
          </button>
          <button
            class="button4 button4_w"
            @click="result = operand1 / operand2"
          >
            /
          </button>
          <button
            class="button4 button4_w"
            @click="result = operand1 * operand2"
          >
            *
          </button>
        </div>
        <div class="lowerRow">
          <button class="button4" @click="extermination">
            возведение в степень
          </button>
          <button class="button4" @click="integerDivision">
            целочисленное деление
          </button>
        </div>
      </div>
    </div>
    <h2 class="button13">Результат {{ result }}</h2>
  </div>
</template>

<script>
export default {
  name: "Caculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      audio: new Audio("../assets/tikane.mp3"),
    };
  },
  methods: {
    extermination() {
      return (this.result = Math.pow(this.operand1, this.operand2));
    },
    integerDivision() {
      return (this.result = this.operand1 % this.operand2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../assets/buttons.css");

.mainScreen {
  width: 570px;
  margin: 20px;
}
.calcContainer {
  display: flex;
  justify-content: space-around;
}
.calcField {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 150px;
  height: 100px;
  margin-bottom: 20px;
}
.keyboard {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  margin: 0 20px 20px;
}
.upperRow {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>