import Vue from 'vue'
import App from './App'
import HorizontalBar from 'components/common/HorizontalBar.vue'
Vue.config.productionTip = false
Vue.component('HorizontalBar', HorizontalBar)
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
