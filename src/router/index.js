import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Com from '@/views/com'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 访问路径
      name: 'HelloWorld',
      component: HelloWorld // 引用的组件
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/com',
      name: 'Com',
      component: Com
    }
  ]
})
