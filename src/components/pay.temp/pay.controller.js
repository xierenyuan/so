/**
 * Created by xuwus on 2016/9/21.
 */
export default class PayTempCtrl {
  constructor($scope,$state) {
    'ngInject';
    this.$scope = $scope;
    this.$state=$state;
  }

  payLink(state){
    this.$state.go(state);
  }
}
