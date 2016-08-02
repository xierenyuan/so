/**
 * author wusheng.xu
 * date 16/8/2
 */
import temp from './index.html';
import ListCtrl from './list.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.list', {
      url: '/list',
      views: {
        'shops': {
          templateUrl: temp,
          controller: ListCtrl.name,
          controllerAs: 'list'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.home.list', [])
  .config(Config.ConfigInit)
  .controller(ListCtrl.name, ListCtrl)
  .name;
