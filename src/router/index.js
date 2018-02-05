import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Login from '@/components/Login'

import '../../theme/index.css';

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
