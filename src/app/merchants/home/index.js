/**
 * 商户首页模块
 * @author xierenhong
 */

import './index.scss';
import shops from './shops';
import list from './list';
import temp from './index.html';
import MHomeCtrl from './home.controller';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home', {
            url: '/home',
            templateUrl: temp,
            controller: MHomeCtrl.name,
            controllerAs: 'home'
        });
        console.log('呵呵呵 home');
    }
}

export default angular.module('so.app.merchants.home', [shops, list])
    .config(Config.ConfigInit)
    .controller(MHomeCtrl.name, MHomeCtrl)
    .name;