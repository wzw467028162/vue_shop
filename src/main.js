import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入iconfont
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false;
Vue.use(ElementUI)


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
