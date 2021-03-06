// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import APP from './App'
import router from './pages/router'
import AnimatedVue from 'animated-vue'

Vue.use(AnimatedVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<APP/>',
  components: { APP }
})
