import Temp from './modules/template.vue';
import Vue from "vue";

window.addEventListener('load', () => {
  new Vue({
    render: (h) => h(Temp),
  }).$mount("#body");
})