/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-12 15:52:30
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 15:57:02
 * @Email: wnejie@byteborder.com
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import wait from './utils/wait'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (['/about'].indexOf(to.path) !== -1) {
    next()
    if (!wait.status) {
      wait.fnA().then((resolve) => {
        wait.fnB()
      }).catch((reject) => {
        console.log('reject，', reject)
      })
    }
  } else {
    next()
    if (!wait.status) {
      wait.fnA()
    }

  }

})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
