/**
 * 营业订单
 * Created by wangkai on 2016/9/24.
 */
import './index.scss'
import temp from './index.html';
import PaymentCtrl from './payment.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.payment', {
      url: '/payment',
      views: {
        'shops': {
          templateUrl: temp,
          controller: PaymentCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.home.shop.payment', [])
  .config(Config.ConfigInit)
  .controller(PaymentCtrl.name, PaymentCtrl)
  .name;
