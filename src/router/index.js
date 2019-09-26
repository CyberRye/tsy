import Vue from 'vue'
import Router from 'vue-router'
import navigator from '@/components/navigator'
import TableMain from '@/components/page/TableMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      component: resolve => require(['../components/common/index.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/index.vue'], resolve)
        },
        {
          path: '/analyse',
          component: resolve => require(['../components/page/analyse.vue'], resolve)
        },
        {
          path: '/message',
          component: resolve => require(['../components/page/message.vue'], resolve)
        },
        {
          path: '/organization',
          component: resolve => require(['../components/page/organization.vue'], resolve)
        },
        {
          path: '/project',
          component: resolve => require(['../components/page/project.vue'], resolve)
        },
        {
          path: '/test',
          component: resolve => require(['../components/page/test.vue'], resolve)
        },
        {
          path: '/userinfo',
          component: resolve => require(['../components/page/userinfo.vue'], resolve)
        },
        {
          path: '/workplace',
          component: resolve => require(['../components/page/workplace.vue'], resolve)
        },
        {
          path: '/daily',
          component: resolve => require(['../components/page/daily.vue'], resolve)
        },
        {
          path: '/projectcreate',
          component: resolve => require(['../components/page/projectcreate.vue'], resolve)
        },
        {
          path: '/table',
          component: resolve => require(['../components/page/TableMain.vue'], resolve)
        }

      ]
    },
    {
      path: '/about1',
      name: 'Table',
      component: TableMain
    },
    {
      path: '/navigator',
      name: 'navigator',
      component: navigator
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/login.vue'], resolve)
    }
  ]
})
