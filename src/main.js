// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
import 'element-ui/lib/theme-chalk/index.css';
import Bus from '../src/components/child-com/bus'

Vue.use(Element)
Vue.prototype.$http=axios
Vue.prototype.$bus=Bus
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if(to.meta.needLogin){ //判断路由权限信息
      if(true){   //读取用户登录状态
        next()
      }else {
        next({path: '/'})
        Element.Message({
              message: '请先登录',
              type: 'error'
            });
      }
  }else {
      next()
  }
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
