import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/golobal.css'
import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// 配置axios请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.prototype.$http = axios
// 为element-ui的弹窗消息组件挂载vue原型
Vue.prototype.$message = Message
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
