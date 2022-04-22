<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Main from "@/components/Main.vue";

export default {
  components: {
    Sidebar,
    Main,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100vh;
}
</style>
