import Vue from 'vue';
import App from './app.vue';

const vueApp = new Vue({
  el: '#app',
  render: h => h(App),
});

vueApp();
