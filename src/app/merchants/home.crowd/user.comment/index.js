/**
 * 用户评价
 * Created by xuwus on 2016/9/21.
 */
import './index.scss';
import temp from './index.html';
import comment from './comment.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.userComment', {
      url: '/userComment',
      views: {
        'crowd': {
          templateUrl: temp,
          controller: comment.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}

export default angular.module('so.app.merchants.crowd.userComment', [])
  .config(Config.ConfigInit)
  .controller(comment.name,comment)
  .name;
