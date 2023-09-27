import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../views/TodoList.vue";
import AddToDo from "../views/AddToDo.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: TodoList,
    },
    {
      path: "/add-todo",
      name: "add-todo",
      component: AddToDo,
    },
  ],
});

export default router;
