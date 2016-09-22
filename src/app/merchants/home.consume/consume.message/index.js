/**
 * Created by xuwus on 2016/9/22.
 */
import './index.scss';
import temp from './index.html';
import MessageCtrl from './message.controller';
class Config {
  static ConfigInit($stateProvider) {
    'ngInject';
    $stateProvider.state('m.home.conMessage', {
      url: '/conMessage',
      views: {
        'consume': {
          templateUrl: temp,
          controller: MessageCtrl.name,
          controllerAs: 'vm'
        }
      }
    });
  }
}
export default angular.module('so.app.merchants.consume.conMessage', [])
  .config(Config.ConfigInit)
  .controller(MessageCtrl.name,MessageCtrl)
  .name;
