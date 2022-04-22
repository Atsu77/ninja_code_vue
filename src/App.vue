<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="job in jobs" :key="job.key">
          {{ job.name }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="addJob">
      <input type="text" v-model="newJobName" />
      <input type="submit" value="ジョブを完了する" />
    </form>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  name: "App",
  data: () => ({
    jobs: [],
    newJobName: "",
  }),
  methods: {
    addJob() {
      this.jobs = [
        ...this.jobs,
        {
          name: this.newJobName,
        },
      ];
      this.newJobName = "";
    },
  },
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
