import Vue from "vue";
import VueI18n from 'vue-i18n';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.scss'
import './assets/css/public.scss'
import './components/index.js';
import filters from './utils/filters.js'
import axios from 'axios'
import VCharts from 'v-charts'
import echarts from 'echarts'
import videojs from 'video.js'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import './assets/font/iconfont.js'
import '../src/assets/css/vue.scss'
import SlideVerify from 'vue-monoplasty-slide-verify'
import animated from 'animate.css'
import VueCropper from 'vue-cropper' 
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 请求基准路径的配置

axios.defaults.baseURL = 'http://localhost:3000/api/'
// 将axios挂载到vue原型上
// 在别的组件中this.$http
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts

Vue.component('vue-custom-scrollbar', vueCustomScrollbar)
Vue.use(ElementUI)
Vue.use(filters)
Vue.use(VueI18n)
Vue.use(VCharts)
Vue.use(SlideVerify)
Vue.use(animated)
Vue.use(VueCropper)
Vue.use(VueQuillEditor)
// Vue.use(axios)

const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  messages: {
    'zh-CN': require('./assets/lang/zh'),
    'en-US': require('./assets/lang/en')
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
