/**
 * 众筹 项目模块
 * @author xierenhong
 */

import temp from './index.html';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        console.log('呵呵');
        $stateProvider.state('m.home.c.p', {
            url: '/p',
            templateUrl: temp
        });
    }
}

export default angular.module('so.app.merchants.crowd.project', [])
    .config(Config.ConfigInit)
    .name;