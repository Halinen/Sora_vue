import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //相当于
  // components:{App},
  // template:`<App/>`
  //加上调用loader:模板解析器
}).$mount('#app')
