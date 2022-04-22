<template>
  <div class="main-container">
    <router-view>
      <List />
      <Sample />
    </router-view>
  </div>
</template>

<script>
import List from "@/components/List";
import Sample from "@/components/Sample";
export default {
  components: {
    List,
    Sample,
  },
};
</script>

<style scoped>
.main-container {
  width: 80%;
  background: #ddd;
}
.main-container h1 {
  padding-top: 50px;
}
</style>
