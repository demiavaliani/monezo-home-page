import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VPopover from "vue-js-popover";

Vue.config.productionTip = false;
Vue.use(VPopover, { tooltip: true });

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
