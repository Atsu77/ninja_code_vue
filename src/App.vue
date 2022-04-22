<template>
  <div id="app">
    <div v-if="show">
      <p class="text text-success">NinjaCODE 楽しい!!</p>
    </div>
    <div v-else>
      <p class="text text-danger">NinjaCODE 難しい...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    show: false,
  }),
};
</script>

<style>
.text {
  font-size: 2rem;
  margin: 30% auto;
  text-align: center;
  border-bottom: 2px solid #35495e;
  width: 50%;
}
.text-success {
  color: #00b894;
}

.text-danger {
  color: #d63031;
}
</style>
