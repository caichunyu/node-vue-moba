import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from "@/views/ArticleEdit";
import ArticleList from "@/views/ArticleList";

import AdEdit from "@/views/AdEdit";
import AdList from "@/views/AdList";

import AdminUserEdit from "@/views/AdminUserEdit";
import AdminUserList from "@/views/AdminUserList";

import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: Login,
  meta: {isPublic: true}
},
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: '/categories/create', component: CategoryEdit},
      {path: '/categories/list', component: CategoryList},
      {path: '/categories/edit/:id', component: CategoryEdit, props: true},//props 注入数据到组件      },

      {path: '/items/create', component: ItemEdit},
      {path: '/items/list', component: ItemList},
      {path: '/items/edit/:id', component: ItemEdit, props: true},

      {path: '/heroes/create', component: HeroEdit},
      {path: '/heroes/list', component: HeroList},
      {path: '/heroes/edit/:id', component: HeroEdit, props: true},

      {path: '/articles/create', component: ArticleEdit},
      {path: '/articles/list', component: ArticleList},
      {path: '/articles/edit/:id', component: ArticleEdit, props: true},

      {path: '/ads/create', component: AdEdit},
      {path: '/ads/list', component: AdList},
      {path: '/ads/edit/:id', component: AdEdit, props: true},

      {path: '/admin_users/create', component: AdminUserEdit},
      {path: '/admin_users/list', component: AdminUserList},
      {path: '/admin_users/edit/:id', component: AdminUserEdit, props: true},


    ]
  },
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})

export default router
