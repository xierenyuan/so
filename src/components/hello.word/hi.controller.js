/**
 * 
 * 测试指令 hi 控制器
 * @export
 * @class HiCtrl
 */
export default class HiCtrl {
    constructor($scope) {
        'ngInject';
        this.$scope = $scope;
        this.btnText = this.$scope.btnText || '默认';
    }
    onClick() {
        //暴露事件
        if (angular.isFunction(this.$scope.soClick)) {
            this.$scope.soClick();
        }
    }
}