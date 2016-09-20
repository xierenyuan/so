/**
 * 众筹首页模块
 * @author xierenhong
 */
import './index.scss';
import temp from './project.html';
import support from './support';
import ProjectCtrl from './project.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.crowd', {
      url: '/crowd',
      views: {
        'crowd': {
          templateUrl: temp,
          controller: ProjectCtrl.name,
          controllerAs: 'vm'
        }
      }

    });
  }
}
export default angular.module('so.app.merchants.crowd', [support])
  .config(Config.ConfigInit)
  .controller(ProjectCtrl.name,ProjectCtrl)
  .name;
