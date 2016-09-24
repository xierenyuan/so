/**
 * 订单详情
 * Created by xuwus on 2016/9/24.
 */

import './index.scss'
import temp from './index.html';
import DetailCtrl from './detail.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.dtlOrder', {
      url: '/dtlOrder',
      views: {
        'shops': {
          templateUrl: temp,
          controller: DetailCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.home.shop.dtlOrder', [])
  .config(Config.ConfigInit)
  .controller(DetailCtrl.name, DetailCtrl)
  .name;
