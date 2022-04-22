<template>
  <div id="app" class="text-card">
    <div v-if="random == 'fun'">
      <p>楽しい!!</p>
    </div>
    <div v-else-if="random == 'lazy'">
      <p>退屈だ!!</p>
    </div>
    <div v-else>
      <p>どうしよう!!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    random: "lazy",
  }),
};
</script>

<style>
.text-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #40b983;
  color: #fff;
}

.text-card p {
  font-size: 2rem;
  font-weight: bold;
}
</style>
