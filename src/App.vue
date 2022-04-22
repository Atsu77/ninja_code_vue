<template>
  <ul id="app">
    <li class="hobby-card" v-for="hobby in hobbies" :key="hobby.name">
      {{ hobby.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    hobbies: [
      { name: "プログラミング" },
      { name: "スポーツ" },
      { name: "読書" },
      { name: "旅行" },
    ],
  }),
};
</script>

<style>
.hobby-card {
  width: 50%;
  padding: 1rem;
  margin: 1rem auto;
  color: #ffffff;
  background: #40b983;
  box-shadow: 2px 2px 4px #ddd;
  font-weight: bold;
}
.hobby-card:hover {
  opacity: 0.8;
}
</style>
