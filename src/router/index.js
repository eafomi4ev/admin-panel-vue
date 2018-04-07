import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: 'index',
  component: () => import("@/pages/Index.vue"),
}, {
  path: '/users',
  name: 'userList',
  component: () => import("@/pages/UserList.vue"),
}, {
  path: '/users/edit/:id',
  name: 'userEdit',
  component: () => import("@/pages/UserEdit.vue"),
  props: true, //https://router.vuejs.org/ru/essentials/passing-props.html
}, {
  path: '/users/create',
  name: 'userCreate',
  component: () => import("@/pages/UserCreate.vue"),
}
];

export default new VueRouter({
  mode: 'history',
  routes,
});
