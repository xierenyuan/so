/**
 * 我要支持
 * Created by xuwus on 2016/9/20.
 */
import './index.scss'
import temp from './support.html';
import ctrl from './support.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.crowd.support', {
      url: '/support',
      templateUrl: temp,
      controller: ctrl.name,
      controllerAs: 'vm'
    });
  }
}

export default angular.module('so.app.merchants.crowd.support', [])
  .config(Config.ConfigInit)
  .name;
