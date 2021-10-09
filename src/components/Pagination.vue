<template>
  <v-app-bar density="compact">
    <div :class="[$style.carousel, $style.button]">
      <button :class="[$style.button]" @click="moveLeft">&#9664;</button>
      <div v-for="page in makePagesArray()" :key="page">
        <button
          @click="choosePage(page)"
          v-bind:class="[
            { [$style.active]: page === currentPage },
            [$style.button],
          ]"
        >
          {{ page }}
        </button>
      </div>
      <button :class="[$style.button]" @click="moveRight">&#9654;</button>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    listLength: {
      type: Number,
      require: true,
    },
    countOnPage: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      pages: [],
      currentPage: 1,
    };
  },
  methods: {
    makePagesArray() {
      return Math.ceil(this.listLength / this.countOnPage);
    },
    choosePage(value) {
      this.$emit("choosePage", value);
      this.currentPage = value;
    },
    moveLeft() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.choosePage(this.currentPage);
      }
    },
    moveRight() {
      if (this.currentPage < Math.ceil(this.listLength / this.countOnPage))
        this.currentPage++;
      this.choosePage(this.currentPage);
    },
  },
};
</script>

<style lang="scss" module>
.carousel {
  width: 50%;
  min-width: 420px;
  display: flex;
  justify-content: center;
  margin: 5px 0;
}
.active {
  color: brown;
  font-weight: 800;
}
.button {
  margin: 5px;
  padding: 5px;
}
</style>