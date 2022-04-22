<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    message: "Hello 忍者Code!"
  })
};
</script>

<style>
#app {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 30% auto;
  color: #41ba83;
}
</style>
