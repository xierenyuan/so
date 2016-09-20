/**
 * 用户首页
 */
import './index.scss';
import temp from './index.html';
import UserHomeCtrl from './home.controller';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('a.h', {
            url: '/h',
            templateUrl: temp,
            controller: UserHomeCtrl.name,
            controllerAs: 'vm'
        });
    }
}
export default angular.module('so.ao.h', [])
    .config(Config.ConfigInit)
    .controller(UserHomeCtrl.name, UserHomeCtrl)
    .name;