/**
 * 启动文件
 * @author xierenhong
 */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngRouter from 'angular-ui-router';
import ui from './components';
import app from './app';
angular.module('so', [
    ngAnimate,
    ngSanitize,
    ngRouter,
    ui,
    app
]);