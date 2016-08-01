/**
 * app 模块
 * @author xierenhong
 */
import AppConfig from '../config/app.config';
import merchants from './merchants';
import users from './users';
export default angular.module('so.app', [merchants, users])
    .config(AppConfig.ConfigInit)
    .name;