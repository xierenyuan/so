/**
 * 众筹 项目模块
 * @author xierenhong
 */

import temp from './index.html';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home.crowd.p', {
            url: '/crowd/p',
            templateUrl: temp
        });
    }
}

export default angular.module('so.app.merchants.crowd.project', [])
    .config(Config.ConfigInit)
    .name;
