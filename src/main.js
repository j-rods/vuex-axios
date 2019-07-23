import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {iconfont: 'md'})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
