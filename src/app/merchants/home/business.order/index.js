/**
 * 营业订单
 * Created by xuwus on 2016/9/24.
 */
import './index.scss'
import temp from './index.html';
import BusinessCtrl from './business.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.bisOrder', {
      url: '/bisOrder',
      views: {
        'shops': {
          templateUrl: temp,
          controller: BusinessCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.home.shop.bisOrder', [])
  .config(Config.ConfigInit)
  .controller(BusinessCtrl.name, BusinessCtrl)
  .name;
