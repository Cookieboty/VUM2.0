import Vue from 'vue'
import Router from 'vue-router'
import Vum from '../vum.js'
import config from './routes'

Vue.use(Router)
Vue.use(Vum)
// Vum.router(Router)

export default new Router({
  routes: config
})
