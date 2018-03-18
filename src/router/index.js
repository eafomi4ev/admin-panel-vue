import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/Index.vue";
import UserList from "@/pages/UserList.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  component: Index,
}, {
  path: '/users',
  component: UserList,
}];

export default new VueRouter({
  mode: 'history',
  routes,
});