import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import { Toast, Actionsheet } from 'mint-ui';
import RouterConfig from './config/router.config';

//router
Vue.use(VueRouter);
const router = new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
});
//init router
RouterConfig(router);
//启动
router.start(App, '#app');
//重定向
router.redirect({
    '*': '/home'
});

Vue.component(Actionsheet.name, Actionsheet);

Toast('提示信息');