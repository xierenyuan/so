/**
 *
 * 商户配置 文件 1.0
 * @export
 * @class MerchantsConfig
 * @author xierenhong
 */
export default class MerchantsConfig {
    /**
     *
     * 配置入口
     * @static
     * @param {any} $stateProvider
     */
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m', {
            url: '/m',
            template: `<ion-nav-bar class="bar-positive">
                            <ion-nav-back-button class="button-icon ion-ios-arrow-left">
                            </ion-nav-back-button>
                        </ion-nav-bar>
                       <ion-nav-view></ion-nav-view>
                        `,
            absolute: true

        });
    }
}


