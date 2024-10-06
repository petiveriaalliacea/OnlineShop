import { createRouter, createWebHistory } from 'vue-router'
import ProductListPage from './pages/ProductListPage.vue'
import ProductPage from './pages/ProductPage.vue'

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: ProductListPage
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductPage,
    props: true
  }
  // {
  //   path: '/:pathMatch(.*)*', // 404 handling
  //   name: 'NotFound',
  //   component: () => import('./pages/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
