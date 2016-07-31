/**
 * 
 * 商户配置 文件
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
            template: `<ion-nav-bar class="bar-stable">
                            <ion-nav-back-button>
                            </ion-nav-back-button>
                        </ion-nav-bar> 
                       <ion-nav-view></ion-nav-view> 
                        `
        });
    }
}