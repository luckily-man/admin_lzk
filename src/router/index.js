import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    // redirect:"/tab",
    redirect:"/welcome",
    component: () => import ('../views/Home/Home.vue'),
    children:[
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import ('../views/welcome/welcome.vue'),
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import ('../views/Table/Table.vue'),
      },
      {
        path: '/tab',
        name: 'Tab',
        component: () => import ('../views/Tab/Tab.vue')
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import ('../views/Charts/Charts.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import ('../views/video/video.vue')
      },
      {
        path: '/changeCharts',
        name: 'ChangeCharts',
        component: () => import ('../components/moreCharts/changeCharts.vue')
      },
      {
        path: '/tree',
        name: 'Tree',
        component: () => import ('../views/Tree/Tree.vue')
      },
      {
        path: '/three',
        name: 'Three',
        component: () => import ('../views/Three/Three.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import ('../views/register/register.vue')
      },
      {
        path: '/practice',
        name: 'practice',
        component: () => import ('../views/practice/practice.vue')
      },
      {
        path: '/notebook',
        name: 'notebook',
        component: () => import ('../views/notebook/notebook.vue')
      },
      {
        path: '/enjoy',
        name: 'enjoy',
        component: () => import ('../views/enjoy/enjoy.vue')
      },
      {
        path: '/error',
        name: 'error',
        component: () => import ('../views/error/404.vue')
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import ('../views/edit/edit.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login/Login.vue'),
  }
];

const router = new VueRouter({
  routes
});

// 挂载导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数 ，表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})



export default router;
