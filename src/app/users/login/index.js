/**
 * 登录模块
 * @author xierenhong
 */
import './login.scss';
import temp from './index.html';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('u.login', {
            url: '/login',
            templateUrl: temp
        });
    }
}

export default angular.module('so.app.user.login', [])
    .config(Config.ConfigInit)
    .name;