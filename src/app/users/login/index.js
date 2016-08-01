/**
 * 登录模块
 * @author xierenhong
 */
import './login.scss';
import temp from './index.html';
import LoginCtrl from './login.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('u.login', {
            url: '/login',
            templateUrl: temp,
            controller: LoginCtrl.name,
            controllerAs: 'vm'
        });
    }
}

export default angular.module('so.app.user.login', [])
    .config(Config.ConfigInit)
    .controller(LoginCtrl.name, LoginCtrl)
    .name;