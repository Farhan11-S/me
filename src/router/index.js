import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../components/card-descendants/card-contents/AboutMe'
import ProjectList from '../components/card-descendants/card-contents/ProjectList'
import Tangria from '../components/card-descendants/card-contents/project-cards/Tangria'
import Ohio from '../components/card-descendants/card-contents/project-cards/Ohio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/project-list',
    name: 'Project List',
    component: ProjectList
  },
  {
    path: '/tangria',
    name: 'Tangria Product Management',
    component: Tangria
  },
  {
    path: '/ohio',
    name: 'Ohio Food Catalog',
    component: Ohio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
