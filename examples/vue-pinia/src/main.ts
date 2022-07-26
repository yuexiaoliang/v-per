import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import createVPer, { VPerOptions } from 'v-per';

window.localStorage.setItem('user-permissons', JSON.stringify(['V1', 'V2', 'ADMIN']));

const app = createApp(App);
// app.use(createVPer('user-permissons'));
// app.use(createVPer(['V1', 'V2', 'V3', 'ADMIN']));
app.use(createVPer(() => ['V1', 'V2', 'V3', 'ADMIN']));

app.mount('#app');
