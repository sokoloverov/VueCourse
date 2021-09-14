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
.button10 {
  position: relative;
  display: inline-block;
  color: black;
  font-size: 125%;
  font-weight: 700;
  text-decoration: none;
  user-select: none;
  padding: 0.25em 0.5em;
  outline: none;
  border: 1px solid rgb(250, 172, 17);
  border-radius: 7px;
  background: rgb(255, 212, 3)
    linear-gradient(rgb(255, 212, 3), rgb(248, 157, 23));
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0),
    inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.button10:hover {
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0),
    inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0.5);
}
.button10:active {
  padding: calc(0.25em + 1px) 0.5em calc(0.25em - 1px);
  border-color: rgba(177, 159, 0, 1);
  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 0 0 60px rgba(255, 255, 0, 0.45);
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
.button4 {
  position: relative;
  display: inline-block;
  font-family: Arial, Helvetica, FreeSans, "Liberation Sans", "Nimbus Sans L",
    sans-serif;
  font-weight: 700;
  color: rgb(245, 245, 245);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  user-select: none;
  height: 40px;
  padding: 2px 5px;
  margin: 0 5px;
  outline: none;
  border: none;
  border-radius: 3px;
  background: #0c9c0d linear-gradient(#82d18d, #0c9c0d);
  box-shadow: inset #72de26 0 -1px 1px, inset 0 1px 1px #98ff98,
    #3caa3c 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 2px 5px;
  -webkit-animation: pulsate 1.2s linear infinite;
  animation: pulsate 1.2s linear infinite;
}
.button4_w {
  width: 60px;
  font-size: 2em;
}
.button4:hover {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  cursor: pointer;
}
.button4:active {
  top: 1px;
  color: #fff;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3), 0 1px 1px #fff,
    inset 0 1px 2px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.05);
}
.button13 {
  display: inline-block;
  width: 15em;
  font-size: 80%;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: #2e7ebd 0 1px 2px;
  text-decoration: none;
  text-align: center;
  line-height: 1.1;
  white-space: pre-line;
  padding: 0.7em 0;
  border: 1px solid;
  border-color: #60a3d8 #2970a9 #2970a9 #60a3d8;
  border-radius: 6px;
  outline: none;
  background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
  box-shadow: inset rgba(255, 255, 255, 0.5) 1px 1px;
}
.button13:first-line {
  font-size: 170%;
  font-weight: 700;
}
.button13:hover {
  color: rgb(255, 255, 255);
  background-image: linear-gradient(#9dc7e7, #74afdd 50%, #378bce);
}
.button13:active {
  color: rgb(255, 255, 255);
  border-color: #2970a9;
  background-image: linear-gradient(#5796c8, #6aa2ce);
  box-shadow: none;
}
@-webkit-keyframes pulsate {
  50% {
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
  }
}
@keyframes pulsate {
  50% {
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
  }
}
</style>