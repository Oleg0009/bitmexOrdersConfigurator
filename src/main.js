import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);

new Vue({
   store,
   vuetify,
   render: h => h(App)
 }).$mount("#app");

