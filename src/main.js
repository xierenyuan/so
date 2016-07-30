import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Main from './Main.vue';
import 'ionicons-pre/css/ionicons.min.css';
import { Toast } from 'mint-ui';
import RouterConfig from './config/router.config';
//router
Vue.use(VueRouter);
const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    suppressTransitionError: true,
    linkActiveClass: 'is-selected'
});
//init router
RouterConfig(router);
//启动
router.start(Main, '#app');

Toast('提示信息');
