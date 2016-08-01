/**
 * 
 * 登录控制器
 * @export
 * @class LoginCtrl
 */
export default class LoginCtrl {
    constructor($state) {
        'ngInject';
        this.$state = $state;

    }

    login() {
        this.$state.go('m.home.shops');
    }
}