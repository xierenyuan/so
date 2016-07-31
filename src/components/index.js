/**
 * 组件模块 引入ui 和自定义 组件
 * @author xierenhong
 */
import '../lib/ionic/css/ionic.css';
import '../lib/ionic/js/ionic';
import '../lib/ionic/js/ionic-angular';
import '../lib/ngCordova/dist/ng-cordova';
import IonicConfig from './ionic.config';
export default angular.module('so.ui', ['ionic', 'ngCordova'])
    .run(IonicConfig.RunInit)
    .config(IonicConfig.ConfigInit)
    .name;