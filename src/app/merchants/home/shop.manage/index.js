/**
 * 商铺管理
 * Created by xuwus on 2016/9/24.
 */
import './index.scss'
import temp from './index.html';
import ManageCtrl from './manage.comtroller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.shopManage', {
      url: '/shopManage',
      views: {
        'shops': {
          templateUrl: temp,
          controller: ManageCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.home.shop.shopManage', [])
  .config(Config.ConfigInit)
  .controller(ManageCtrl.name, ManageCtrl)
  .name;
