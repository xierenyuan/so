/**
 * 订单信息
 * Created by xuwus on 2016/9/24.
 */
import './index.scss'
import temp from './index.html';
import InfoCtrl from './info.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.orderInfo', {
      url: '/orderInfo',
      views: {
        'shops': {
          templateUrl: temp,
          controller: InfoCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.home.shop.orderInfo', [])
  .config(Config.ConfigInit)
  .controller(InfoCtrl.name, InfoCtrl)
  .name;
