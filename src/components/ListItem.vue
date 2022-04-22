<template>
  <div>
    <transition name="slide-fade">
      <li v-if="show" @click="show = !show" class="list-item">
        {{ dream.name }}
      </li>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["dream"],
  data: () => ({
    show: true,
  }),
};
</script>

<style>
.list-item {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  list-style: none;
  border-left: 5px solid #40b983;
  border-bottom: 1px solid #40b983;
  border-top: 1px solid #40b983;
  border-right: 1px solid #40b983;
  font-weight: 700;
}
.list-item:hover {
  background: #40b983;
  opacity: 0.8;
  color: #fff;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(500px);
  opacity: 0;
}
</style>