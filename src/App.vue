<template>
  <div id="app">
    <p>{{ greet }}</p>
    <button @click="alertText" class="alert_btn">Alert!</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
  }),
  methods: {
    alertText() {
      alert("Hello World!");
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
