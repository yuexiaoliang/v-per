# v-per

根据 `Vuex` 的 `getter` 进行权限控制。

## 使用

1. 安装

```bash
npm install v-per
```

2. 配置

```js
import Vue from 'vue';
import VPer from 'v-per';
import App from './App.vue';
import store from './store';

// 安装
Vue.use(VPer, { store, getterName: 'roles' });

const app = new Vue({
  render: (h) => h(App),
  store
});

app.$mount('#app');
```

3. 使用

```html
<!-- 传入一个数组 -->
<div v-per="['admin', 'v2']">admin 或者 v2 都能看到，传入了一个 Array</div>

<!-- 传入一个字符串 -->
<div v-per="'v2'">只有 v2 能看的内容，传入了一个 String</div>
```

## 配置项

### store

需要传入一个 `Vuex` 实例

### getterName

`Vuex` 中存放用户所有权限的 `getter`
