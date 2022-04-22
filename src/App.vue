<template>
  <div id="app">
    <p>{{ checked }}</p>
    <input type="checkbox" v-model="checked" />
    <p>{{ selectedValues }}</p>
    <label for="one">1</label>
    <input type="checkbox" id="one" v-model="selectedValues" />
    <label for="two">2</label>
    <input type="checkbox" id="two" value="2" v-model="selectedValues" />
    <label for="three">3</label>
    <input type="checkbox" id="three" value="3" v-model="selectedValues" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    checked: true,
    selectedValues: [],
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
