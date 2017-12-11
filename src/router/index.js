import Vue from 'vue'
import Router from 'vue-router'
import Wall from '@/components/Wall.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wall',
      component: Wall
    },
    {
      path: '/wall',
      name: 'Wall',
      component: Wall
    }
  ]
})
