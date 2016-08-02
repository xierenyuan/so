/**
 * 筛选指令ctrl
 * author wusheng.xu
 * date 16/8/2
 */
export default class ListFilterCtrl {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;

  }
  onClick(item,i) {
    if(angular.isFunction(this.$scope.tabClickCallBack)){
      this.$scope.tabClickCallBack({item:item,index:i});
    }
  }
}
