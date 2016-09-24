/**
 * 用户首页
 */
import './index.scss';
import temp from './index.html';
import CitySelectCtrl from './city.select.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home.city', {
            url: '/city',
          views: {
            'consume': {
              templateUrl: temp,
              controller: CitySelectCtrl.name,
              controllerAs: 'vm'
            }
          }
        });
    }
}
export default angular.module('so.app.merchants.consume.citySelect', [])
    .config(Config.ConfigInit)
    .controller(CitySelectCtrl.name, CitySelectCtrl)
    .name;
