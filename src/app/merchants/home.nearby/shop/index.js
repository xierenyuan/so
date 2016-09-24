/**
 * Created by xuwus on 2016/9/23.
 */
import './index.scss';
import temp from './index.html';
  import ShopCtrl from './shop.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.shop', {
      url: '/shop',
      views: {
        'nearby': {
          templateUrl: temp,
          controller: ShopCtrl.name,
          controllerAs: 'vm'
        }
      }
    });
  }
}
export default angular.module('so.app.merchants.nearby.shop', [])
  .config(Config.ConfigInit)
  .controller(ShopCtrl.name,ShopCtrl)
  .name;
