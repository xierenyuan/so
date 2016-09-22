/**
 * 买单支付
 * Created by xuwus on 2016/9/21.
 */
import './index.scss';
import temp from './bill.html';
import BillCtrl from './bill.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.payBill', {
      url: '/payBill',
      views: {
        'crowd': {
          templateUrl: temp,
          controller: BillCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.crowd.payBill', [])
  .config(Config.ConfigInit)
  .controller(BillCtrl.name,BillCtrl)
  .name;
