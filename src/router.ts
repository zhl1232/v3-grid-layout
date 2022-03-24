import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

export const routes = [
  {
    title: '01 - 基本',
    name: '01-basic',
    path: '/components/01-basic',
    component: () => import('packages/GridLayout/docs/01-basic.md')
  },
  {
    title: '02 - 移动事件并调整大小',
    name: '02-events',
    path: '/components/02-events',
    component: () => import('packages/GridLayout/docs/02-events.md')
  },
  {
    title: '03 - 多个栅格',
    name: '03-multiple-grids',
    path: '/components/03-multiple-grids',
    component: () => import('packages/GridLayout/docs/03-multiple-grids.md')
  }
]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
}

const router = createRouter(routerConfig as RouterOptions)

export default router
