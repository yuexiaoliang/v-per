import Vue from 'vue';
import VPer from 'v-per';
import App from './App.vue';
import store from './store';
import router from './router'

Vue.config.productionTip = false;

Vue.use(VPer, { store, getterName: 'roles' });

const app = new Vue({
  render: (h) => h(App),
  store,
  router
});

app.$mount('#app');
