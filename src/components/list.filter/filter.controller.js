/**
 * 筛选指令ctrl
 * author wusheng.xu
 * date 16/8/2
 */
export default class ListFilterCtrl {
  constructor($scope, $timeout) {
    'ngInject';
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.filterActiveIndex = -1;
    this.filterHidden = false;
  }

  onTabClick(item, i) {
    angular.forEach(this.$scope.tabItems, function (item, k) {
      if (i != k)
        item.$hasActive = false;
    });
    item.$hasActive = this.filterHidden = !item.$hasActive;
    this.filterActiveIndex = i;

    //回调通知
    if (angular.isFunction(this.$scope.tabClickCallBack)) {
      this.$scope.tabClickCallBack({item: item, index: i});
    }
  }

  onMenuClick(item, i) {
    angular.forEach(this.$scope.tabItems, function (item) {
        item.$hasActive = false;
    });
    this.filterHidden = false;
    this.filterActiveIndex = -1;
    //回调通知
    if (angular.isFunction(this.$scope.menuClickCallBack)) {
      this.$scope.menuClickCallBack({item: item, index: i});
    }
  }
}
