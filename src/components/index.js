/**
 * 组件模块 引入ui 和自定义 组件
 * @author xierenhong
 */
import '../lib/ionic/scss/ionic.scss';
import '../assets/fonts/iconfont.css';
import '../sass/theme.scss';
import '../lib/ionic/js/ionic';
import '../lib/ionic/js/ionic-angular';
import '../lib/ngCordova/dist/ng-cordova';
import IonicConfig from './ionic.config';
import hello from './hello.word';
import ListFilter from './list.filter';
export default angular.module('so.ui', ['ionic', 'ngCordova', hello,ListFilter])
    .run(IonicConfig.RunInit)
    .config(IonicConfig.ConfigInit)
    .name;
