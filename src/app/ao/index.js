/**
 * 用户app 主页
 */

import home from './home';
import my from './my';
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

export default angular.module('so.ao', [home,my])
    .config(Config.ConfigInit)
    .name;
