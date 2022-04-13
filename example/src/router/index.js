import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { name: 'Home', path: '/', component: Home },
    { name: 'Login', path: '/login', component: Login }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters.isLogin) {
    next({ name: 'Login' });
  } else next();
});

export default router;
