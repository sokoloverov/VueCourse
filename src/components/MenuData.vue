<template>
  <div :class="[$style.wrapper]">
    <button @click="edit" :class="[$style.but]">Редактирование</button>
    <button @click="remove" :class="[$style.but]">Удаление</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  props: { changePosition: Number },
  methods: {
    ...mapActions(["deleteData"]),
    edit() {
      this.$emit("editClick");
    },
    remove() {
      this.deleteData(this.changePosition);
      this.$modal.close();
    },
  },
  mounted() {},
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 150px;
  background: rgb(217, 248, 170);
}
.but {
  display: block;
  border: 1px solid green;
  background: none;
  &:hover {
    background: greenyellow;
  }
}
</style>