import 'core-js';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n';
import ElementUI from 'element-ui';
import asUI from 'as-ui';

Vue.use(ElementUI);
Vue.use(asUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
