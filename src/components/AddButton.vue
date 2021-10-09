<template>
  <v-container>
    <v-btn color="teal" dark type="button" @click="onButtonClick">
      Добавить новый расход<v-icon>mdi-abacus</v-icon>
    </v-btn>
    <!-- <button :class="[$style.buttonAdd]" type="button" @click="onButtonClick">
        Добавить новый расход +
      </button> -->
  </v-container>
</template>

<script>
export default {
  methods: {
    onButtonClick() {
      this.$emit("buttonClick");
    },
  },
};
</script>

<style lang="scss" module>
.buttonAdd {
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 0.8em 1em calc(0.8em + 3px);
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