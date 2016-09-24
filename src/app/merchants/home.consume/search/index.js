/**
 * 用户搜索
 */
import './index.scss';
import temp from './index.html';
import SearchCtrl from './search.controller';

class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('m.home.search', {
            url: '/search',
          views: {
            'consume': {
              templateUrl: temp,
              controller: SearchCtrl.name,
              controllerAs: 'vm'
            }
          }
        });
    }
}
export default angular.module('so.app.merchants.consume.search', [])
    .config(Config.ConfigInit)
    .controller(SearchCtrl.name, SearchCtrl)
    .name;
