/**
 * Created by xuwus on 2016/9/23.
 */
import shopImg from 'assets/images/banner.gif';
export default class ShopCtrl {
  constructor($scope) {
    'ngInject';
    this.$scope=$scope;
    this.$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });
  }
}




