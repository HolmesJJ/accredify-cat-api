import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: () => import( /* webpackChunkName: "fav" */ '../views/FavouriteView.vue')
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import( /* webpackChunkName: "vote" */ '../views/VoteView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
