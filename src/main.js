import Vue from 'vue'
import App from './App'
import store from './store'
// import router from './router'

import 'common/stylus/index.styl'

// 开发模式
Vue.config.productionTip = true

let app = new Vue({
  el: '#app',
  created() {
    // 默认不暂停 即运行状态
    this.paused = false
    // 默认不跳过动画
    this.animationSkipped = false
  },
  render: h => h(App),
  store
  // router
})

let styleTagEl = document.getElementById('style-tag')

// 在index.html里面加上css
app.$on('styleAppend', styleText => {
  styleTagEl.textContent += styleText
})

app.$on('styleOverwrite', styleText => {
  styleTagEl.textContent = styleText
})

app.$on('togglePause', function(state) {
  // 0表示运行状态 页面显示暂停按钮, 1表示暂停状态 页面显示继续按钮
  this.paused = state === 1
})

app.$on('skip', function() {
  this.animationSkipped = true
})
