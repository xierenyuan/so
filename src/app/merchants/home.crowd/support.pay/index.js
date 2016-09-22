/**
 * Created by xuwus on 2016/9/21.
 */
import './index.scss';
import temp from './pay.html';
import PayCtrl from './pay.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.supportPay', {
      url: '/supportPay',
      views: {
        'crowd': {
          templateUrl: temp,
          controller: PayCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.crowd.supportPay', [])
  .config(Config.ConfigInit)
  .controller(PayCtrl.name,PayCtrl)
  .name;
