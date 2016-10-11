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
    static ConfigInit($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        'ngInject';
        //ionic 配置
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        $urlRouterProvider.otherwise('/u/login');
    }
}
