const Home = () => import ('@views/Home.vue')
const Directives = () => import ('@views/Directives.vue')
const parent = () => import ('@views/parent.vue')

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/directives', 
    component: Directives 
  },
  { 
    path: '/parent', 
    component: parent 
  }
]

export default routes