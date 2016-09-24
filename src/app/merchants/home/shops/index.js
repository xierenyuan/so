/**
 * 商铺模块
 * @author xierenhong
 */
import './index.scss';
import temp from './index.html';
import ShopsCtrl from './shops.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home.shops', {
            url: '/shops',
            views: {
                'shops': {
                    templateUrl: temp,
                    controller: ShopsCtrl.name,
                    controllerAs: 'shop'
                }
            }

        });
    }
}

export default angular.module('so.app.merchants.home.shops', [])
    .config(Config.ConfigInit)
    .controller(ShopsCtrl.name, ShopsCtrl)
    .name;
