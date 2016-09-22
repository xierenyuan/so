/**
 * 我的模块
 * @author wangkai
 */
import './my.scss';
import temp from './index.html';
import MyCtrl from './my.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('a.my', {
            url: '/my',
            templateUrl: temp,
            controller: MyCtrl.name,
            controllerAs: 'vm'
        });
    }
}

export default angular.module('so.ao.my', [])
    .config(Config.ConfigInit)
    .controller(MyCtrl.name, MyCtrl)
    .name;