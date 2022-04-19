import { lazy } from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../view/home')),
    name: 'Home',
  },
  {
    path: '/home',
    component: lazy(() => import('../view/home')),
    name: 'Home',
  },
]
export default routes
