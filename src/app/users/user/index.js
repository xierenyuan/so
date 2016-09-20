/**
 * 银行模块
 * @author wangkai
 */
import './user.scss';
import temp from './index.html';
import UserCtrl from './user.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('u.user', {
            url: '/user',
            templateUrl: temp,
            controller: UserCtrl.name,
            controllerAs: 'vm'
        });
    }
}

export default angular.module('so.app.user.user', [])
    .config(Config.ConfigInit)
    .controller(UserCtrl.name, UserCtrl)
    .name;
