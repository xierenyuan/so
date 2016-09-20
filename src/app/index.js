/**
 * app 模块
 * @author xierenhong
 */
import AppConfig from '../config/app.config';
import merchants from './merchants';
import users from './users';
import ao from './ao';
export default angular.module('so.app', [merchants, users, ao])
    .config(AppConfig.ConfigInit)
    .name;