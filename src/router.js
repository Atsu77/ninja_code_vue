import Vue from "vue";
import Router from "vue-router";
import Sample from "./components/Sample";
import List from "./components/List";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "List",
      component: List,
    },
    {
      path: "/sample",
      name: "Sample",
      component: Sample,
    },
  ],
});
