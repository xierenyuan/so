/**
 * 商户首页模块
 * @author xierenhong
 */

import './index.scss';
import shops from './shops';
import list from './list';
import manage from './shop.manage';
import info from './order.info';
import bisOrder from './business.order';
import dtlOrder from './order.detail';
import payment from './payment';

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
    }
}

export default angular.module('so.app.merchants.home', [shops, list,manage,info,bisOrder,dtlOrder,payment])
    .config(Config.ConfigInit)
    .controller(MHomeCtrl.name, MHomeCtrl)
    .name;
