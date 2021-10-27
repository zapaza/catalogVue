import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import './assets/styles/styles.scss';

const app = createApp(App);

app
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app');

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'catalogVue';
  next();
});
