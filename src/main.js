// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import PvTable from '@/components/PvTable'
import pv from 'hny-plm'

Vue.use(VueAxios, axios)
Vue.use(VXETable)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(pv)
// Vue.component('PvTable', PvTable)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
