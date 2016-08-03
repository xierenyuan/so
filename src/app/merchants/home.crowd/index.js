/**
 * 众筹首页模块
 * @author xierenhong
 */

import temp from './index.html';
import project from './project';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home.c', {
            url: '/c',
            views: {
                'crowd': {
                    templateUrl: temp
                }
            }

        });
        console.log('呵呵呵 crowd');
    }
}
console.log(project);
export default angular.module('so.app.merchants.crowd', [project])
    .config(Config.ConfigInit)
    .name;