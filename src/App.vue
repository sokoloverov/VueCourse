<template>
  <v-app id="app">
    <v-app-bar app flat>
      <v-btn plain :ripple="false" to="/dashboard">Dashboadr</v-btn>
      <!-- <router-link to="/dashboard" :class="[$style.but]"
          >Dashboadr</router-link
        > -->
      <v-btn plain :ripple="false" to="/about">About</v-btn>
      <!-- <router-link to="/about" :class="[$style.but]">About</router-link> -->
      <v-btn plain :ripple="false" to="/404">404</v-btn>
      <!-- <router-link to="/404" :class="[$style.but]">404</router-link> -->
    </v-app-bar>
    <v-main app
      ><div>
        <header>
          <div class="text-h5 text-sm-h3">Жизнь того стоит?</div>
          <!-- <div :class="[$style.title]">Жизнь того стоит?</div> -->
          <!-- <br /> -->
          <div :class="[$style.link]"></div>
        </header>
        <main>
          <router-view></router-view>
        </main>
        <!-- <transition name="fade">
        <Modal v-if="modalShown" :name="modalShown" />
      </transition> -->
      </div></v-main
    >
  </v-app>
</template>


<script>
//import Modal from "./components/Modal.vue"; при динамическом импорте
export default {
  //components: { Modal: () => import("./components/Modal.vue") }, //динамическй импорт плагинов
  name: "App",
  data() {
    return { modalShown: false };
  },
  mounted() {
    if (this.$route.path !== "/dashboard")
      this.$router.push({ name: "dashboard" });
    //стартова страница после перезагрузки
    // this.$modal.EventBus.$on("show", this.onShow);
    // this.$modal.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    //отписка от собыий, когда компонент будет уничтожен - обязательно!
    // this.$modal.EventBus.$off("show", this.onShow);
    // this.$modal.EventBus.$off("close", this.onClose);
  },
  methods: {
    // onShow({ name }) {
    //   this.modalShown = name;
    // },
    // onClose() {
    //   this.modalShown = false;
    // },
  },
};
</script>

<style lang="scss" module>
.title {
  display: inline-block;
  width: 50%;
  min-width: 420px;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
  color: #343434;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 1px white, 0 3px #777;
}
.link {
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: 0 0 10px;
}
.but {
  display: block;
  color: #343434;
  border: 1px solid yellowgreen;
  background: yellowgreen;
  text-decoration: none;
  padding: 5px;
  &:hover {
    background: rgb(224, 255, 47);
  }
}
:global(.fade-enter-active),
:global(.fade-leave-active) {
  transition: opacity 0.5s;
} //global - не позволяет присоединять hash иначе не работает
:global(.fade-enter),
:global(.fade-leave-to) {
  opacity: 0;
}
</style>
