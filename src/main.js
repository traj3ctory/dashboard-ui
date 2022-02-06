import Vue from 'vue'
import App from './views/Dashboard.vue'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import router from './routes/main.routes';
import BaseComponent from './components/BaseComponents';

import './styles/main.scss';
import "./plugins/bootstrap";
import "./plugins/primevue";

Vue.use(PrimeVue);
Vue.component('Dialog', Dialog);
BaseComponent.register(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
