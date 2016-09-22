/**
 * Created by xuwus on 2016/9/22.
 */
import './index.scss';
import temp from './index.html';
import SearchCtrl from './search.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.conSearch', {
      url: '/conSearch',
     /* templateUrl: temp,
      controller: SearchCtrl.name,
      controllerAs: 'vm'*/
      views: {
        'consume': {
          templateUrl: temp,
          controller: SearchCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}
export default angular.module('so.app.merchants.consume.conSearch', [])
  .config(Config.ConfigInit)
  .controller(SearchCtrl.name,SearchCtrl)
  .name;
