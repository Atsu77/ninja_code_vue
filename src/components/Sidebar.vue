<template>
  <div class="sidebar-container">
    <h1>Sidebar</h1>
    <NavList />
  </div>
</template>

<script>
import NavList from "@/components/NavList.vue";
export default {
  components: {
    NavList,
  },
};
</script>

<style scoped>
.sidebar-container {
  width: 20%;
  background: #fff;
}
.sidebar-container h1 {
  padding-top: 20px;
  color: #40b983;
}
</style>
