/**
 * app 模块
 * @author xierenhong
 */
import AppConfig from '../config/app.config';
import merchants from './merchants/index';
export default angular.module('so.app', [merchants])
    .config(AppConfig.ConfigInit)
    .name;