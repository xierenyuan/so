/**
 * Created by xuwus on 2016/9/22.
 */
import './index.scss';
import temp from './index.html';
import search from './consume.search';
import message from './consume.message';
import ConsumeCtrl from './consume.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.consume', {
      url: '/consume',
      views: {
        'consume': {
          templateUrl: temp,
          controller: ConsumeCtrl.name,
          controllerAs: 'vm'
        }
      }
    });
  }
}
export default angular.module('so.app.merchants.consume', [search,message])
  .config(Config.ConfigInit)
  .controller(ConsumeCtrl.name,ConsumeCtrl)
  .name;
