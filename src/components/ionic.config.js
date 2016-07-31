/**
 * 
 * ionic 配置
 * @export
 * @class IonicConfig
 * @author xierenhong
 */
export default class IonicConfig {
    /**
     * 
     * ui 启动入口
     * @static
     * @param {any} $ionicPlatform
     */
    static RunInit($ionicPlatform) {
        'ngInject';
        $ionicPlatform.ready(() => {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }

    /**
     * 
     * ui 配置
     * @static
     * @param {any} $stateProvider
     * @param {any} $urlRouterProvider
     */
    static ConfigInit($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('so', {
            url: '/so',
            template: '<ion-nav-view></ion-nav-view>',
            absolute: true
        });
        $urlRouterProvider.otherwise('/so/login');
    }
}