/**
 * 
 * 商铺控制器
 * @export
 * @class ShopsCtrl
 */
export default class ShopsCtrl {
    constructor($ionicPopup) {
        'ngInject';
        this.$ionicPopup = $ionicPopup;
        this.msg = '我只是一段描述 2333';

    }
    sayHello() {
        this.$ionicPopup.alert({
            title: '提示！',
            template: 'so hello 我在方法里 0.0'
        });
    }
}