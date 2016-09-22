/**
 * 支付通用组件
 * Created by xuwus on 2016/9/21.
 */
import './index.scss';
import Utils from 'utils';
import temp from './index.html';
import PayrCtrl from './pay.controller';
class PayTemp {
  constructor() {
    'ngInject';
    this.restrict = 'E';
    this.replace = true;
    this.controller = PayrCtrl;
    this.controllerAs = 'vm';
    this.scope = {
      order:'=', //订单信息
      payState:'@' //支付完成跳转
    };
    this.templateUrl = temp;
  }
  link($scope, $element, $attr) {
  }
}
export default angular.module('so.ui.payTemp', [])
  .directive('soPayTemp', Utils.Directive(PayTemp))
  .name;
