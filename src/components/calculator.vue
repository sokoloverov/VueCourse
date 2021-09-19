/* eslint-disable vue/return-in-computed-property */
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
        <button
          class="button4 button4_w"
          v-for="operand in operands"
          v-bind:title="operand"
          v-bind:disabled="operand1 === 0 || operand2 === 0"
          v-bind:key="operand"
          @click="calculate(operand)"
        >
          {{ operand }}
        </button>
      </div>
    </div>
    <h2 v-if="error">Ошибка! {{ error }}</h2>
    <h2 v-else class="button13">Результат {{ result }}</h2>
    <div class="logs">
      <div class="logs_mgin" v-for="(log, id) in logs" v-bind:key="id">
        {{ log }}
      </div>
    </div>
    <input type="checkbox" id="checkbox" v-model="keyboard" />
    <label for="checkbox">{{ keyNoteSign }}</label>
    <div v-show="keyboard" class="logs">
      <div
        class="logs_mgin"
        v-for="(button, id) in buttons"
        @click="resultNumber(button)"
        v-bind:key="id"
      >
        <button type="button" class="button28">{{ button }}</button>
      </div>
      <div class="logs">
        <input
          type="radio"
          id="one"
          value="Операнд 1"
          v-model="picked"
          checked
        />
        <label for="one" class="button10">Операнд 1</label>
        <br />
        <input type="radio" id="two" value="Операнд 2" v-model="picked" />
        <label for="two" class="button10">Операнд 2</label>
        <br />
      </div>
    </div>
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
      error: "",
      operands: ["+", "-", "/", "*", "^", "%"],
      logs: {}, // здесь будем хранить логи
      keyboard: false,
      buttons: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "🠔"],
      resultValue: [],
      picked: "Операнд 1",
    };
  },
  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.extermination();
          break;
        case "%":
          this.integerDivision();
          break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      this.$set(this.logs, key, value);
    },
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      if (this.operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = this.operand1 / this.operand2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    extermination() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    integerDivision() {
      this.result = this.operand1 % this.operand2;
    },
    resultNumber(value) {
      let operand;

      this.picked === "Операнд 1"
        ? (operand = this.operand1)
        : (operand = this.operand2);

      this.resultValue = [...String(operand)];

      if (value === "🠔" && this.resultValue.length >= 0) {
        this.resultValue.pop();
      } else {
        this.resultValue.push(value);
      }
      operand = parseInt(this.resultValue.join(""));
      if (isNaN(operand)) operand = 0;

      this.picked === "Операнд 1"
        ? (this.operand1 = operand)
        : (this.operand2 = operand);

      this.resultValue = [];
    },
  },
  computed: {
    keyNoteSign() {
      return this.keyboard === false
        ? "Показать клавиатуру"
        : "Скрыть клавиатуру";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../assets/buttons.css");

.mainScreen {
  width: 650px;
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
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100px;
  margin: 5px 20px 20px;
}
.logs {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}
.logs_mgin {
  padding: 0 5px;
}
</style>