const Home = () => import ('@views/Home.vue')
const Directives = () => import ('@views/Directives.vue')
const Parent = () => import ('@views/Parent.vue')

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/Directives', 
    component: Directives 
  },
  { 
    path: '/Parent', 
    component: Parent 
  }
]

export default routes