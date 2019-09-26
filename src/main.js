// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-easytable/libs/themes-base/index.css'
import {VTable, VPagination} from 'vue-easytable'
Vue.prototype.$axios = axios
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.config.productionTip = false

Vue.use(iView)
Vue.use(VueAxios, axios)
Vue.use(iView)
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
