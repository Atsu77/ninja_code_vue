<template>
  <div id="app">
    <div v-bind:class="{ active: isActive }">Active!!</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    message: "Hello 忍者Code!",
    isActive: true,
  }),
};
</script>

<style>
.active {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 30% auto;
  color: #41ba83;
}
</style>
