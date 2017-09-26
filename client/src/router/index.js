import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from '@/components/ProductsList'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    }
  ]
})
