import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Home ',
      color: '#0277bd',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About ',
      color: '#0277bd',
    }
  },
  {
    path: '/camps',
    name: 'Camps',
    component: () => import( /* webpackChunkName: "events" */ '../views/Camps.vue'),
    meta: {
      title: 'Camps',
      color: '#0277bd',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact ',
      color: '#0277bd',
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( /* webpackChunkName: "blogs" */ '../views/Blogs.vue'),
    meta: {
      title: 'Blog',
      color: '#0277bd',
    }
  },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "#0277bd",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router