/**
 * 用户首页
 */
import './index.scss';
import temp from './index.html';
import CitySelectCtrl from './city.select.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('a.city', {
            url: '/city',
            templateUrl: temp,
            controller: CitySelectCtrl.name,
            controllerAs: 'vm'
        });
    }
}
export default angular.module('so.ao.citySelect', [])
    .config(Config.ConfigInit)
    .controller(CitySelectCtrl.name, CitySelectCtrl)
    .name;