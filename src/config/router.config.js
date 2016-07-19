export default router => {
    router.map({
        '/home': {
            component(resolve) {
                require(['../views/home'], resolve);
            }
        }
    });
    //重定向
    router.redirect({
        '*': '/home'
    });
};