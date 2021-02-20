const parent = () => import ('views/parent.vue')
const home = () => import ('views/home.vue')

const routes = [
  { 
    path: '/', 
    component: home 
  },
  { 
    path: '/parent', 
    component: parent 
  }
]

export default routes