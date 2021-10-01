<template>
  <div id="app">
    <div>
      <header>
        <div :class="[$style.title]">Жизнь того стоит?</div>
        <br />
        <router-link to="/dashboard">Dashboadr</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/404">404</router-link>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    //this.$router.push({ name: "dashboard" }); //стартова страница после перезагрузки
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
</style>
