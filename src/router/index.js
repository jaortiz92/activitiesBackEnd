import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Transaction from '../views/Transaction.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
