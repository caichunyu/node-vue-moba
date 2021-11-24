import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './assets/iconfront/iconfont.css'
import Card from "@/components/Card";
import ListCard from "@/components/ListCard";

Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
