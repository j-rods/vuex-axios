import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store/index';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, { iconfont: 'md' });
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
