import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Produto from "./views/Produto.vue";
import Carrinho from "./views/Carrinho.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true
    },
    {
      path: "/carrinho/",
      name: "carrinho",
      component: Carrinho
    },
 
  ],
});
