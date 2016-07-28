export default router => {
    //路由配置
    router.map({
        '/home': {
            component(resolve) {
                require(['../views/home'], resolve);
            }
        },
        '/home/:itemId': {
            component(resolve) {
                require(['../views/home/item.vue'], resolve);
            },
            name: 'homeItem'
        },
        '/waimai': {
            component(resolve) {
                require(['../views/takeOut'], resolve);
            }
        },
        '/order': {
            component(resolve) {
                require(['../views/order'], resolve);
            }
        },
        '/found': {
            component(resolve) {
                require(['../views/found'], resolve);
            }
        },
        '/my': {
            component(resolve) {
                require(['../views/my'], resolve);
            }
        }
    });
    //重定向
    router.redirect({
        '*': '/home'
    });
    //路由开始时
    router.beforeEach(({ to, from, next }) => {
        let toPath = to.path;
        let fromPath = from.path;
        if (toPath.replace(/[^/]/g, '').length > 1) {
            router.app.isApp = false;
        } else {
            let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank';
            router.app.isApp = depath ? 0 : 1;
        }
        next();
    });
    //路由结束时
    router.afterEach((transition) => {
        //console.log('end', transition);
    });
};