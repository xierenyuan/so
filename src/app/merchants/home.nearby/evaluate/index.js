/**
 * 评价
 * Created by xuwus on 2016/9/23.
 */
import './index.scss';
import temp from './index.html';
import EvaluateCtrl from './evaluate.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.eav', {
      url: '/eav',
      views: {
        'nearby': {
          templateUrl: temp,
          controller: EvaluateCtrl.name,
          controllerAs: 'vm'
        }
      }
    });
  }
}
export default angular.module('so.app.merchants.nearby.eav', [])
  .config(Config.ConfigInit)
  .controller(EvaluateCtrl.name,EvaluateCtrl)
  .name;
