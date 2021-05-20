import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
