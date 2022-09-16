import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Favoris from '../views/Favoris.vue'
import Login from '../views/Login.vue'
import Magasin from '../views/Magasin.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component:Favoris
  },
  {
    path: '/magasin',
    name: 'Magasin',
    component:Magasin
  },
  { 
      path: '/login',
      name: 'Login',
      component:Login
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
