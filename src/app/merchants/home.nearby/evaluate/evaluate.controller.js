/**
 * Created by xuwus on 2016/9/23.
 */
export default class EavCtrl {
  constructor($scope) {
    'ngInject';
    this.$scope=$scope;
    this.$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });
  }
}
