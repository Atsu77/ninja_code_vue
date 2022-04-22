<template>
  <div id="app">
    <p>{{ greet }}</p>
    <button @click="reverseText" class="alert_btn">文字が反転するよ</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    greet: "Hello Vue.js!"
  }),
  methods: {
    reverseText() {
      this.greet = this.greet
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
.alert_btn {
  background-color: #f00;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
