<template>
  <div id="app">
    <p>あなたの入力した文字は？ => {{ message }}</p>
    <input type="text" v-model="message" placeholder="入力を監視しています" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    message: "",
  }),
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
