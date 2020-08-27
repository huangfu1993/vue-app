import Vue from 'vue';
import App from './App';
import HorizontalBar from 'components/common/HorizontalBar.vue';
import UploadImage from 'components/common/UploadImage.vue';
Vue.config.productionTip = false;
Vue.component('HorizontalBar', HorizontalBar);
Vue.component('UploadImage', UploadImage);
App.mpType = 'app';

const app = new Vue({
	...App
});
app.$mount();
