/**
 * 用户模块
 * @author xierenhong
 */
import login from './login';
import register from './register';
import bank from './bank';
import user from './user';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('u', {
            url: '/u',
            template: '<ion-nav-view></ion-nav-view>',
            absolute: true
        });
    }
}

export default angular.module('so.app.user', [login,register,bank,user])
    .config(Config.ConfigInit)
    .name;
