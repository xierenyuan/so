/**
 * 注册模块
 * @author wangkai
 */
import './register.scss';
import temp from './register.html';
import RegisterCtrl from './register.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('u.register', {
            url: '/register',
            templateUrl: temp,
            controller: RegisterCtrl.name,
            controllerAs: 'vm'
        });
    }
}

export default angular.module('so.app.user.register', [])
    .config(Config.ConfigInit)
    .controller(RegisterCtrl.name, RegisterCtrl)
    .name;
