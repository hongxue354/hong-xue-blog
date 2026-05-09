import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PostDetail from '../pages/PostDetail.vue'
import Category from '../pages/Category.vue'
import Tag from '../pages/Tag.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/tag/:name',
    name: 'Tag',
    component: Tag,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
