/**
 * 附近首页
 * Created by xuwus on 2016/9/23.
 */
import './index.scss';
import temp from './index.html';

import NearbyCtrl from './nearby.comtroller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.nearby', {
      url: '/nearby',
      views: {
        'nearby': {
          templateUrl: temp,
          controller: NearbyCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}
export default angular.module('so.app.merchants.nearby', [])
  .config(Config.ConfigInit)
  .controller(NearbyCtrl.name,NearbyCtrl)
  .name;
