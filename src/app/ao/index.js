/**
 * 用户app 主页
 */

import home from './home';
/**
 * 
 * 配置文件
 * @class Config
 */
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('a', {
            url: '/a',
            template: `<ion-nav-view></ion-nav-view>`,
            absolute: true
        });
    }
}

export default angular.module('so.ao', [home])
    .config(Config.ConfigInit)
    .name;