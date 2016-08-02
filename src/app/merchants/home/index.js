/**
 * 商户首页模块
 * @author xierenhong
 */

import shops from './shops';
import list from './list';
import temp from './index.html';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home', {
            url: '/home',
            templateUrl: temp
        });
    }
}

export default angular.module('so.app.merchants.home', [shops,list])
    .config(Config.ConfigInit)
    .name;
