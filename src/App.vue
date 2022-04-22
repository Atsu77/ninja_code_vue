<template>
  <div id="app">
    <p>{{ count }}</p>
    <button class="up" @click="countUp">プラス</button>
    <button class="down" @click="countDown">マイナス</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    count: 0
  }),
  methods: {
    countUp() {
      this.count++;
    },
    countDown() {
      this.count--;
    }
  }
};
</script>

<style>
p {
  font-size: 30px;
  font-weight: bold;
}
button {
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

button.up {
  background: #40b983;
  border: none;
}
button.down {
  background: red;
  border: none;
}
</style>
