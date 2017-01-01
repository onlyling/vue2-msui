import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import msui from './msui'

Vue.use(VueRouter)
Vue.use(msui)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: (resolve) => {
    return require(['./views/home.vue'], resolve)
  },
  meta: {
    title: '首页'
  }
}, {
  path: '/about',
  name: 'about',
  component: (resolve) => {
    return require(['./views/about.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '关于我们'
  }
}, {
  path: '/button',
  name: 'button',
  component: (resolve) => {
    return require(['./views/button.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '按钮'
  }
}, {
  path: '/tabs',
  name: 'tabs',
  component: (resolve) => {
    return require(['./views/tabs.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '标签页'
  }
}, {
  path: '/list',
  name: 'list',
  component: (resolve) => {
    return require(['./views/list.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '列表'
  }
}, {
  path: '/form',
  name: 'form',
  component: (resolve) => {
    return require(['./views/form.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '表单'
  }
}, {
  path: '/card',
  name: 'card',
  component: (resolve) => {
    return require(['./views/card.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '卡片'
  }
}, {
  path: '/icon',
  name: 'icon',
  component: (resolve) => {
    return require(['./views/icon.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '图标'
  }
}, {
  path: '/swiper',
  name: 'swiper',
  component: (resolve) => {
    return require(['./views/swiper.vue'], resolve)
  },
  meta: {
    goback: true,
    title: '轮播'
  }
}, {
  path: '/iscroll',
  name: 'iscroll',
  component: (resolve) => {
    return require(['./views/iscroll.vue'], resolve)
  },
  meta: {
    goback: true,
    title: 'iscroll'
  }
}]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 记录路由改变的次数，避免页面刷新后，右进入
var IS_ROUTER_FIRST_CHANGE = true

router.beforeEach((to, from, next) => {

  let direction = 'slide-fade'
    // 上一个页面是否是返回？
  if (!!from.meta.goback) {
    // 如果两个页面都有callback，比较路由深度
    if (!!to.meta.goback) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      direction = toDepth >= fromDepth ? 'slide-right' : 'slide-left'
    } else {
      direction = 'slide-left'
    }
  } else {
    // 下个页面是否是返回？
    direction = !!to.meta.goback ? 'slide-right' : 'slide-fade'
  }

  if (IS_ROUTER_FIRST_CHANGE) {
    IS_ROUTER_FIRST_CHANGE = !IS_ROUTER_FIRST_CHANGE
    direction = 'slide-fade'
  }

  router.app.pageTransition = direction

  document.title = to.meta.title

  next()

})


const app = new Vue({
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')