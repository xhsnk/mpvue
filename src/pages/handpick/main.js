import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
wx.cloud.init({
  traceUser: true
})

const app = new Vue(App)
app.$mount()
