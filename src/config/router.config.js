export default router => {
  //路由配置
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
  //路由开始时
  router.beforeEach((transition) => {
    console.log('start ', transition);
    console.log(router.app);
    transition.next();
  });
  //路由结束时
  router.afterEach((transition) => {
    console.log('end', transition);
  });
};
